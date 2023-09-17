import React, {useState} from "react";
import { Box, Skeleton, Stack, styled } from "@mui/material";
import Post from "./Post";

const StyledBox = styled(Box)({
  flex: 4,
  padding: '20px',
  marginLeft: '1px'
});

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <StyledBox flex={4} p={2}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </StyledBox>
  );
};

export default Feed;
