import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import FamiliyMemberComponent from "../../component/FamileMember/FamileMemberComponent";
import { useFamily } from "../../context/context";
import { useState } from "react";

const generateId = () =>  Math.random() * 10_000_000


function Families() {
    const { createFamily } = useFamily();
    const [familyMembers, setFamilyMembers] = useState([{ internalId: generateId() }, { internalId: generateId() }]);

    const handleCreateFamily = (event) => {
        event.preventDefault();

        const familyName = event.target.value;

        createFamily(familyName);
    };

    const handleCreateMemberFamily = () => {
        setFamilyMembers((prevMembers) => [...prevMembers, {
            internalId: generateId()
        }]);
    };

    const handleDeleteMemberFamily = (member) => {
        setFamilyMembers((prevMembers) => prevMembers.filter((prevMember) => prevMember.internalId !== member.internalId));

    };

    return (
        <Box>
            <Stack>
                <Box container justifyContent={'center'} display={"flex"} marginBottom={4}>
                    <TextField id="outlined-basic" onChange={handleCreateFamily} label="Enter your family name" sx={{ mt: "2rem" }} />
                </Box>
                <Divider variant="middle" />
                <Box>
                    <Box margin={2}>
                        <Typography variant="h5">My Family</Typography>
                        <Button variant="outlined" onClick={handleCreateMemberFamily}>Add Another Family Member</Button>
                    </Box>

                    <Box>
                        {familyMembers.map((member, index) => (
                            <Box mb={2} key={member.internalId}>
                                <FamiliyMemberComponent  index={index} onDelete={() => handleDeleteMemberFamily(member)} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}

export default Families;