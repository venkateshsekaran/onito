import * as Yup from "yup";

import { Alert, Button, Snackbar } from "@mui/material";
import { ButtonDiv, Container, FormGridContainer, StepTitle } from "./styled";
import React, { useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Dropdown } from "../Component/Dropdown";
import { InputTextBox } from "../Component/InputTextBox";

const Step1 = ({ setStep, personalDetails, setPersonalDetails }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  // Toast Message Close
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Aadhar Validation
  const idSchema = Yup.string()
    .matches(/^[2-9]\d{11}$/, "Aadhar should have 12 numeric digits")
    .notOneOf(["0", "1"], "Aadhar should not start with 0 or 1")
    .required("Aadhar is required when Govt ID Type is Aadhar");

  // Pan Validation
  const panSchema = Yup.string()
    .matches(
      /^[A-Za-z0-9]{10}$/,
      "PAN should be a 10-character alphanumeric string"
    )
    .required("PAN is required when Govt ID Type is PAN");

  // Validation
  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    Age: Yup.number()
      .required("Age is required")
      .positive("Age must be a positive number"),
    Sex: Yup.string()
      .required("Sex is required")
      .oneOf(["Male", "Female"], "Invalid Sex value"),
    Mobile: Yup.string().matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Invalid Indian Mobile Number"
    ),
    "Govt-ID-Type": Yup.string().oneOf(
      ["Aadhar", "PAN"],
      "Invalid Govt ID Type"
    ),
    // Corrected field name
    "Govt ID": personalDetails["Govt-ID-Type"] === "PAN" ? panSchema : idSchema,
  });

  // Validation Function Trigger
  const validateForm1 = async () => {
    try {
      await validationSchema.validate(personalDetails);
      // Validation passed
      setError(false);
      setStep(2);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setError(true);
      } else {
        // Something else went wrong
        setError(true);
      }
    }
  };

  return (
    <Container>
      <StepTitle>Personal Detail</StepTitle>
      {/* Form */}
      <FormGridContainer>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={open && error ? "error" : "success"}
            sx={{ width: "100%" }}
          >
            {open && error
              ? "Please enter valid details"
              : "Personal Details has been added"}
          </Alert>
        </Snackbar>
        <InputTextBox
          label="Name"
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <InputTextBox
          label="Age"
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          type="number"
        />
        <Dropdown
          label="Sex"
          option={["Male", "Female"]}
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <InputTextBox
          label="Mobile"
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <Dropdown
          label="Govt-ID-Type"
          option={["Aadhar", "PAN"]}
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <InputTextBox
          label="Govt ID"
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      </FormGridContainer>
      {/* Next Button */}
      <ButtonDiv>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            setError(false);
            setOpen(true);
            validateForm1();
          }}
        >
          Next
        </Button>
      </ButtonDiv>
    </Container>
  );
};

export default Step1;
