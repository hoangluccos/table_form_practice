import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import RowTextField from "../../components/RowTextField";

const howToCall = [
  {
    label: "Anh",
    value: "he",
  },
  {
    label: "Chị",
    value: "she",
  },
];
function Information() {
  return (
    <Box mt={2}>
      <Stack direction="row" spacing={2} mb={2}>
        <Box flex={1}>
          <Typography>Họ và tên*</Typography>
          <TextField fullWidth size="small"></TextField>
        </Box>
        <Box flex={1}>
          <Typography>Cách xưng hô?</Typography>
          <TextField select fullWidth size="small">
            {howToCall.map((i, index) => (
              <MenuItem
                value={i?.value}
                className="!bg-transparent hover:!bg-gray-100"
                key={index}
              >
                {i?.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>
      <RowTextField title1={"Email*"} title2={"Số điện thoại*"} />
      <RowTextField is1Item={true} titleOnly={"LinkeIn của anh/chị*"} />
      <RowTextField
        is1Item={true}
        titleOnly={"Social media link*"}
        marginBottom={2}
      />
    </Box>
  );
}

export default Information;
