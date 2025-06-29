import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import RowTextField from "../../components/RowTextField";
import { useFormContext } from "react-hook-form";
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
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Box>
      <Stack direction="row" spacing={2} height={"100px"}>
        <Box flex={1}>
          <Typography>Họ và tên*</Typography>
          <TextField
            fullWidth
            size="small"
            className="!my-2"
            {...register("fullName")}
          ></TextField>
          {errors.fullName && (
            <Typography color="error" fontSize={14}>
              {errors.fullName.message}
            </Typography>
          )}
        </Box>

        <Box flex={1}>
          <Typography>Cách xưng hô?</Typography>
          <TextField
            select
            fullWidth
            size="small"
            className="!my-2"
            {...register("called")}
          >
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
          {errors.called && (
            <Typography color="error" fontSize={14} {...register("called")}>
              {errors.called.message}
            </Typography>
          )}
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} height={"100px"}>
        <Box flex={1}>
          <Typography>Email*</Typography>
          <TextField
            fullWidth
            size="small"
            className="!my-2"
            {...register("email")}
          ></TextField>
          {errors.email && (
            <Typography color="error" fontSize={14}>
              {errors.email.message}
            </Typography>
          )}
        </Box>
        <Box flex={1}>
          <Typography>Số điện thoại*</Typography>
          <TextField
            fullWidth
            size="small"
            className="!my-2"
            {...register("phone")}
          ></TextField>
          {errors.phone && (
            <Typography color="error" fontSize={14}>
              {errors.phone.message}
            </Typography>
          )}
        </Box>
      </Stack>

      <Box height={"100px"}>
        <Typography>LinkeIn của anh/chị*</Typography>
        <TextField
          fullWidth
          size="small"
          className="!my-2"
          {...register("linkedin")}
        ></TextField>
        {errors.linkedin && (
          <Typography color="error" fontSize={14}>
            {errors.linkedin.message}
          </Typography>
        )}
      </Box>
      <Box height={"100px"}>
        <Typography>Social media link*</Typography>
        <TextField
          fullWidth
          size="small"
          className="!my-2"
          {...register("social")}
        ></TextField>
        {errors.social && (
          <Typography color="error" fontSize={14}>
            {errors.social.message}
          </Typography>
        )}
      </Box>
      {/* <RowTextField title1={"Email*"} title2={"Số điện thoại*"} />
      <RowTextField is1Item={true} titleOnly={"LinkeIn của anh/chị*"} />
      <RowTextField
        is1Item={true}
        titleOnly={"Social media link*"}
        marginBottom={2}
      /> */}
    </Box>
  );
}

export default Information;
