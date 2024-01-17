import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Dropdown = ({
  label,
  option,
  personalDetails,
  setPersonalDetails,
}) => {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const updated = { ...personalDetails, [label]: newValue };
    setPersonalDetails(updated);
    console.log("updated", updated);
    // You can perform additional actions with the updated value here
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={handleInputChange}
      >
        {option.map((opt, index) => {
          return <MenuItem value={opt}>{opt}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};
