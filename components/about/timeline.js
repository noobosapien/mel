import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Company started",
    description: `on 2015 the company started`,
  },
  {
    label: "Brought first CNC machine",
    description: "Got a new CNC machine",
  },
  {
    label: "Milestone 1",
    description: `Reached the first milestone`,
  },
];

export default function Timeline() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={-1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <Typography textAlign="right">{step.description}</Typography>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
