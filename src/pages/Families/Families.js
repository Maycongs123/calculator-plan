import {
    Box,
    Button,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useFamily } from "../../context/context";
import FamiliyMemberComponent from "../../component/FamileMember/FamileMemberComponent";

const generateId = () => Math.random() * 10_000_000

function FamilyMemberComponent() {
    const { createFamily } = useFamily();
    const [familyMembers, setFamilyMembers] = useState([{ internalId: generateId() }, { internalId: generateId() }]);

    const handleCreateFamily = (event) => {
        event.preventDefault();

        const familyName = event.target.value;
        console.log(familyName)
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
        <Stack>

            <Box container justifyContent={'center'} display={"flex"} marginBottom={4}>
                <TextField id="outlined-basic" onChange={handleCreateFamily} label="Enter your family name" sx={{ mt: "2rem" }} />
            </Box>
            <Divider variant="middle" />
            <Box margin={2}>
                <Typography variant="h5">My Family</Typography>
                <Button variant="outlined" onClick={handleCreateMemberFamily}>Add Another Family Member</Button>
            </Box>

            <Box>
                {familyMembers.map((member, index) => (
                    <Box mb={2} key={member.internalId}>
                        <FamiliyMemberComponent index={index} onDelete={() => handleDeleteMemberFamily(member)} />
                    </Box>
                ))}
            </Box>

        </Stack>
    );
}

export default FamilyMemberComponent;
