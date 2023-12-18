import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Reading blueprints",
    description: `Interpreting technical drawings and blueprints to understand the specifications of the project.`,
  },
  {
    label: "Preparing Materials",
    description:
      "Cleaning, cutting, and shaping the materials to be welded using tools such as grinders, saws, and shears.",
  },
  {
    label: "Setting up Equipment",
    description: `Appropriate welding method and equipment are chosen based on the materials being joined and the specific requirements of the project.`,
  },
  {
    label: "Welding Techniques",
    description: `Using various welding techniques such as arc welding, gas welding, and TIG welding, melt and fuse materials together.`,
  },
  {
    label: "Ensuring Structural Integrity",
    description: `Ensuring that the welded joints meet quality and safety standards, as the integrity of the weld is crucial for the strength and durability of the finished product.`,
  },
  {
    label: "Inspecting and Testing Welds",
    description: `After completing the welding process, conducting inspections and tests to ensure that the welds meet specified standards and requirements.`,
  },
];

export default function Process() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={-1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <Typography textAlign="right" sx={{ fontWeight: 100 }}>
              {step.description}
            </Typography>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
