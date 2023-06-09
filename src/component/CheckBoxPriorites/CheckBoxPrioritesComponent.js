import * as React from 'react';
import { Box, Checkbox, Stack, Typography } from "@mui/material";


function CheckBoxPriorites() {


    return (
        <Box  >
            <Stack direction='row' alignItems='start'>
                <Checkbox defaultChecked />
                <Stack>
                    <Typography variant='h4'> Media Balance</Typography>
                    <Typography variant='h6'> Whether at home, school or work, we are surrounded by media and digital devices. At the same time, we know that face-to-face time with family, friends and teachers is important to a child’s learning and healthy development.</Typography>
                </Stack>
            </Stack>

        </Box>
    );

}

export default CheckBoxPriorites;
