import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import AddPost from "./components/AddPost";


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
        <LeftBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;

{
  /*   because of dark mode ==> <Box bgcolor={'background.default'} color={'text.primary'}>    */
}
