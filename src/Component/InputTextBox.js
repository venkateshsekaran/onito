import { TextField } from "@mui/material";

export const InputTextBox = ({
  label,
  personalDetails,
  setPersonalDetails,
  type = "text",
}) => {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const updated = {
      ...personalDetails,
      [label]:
        label === "Age" || label === "Mobile" ? parseInt(newValue) : newValue,
    };
    setPersonalDetails(updated);
    // You can perform additional actions with the updated value here
  };
  return (
    <TextField
      required
      id="outlined-required"
      label={label}
      defaultValue=""
      type={type}
      onChange={handleInputChange}
    />
  );
};
