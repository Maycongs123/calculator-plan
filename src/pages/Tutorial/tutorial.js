import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
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

function Tutorial() {

  return (
    <Grid container>
      <Grid item xs={12}>
    <Stack sx={{ width: '100%' , margin: '1rem'}} spacing={4}>
    <Box>
        <Stack>
            <p>TESTE TESTE TESTE TESTE </p>
        </Stack>
    </Box>
      <Button sx={{ mr: 1 }}>
        Next
      </Button>
    </Stack>
     </Grid>
     </Grid>
  );

}

export default Tutorial;
