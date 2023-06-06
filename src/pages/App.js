import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Button, Grid, Typography } from '@mui/material';
import Tutorial from './Tutorial/tutorial';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <VideoLabelIcon />,
        3: <GroupAddIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};



const steps = ['Home', 'Tutorial', 'My Family', 'teste'];

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = React.useState({});

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    // const handleNext = () => {
    //     debugger
    //     const newActiveStep =
    //         isLastStep() && !allStepsCompleted()
    //             ? // It's the last step, but not all steps have been completed,
    //             // find the first step that has been completed
    //             steps.findIndex((step, i) => !(i in completed))
    //             : activeStep + 1;
    //     setActiveStep(newActiveStep);
    // };

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
    return (
        <Stack sx={{ width: '100%', margin: '1rem' }} spacing={4}>

            {<Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                <Step>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>Home</StepLabel>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, pl: '12rem' }}>
                        {activeStep === 0 &&
                            <React.Fragment>
                                <h1>HOME</h1>
                            </React.Fragment>
                        }
                    </Box>
                </Step>

                <Step>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>Tutorial</StepLabel>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2, pl: '5rem' }}>
                        {activeStep === 1 &&
                            <React.Fragment>
                                <Tutorial />
                            </React.Fragment>
                        }
                    </Box>
                </Step>

                <Step>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>My Family</StepLabel>
                    <div>
                        {activeStep === 2 &&
                            <React.Fragment>
                                <h1>My Family</h1>
                            </React.Fragment>
                        }
                    </div>
                </Step>

                <Step>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>Priorities</StepLabel>
                    <div>
                        {activeStep === 3 &&
                            <React.Fragment>
                                <h1>Priorities</h1>
                            </React.Fragment>
                        }
                    </div>
                </Step>

            </Stepper>}

            <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
            </Button>

            <div>
                <p>Screen width: {screenWidth}px</p>
                <p>Screen height: {screenHeight}px</p>
            </div>
        </Stack>
    );

}

export default App;
