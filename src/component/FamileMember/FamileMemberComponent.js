import * as React from 'react';
import { Image } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";


function FamiliyMemberComponent() {

    const [age, setAge] = React.useState('13-18');

    const handleAge = (event, newAge) => {
        setAge(newAge);
    };

    return (
        <Box display='flex' sx={{ backgroundColor: '#ffffff' }} border={1} borderRadius={1} height={100} padding={1} >

            <Stack direction='row' alignItems='center'>
                <Stack direction='row' spacing={-3}>
                    <Box
                        borderRadius={"16rem"}
                        border={1}
                        component="img"
                        sx={{
                            height: 65,
                            width: 65,
                            padding: 1,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
                    />
                    <Button>E</Button>
                </Stack>
                <TextField id="outlined-basic" label="Family Member's Name" sx={{ width: '25rem' }} />
            </Stack>

            <Stack pt={2} ml={3}>

                <ToggleButtonGroup  size='medium' exclusive value={age} onChange={handleAge}>
                    <ToggleButton  value="0-24"> 0-24 months</ToggleButton>
                    <ToggleButton  value="2-3"> 2-3 years</ToggleButton>
                    <ToggleButton  value="6-12"> 6-12 yearss</ToggleButton>
                    <ToggleButton  value="13-18"> 13-18 years</ToggleButton>
                    <ToggleButton  value="adult"> Adult </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Box>
    );

}

export default FamiliyMemberComponent;
