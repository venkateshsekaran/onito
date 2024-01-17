import {
  AppLayout,
  FormDiv,
  MainAppContainer,
  TableDiv,
  TimelineDiv,
} from "./styled";
import React, { useState } from "react";

import BasicTable from "./Component/BasicTable";
import Step1 from "./Screen/Step1";
import Step2 from "./Screen/Step2";
import TimelineComp from "./Component/TimelineComp";

function App() {
  const [step, setStep] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({
    Name: "",
    Age: "",
    Sex: "",
    Mobile: "",
    "Govt-ID-Type": "",
    "Govt ID": "", // Corrected field name
  });
  const [addressDetails, setAddressDetails] = useState({
    Address: "",
    State: "",
    City: "",
    Pincode: "",
    Country: "",
  });
  return (
    <MainAppContainer>
      <AppLayout>
        {/* TimeLine */}
        <TimelineDiv>
          <TimelineComp step={step} />
        </TimelineDiv>
        {/* Form */}
        <FormDiv>
          {step === 1 ? (
            <Step1
              setStep={setStep}
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
            />
          ) : (
            <Step2
              setStep={setStep}
              addressDetails={addressDetails}
              setAddressDetails={setAddressDetails}
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
              tableData={tableData}
              setTableData={setTableData}
            />
          )}
        </FormDiv>
      </AppLayout>
      {/* Table */}
      {tableData.length !== 0 && (
        <TableDiv>
          <BasicTable tableData={tableData} />
        </TableDiv>
      )}
    </MainAppContainer>
  );
}

export default App;
