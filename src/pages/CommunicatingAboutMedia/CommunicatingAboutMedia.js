import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SelectPrioritesToMemberFamilyComponent from "../../component/SelectMediaBalance/SelectMediaBalanceComponent";


function CommunicatingAboutMedia() {

    return (
        <Box>
            <Box>
                <Typography variant="h4"> <PersonSearchIcon fontSize="large" />  We will help balance tech with online and offline activities by: </Typography>
            </Box>

            <Box>
                <Grid container gap={4}>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>
                    <Grid item xs={12}> <SelectPrioritesToMemberFamilyComponent text='Talking about media on a regular basis.' /> </Grid>

                </Grid>
            </Box>
        </Box>
    );

}

export default CommunicatingAboutMedia;
