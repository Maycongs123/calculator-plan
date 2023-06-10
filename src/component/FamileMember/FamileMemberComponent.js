import { Box, IconButton, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { AvatarWithBadge } from "../AvatarWithBadge";
import { CleaningServicesOutlined } from "@mui/icons-material";
import { DeleteButton } from "./styles";

function FamiliyMemberComponent({ onDelete }) {
  const [age, setAge] = useState("13-18");

  const windowSize = useWindowSize();


  const handleAge = (newAge) => {
    setAge(newAge);
  };

  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  return (
    <Box
      display="flex"
      flexDirection={isMobile(windowSize) ? "column" : "row"}
      alignItems={isMobile(windowSize) ? "flex-start" : "center"}
      sx={{ backgroundColor: "#ffffff", position: "relative" }}
      border={1}
      borderRadius={1}
      padding={1}
      gap={2}
    >
      <Stack direction="row" alignItems="center" gap={4}>
        <AvatarWithBadge
          url={"https://www.pngmart.com/files/5/Poro-PNG-Image.png"}
          onSmallBadgeClick={() => {
            console.log(
              "Implementar logica para abrir a midal para editar o avatar."
            );
          }}
        />

        <TextField id="outlined-basic" label="Family Member's Name" />
      </Stack>

      {/* TODO: adicionar bot"ao para remover o componente ao clicar aqui, deve ser o iconde  removeer... */}
      <DeleteButton />


      <Box>
        <Typography>Age</Typography>
        <br />
        <ToggleButtonGroup
          size="small"
          exclusive
          value={age}
          onChange={handleAge}
        >
          <ToggleButton value="0-24"> 0-24 months</ToggleButton>
          <ToggleButton value="2-3"> 2-3 years</ToggleButton>
          <ToggleButton value="6-12"> 6-12 yearss</ToggleButton>
          <ToggleButton value="13-18"> 13-18 years</ToggleButton>
          <ToggleButton value="adult"> Adult </ToggleButton>
        </ToggleButtonGroup>

        <IconButton aria-label="delete" onClick={onDelete}>
          <CleaningServicesOutlined color="error" fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default FamiliyMemberComponent;