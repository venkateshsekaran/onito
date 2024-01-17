import { Autocomplete, Button, TextField } from "@mui/material";
import { ButtonDiv, Container, FormGridContainer, StepTitle } from "./styled";
import React, { useState } from "react";

import { InputTextBox } from "../Component/InputTextBox";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Step2 = ({
  setStep,
  addressDetails,
  setAddressDetails,
  personalDetails,
  setPersonalDetails,
  tableData,
  setTableData,
}) => {
  const [options, setOptions] = useState([]);

  // Country Method handling
  const handleInputChange = async (event, newInputValue) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${newInputValue}`
      );
      const countries = response.data.map((country) => ({
        label: country.name.common,
        value: country.name.common,
      }));
      setOptions(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
  const handleSubmit = () => {
    if (personalDetails.Name) {
      const tableDetails = { ...personalDetails, ...addressDetails };
      const updated = [...tableData, tableDetails];
      setTableData(updated);
      setPersonalDetails({
        Name: "",
        Age: "",
        Sex: "",
        Mobile: "",
        "Govt-ID-Type": "",
        "Govt ID": "",
      });
      setAddressDetails({
        Address: "",
        State: "",
        City: "",
        Pincode: "",
        Country: "",
      });
    }
    setStep(1);
  };
  return (
    <Container>
      <StepTitle>Address Detail</StepTitle>

      {/* Form */}

      <FormGridContainer>
        <InputTextBox
          label="Address"
          personalDetails={addressDetails}
          setPersonalDetails={setAddressDetails}
        />
        <InputTextBox
          label="State"
          personalDetails={addressDetails}
          setPersonalDetails={setAddressDetails}
        />
        <InputTextBox
          label="City"
          personalDetails={addressDetails}
          setPersonalDetails={setAddressDetails}
        />
        <InputTextBox
          label="Pincode"
          personalDetails={addressDetails}
          setPersonalDetails={setAddressDetails}
          type="number"
        />
        <Autocomplete
          onChange={(event, newValue) => {
            // Handle the selected value
            const updated = { ...addressDetails, Country: newValue.value };
            setAddressDetails(updated);
          }}
          onInputChange={handleInputChange}
          id="controllable-states-demo"
          options={options}
          getOptionLabel={(option) => option.label}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
      </FormGridContainer>

      {/* Button Submit */}

      <ButtonDiv>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit()}
        >
          Submit
        </Button>
      </ButtonDiv>
    </Container>
  );
};

export default Step2;
