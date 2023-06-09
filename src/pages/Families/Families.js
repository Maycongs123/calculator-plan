import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import FamiliyMemberComponent from "../../component/FamileMember/FamileMemberComponent";


function Families() {

    return (
        <Box >
            <Stack>
                <Box container justifyContent={'center'} display={"flex"} marginBottom={4}>
                    <TextField id="outlined-basic" label="Enter your family name" sx={{ mt: "2rem" }} />
                    
                </Box>
                <Divider variant="middle" />
                <Box>
                    <Box margin={2}>
                        <Typography variant="h5" > My Family</Typography>
                        <Button variant="outlined" > Add Another Family Member</Button>
                    </Box>

                    <Box>
                        <Grid container gap={3}>
                            <Grid item><FamiliyMemberComponent /></Grid>

                            <Grid item><FamiliyMemberComponent /></Grid>

                        </Grid>


                    </Box>
                </Box>



            </Stack>
        </Box>
    );

}

export default Families;
