import { Box, Button, IconButton, Stack, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { useFamily } from "../../context/context";

function FamiliyMemberComponent({ onDelete }) {
  const [age, setAge] = useState('13-18');
  const { family } = useFamily();

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
            }}
            alt="The house from the offer."
            src="https://www.pngmart.com/files/5/Poro-PNG-Image.png"
          />
          <Button>E</Button>
        </Stack>
        <TextField id="outlined-basic" label="Family Member's Name" sx={{ width: '25rem' }} />
      </Stack>

      <Stack direction='row' gap={2} py={2} ml={3}>
        <ToggleButtonGroup size='medium' exclusive value={age} onChange={handleAge}>
          <ToggleButton value="0-24 months" > 0-24 months</ToggleButton>
          <ToggleButton value="2-3 years"> 2-3 years</ToggleButton>
          <ToggleButton value="6-12 years"> 6-12 yearss</ToggleButton>
          <ToggleButton value="13-18 years"> 13-18 years</ToggleButton>
          <ToggleButton value="adult"> Adult </ToggleButton>
        </ToggleButtonGroup>

        <IconButton aria-label="delete" onClick={onDelete}>
          <ClearIcon color="error" fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default FamiliyMemberComponent;