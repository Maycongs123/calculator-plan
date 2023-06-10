import React, { useState } from 'react';
import { Grid, Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import Families from '../Families/Families';
import Priorities from '../Priorites/Priorites';
import MediaBalance from '../MediaBalance/MediaBalance';
import CommunicatingAboutMedia from '../CommunicatingAboutMedia/CommunicatingAboutMedia';
import KindnessAndEmpathy from '../KindnessAndEmpathy/KindnessAndEmpathy';
import DigitalPrivacy from '../DigitalPrivacy/DigitalPrivacy';
import ScreenFreeZones from '../ScreenFreeZones/ScreenFreeZones';
import ScreenFreeTimes from '../ScreenFreeTimes/ScreenFreeTimes';
import ChoosingGoodContent from '../ChoosingGoodContent/ChoosingGoodContent';
import UsingMediaTogether from '../UsingMediaTogether/UsingMediaTogether';
import { FamilyContextProvider } from '../../context/context';

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
    'Screen Free Zones',
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
        return <FamilyContextProvider> <Families /> </FamilyContextProvider>;
      case 3:
        return <FamilyContextProvider> <Priorities /> </FamilyContextProvider>;
      case 4:
        return <FamilyContextProvider> <MediaBalance /> </FamilyContextProvider>;
      case 5:
        return <FamilyContextProvider> <CommunicatingAboutMedia /></FamilyContextProvider>;
      case 6:
        return <FamilyContextProvider> <KindnessAndEmpathy /></FamilyContextProvider>;
      case 7:
        return <FamilyContextProvider> <DigitalPrivacy /></FamilyContextProvider>;
      case 8:
        return <FamilyContextProvider> <ScreenFreeZones /></FamilyContextProvider>;
      case 9:
        return <FamilyContextProvider> <ScreenFreeTimes /></FamilyContextProvider>;
      case 10:
        return <FamilyContextProvider> <ChoosingGoodContent /></FamilyContextProvider>;
      case 11:
        return <FamilyContextProvider> <UsingMediaTogether /></FamilyContextProvider>;
      case 12:
        return <FamilyContextProvider> <UsingMediaTogether /></FamilyContextProvider>;
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
      case 3:
        return <Step3ComponentHeader />;
      case 4:
        return <Step4ComponentHeader />;
      case 5:
        return <Step5ComponentHeader />;
      case 6:
        return <Step6ComponentHeader />;
      case 7:
        return <Step7ComponentHeader />;
      case 8:
        return <Step8ComponentHeader />;
      case 9:
        return <Step9ComponentHeader />;
      case 10:
        return <Step10ComponentHeader />;
      case 11:
        return <Step11ComponentHeader />;
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
          <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#FAFAEF' }}>

            <Grid>
              <Grid item xs={8} sm={12}>
                <Box sx={{ width: '100%' }}>
                  <Button

                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, margin: '40px' }}
                  >
                    Back
                  </Button>
                  <Button variant="contained" onClick={handleNext} sx={{ mr: 1, margin: '40px' }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <Box >
                    <Box sx={{ padding: '2rem', marginLeft: '1rem', marginRight: '1rem' }}>
                      {renderStepContent(activeStep)}
                    </Box>
                  </Box>
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
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>​Learn to Use the Family Media Plan</Typography>
  </Box>
};

const Step2ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Create or Update Your Family Media Plan</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>To get started, create a profile for each member of your family. Include th​eir names and ages. You can even add fun avatars for each family member. Add as many family members as you need.​​​​​</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
      <Typography>To find this information in Spanish, click ​here.</Typography>
    </Box>
  </Box>
};

const Step3ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Choose Your Media Priorities</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>Select priorities from the list below that matter the most ​​​to your family.​​​​​</Typography>
  </Box>
};

const Step4ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Media Balance</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>​Whether at home, school or work, we are surrounded by media and digital devices. At the same time, we know that face-to-face time with family, friends and teachers is important to a child’s learning and healthy development.​​​​​</Typography>
  </Box>
};

const Step5ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Communicating About Media</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>Media shouldn’t be a taboo topic. It’s all around us, so we have to talk​ about it. The more you discuss it as part of your daily routine — in the car, dinner table or at a regular family meeting —​ the more natural it will become. ​</Typography>
  </Box>
};

const Step6ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Kindness & Empathy</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>Having family expectations about being kind and understanding of others — both online and off — is key to healthy, respectful relationships and positive media use. ​</Typography>
  </Box>
};

const Step7ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Digital Privacy & Safety</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>​The internet is still a bit like the Wild West. Certainly, it is not always designed with kids in mind. Talking about digital safety rules can help your child navigate the digital landscape. You can also use a combination of tools: privacy settings, reporting and flagging inappropriate content and ongoing conversations about online behavior. ​ ​</Typography>
  </Box>
};

const Step8ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Screen Free Zones</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>​​​​​​Having areas of your home remain screen-free benefits a child's health and development in many ways. A big part of this is understanding and agreeing as a family where screens are not allowed. ​</Typography>
  </Box>
};

const Step9ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Screen Free Times</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>​Screens don't have to be in every moment and every space of our day, trying to grab everyone's attention. Carving out time for family conversations and play is really important for your child’s health and development. ​</Typography>
  </Box>
};

const Step10ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Choosing Good Content</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>​​​​​There are millions of shows, apps and video games​ trying to get your family’s attention. Finding content that is a good fit with your family can take work. However, it’s worth it to find media that gives your child creative experiences, positive role models and true enjoyment.​ ​</Typography>
  </Box>
};

const Step11ComponentHeader = () => {
  return <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: '#D5D3C1' }}>
    <Typography variant='h4'>Using Media Together</Typography>
    <Typography sx={{ marginTop: '2rem', marginBottom: '2rem' }}>​​​​​​​​​​Not all screen time is created equal. Enjoying movie night, watching an educational video or exploring a learning app together, for example, turns screen time into family time. Using digital media together can build bonds, promote learning and show your child that you care about what matters to them. ​​ ​</Typography>
  </Box>
};

export default Tutorial;
