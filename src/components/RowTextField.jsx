import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function RowTextField({
  is1Item = false,
  titleOnly,
  title1,
  title2,
  marginBottom,
}) {
  return !is1Item ? (
    <Stack direction="row" spacing={2} mb={2}>
      <Box flex={1}>
        <Typography>{title1}</Typography>
        <TextField fullWidth size="small"></TextField>
      </Box>
      <Box flex={1}>
        <Typography>{title2}</Typography>
        <TextField fullWidth size="small"></TextField>
      </Box>
    </Stack>
  ) : (
    <Box mt={2} mb={marginBottom}>
      <Typography>{titleOnly}</Typography>
      <TextField fullWidth size="small"></TextField>
    </Box>
  );
}

export default RowTextField;
