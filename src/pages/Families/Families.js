import { Box, Grid } from "@mui/material";


function Families() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={8} sm={12}>
                <Box sx={{ padding: '2rem', marginLeft: '5rem', marginRight: '5rem', background: 'white' }}>
                       Enter your family Name
                </Box>
            </Grid>
        </Grid>
    );

}

export default Families;
