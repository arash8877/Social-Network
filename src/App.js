import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;

{
  /*   because of dark mode ==> <Box bgcolor={'background.default'} color={'text.primary'}>    */
}
