import React, { useState } from 'react';
import { Grid, Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import Families from '../Families/Families';

function Tutorial() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    'Home',
    'Tutorial',
    'My Family',
    'Priorities',
    'Media Balance',
    'Communicating About Media',
    'Kindness & Empathy',
    'Digital Privacy & Safety',
    'Screen Free Times',
    'Choosing Good Content',
    'Using Media Together',
    'Review'
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1Component />;
      case 1:
        return <Grid container spacing={2}>
          <Grid item xs={8} sm={12}>
            <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: 'white' }}>
              Inserir Video Aqui
            </Box>
          </Grid>
        </Grid>
      case 2:
        return <Families />;
      default:
        return null;
    }
  };


  const renderStepContentHeader = (step) => {
    switch (step) {
      case 0:
        return <Step1ComponentHeader />;
      case 1:
        return <Step1ComponentHeader />;
      case 2:
        return <Step2ComponentHeader />;
      default:
        return null;
    }
  };

  return (

    <Grid sx={{ marginTop: '8rem' }} container spacing={2}>
      <Grid item xs={8} sm={12}>
        <Box component="main">
          <Box >
            {renderStepContentHeader(activeStep)}
          </Box>
          <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', height: '16rem', background: 'Lightgray' }}>

            <Grid>
              <Grid item xs={8} sm={12}>
                <Box sx={{ width: '100%' }}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <Grid item xs={8} sm={12}>
                    <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: 'Lightgray' }}>
                      {renderStepContent(activeStep)}
                    </Box>
                  </Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

}

const Step1Component = () => {
  return <div>Step 1 Content</div>;
};

const Step2Component = () => {
  return <div>Step 2 Content</div>;
};

const Step3Component = () => {
  return <div>Step 3 Content</div>;
};


const Step1ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: 'gray' }}>
    <Typography variant='h4'>​Learn to Use the Family Media Plan</Typography>
  </Box>
};

const Step2ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: 'gray' }}>
    <Typography variant='h4'>Create or Update Your Family Media Plan</Typography>
    <Typography sx={{marginTop: '2rem', marginBottom: '2rem'}}>To get started, create a profile for each member of your family. Include th​eir names and ages. You can even add fun avatars for each family member. Add as many family members as you need.​​​​​</Typography>
    <Box sx={{display: 'flex', justifyContent: 'end'}}>
      <Typography>To find this information in Spanish, click ​here.</Typography>
    </Box>
  </Box>
};

const Step3ComponentHeader = () => {
  return <div>Step 3 Content</div>;
};

export default Tutorial;
