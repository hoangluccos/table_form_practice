import {
  Autocomplete,
  Box,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Mentees = ["Sinh viên mới tốt nghiệp", "Fresher", "Junior", "Senior"];
const SharingType = [
  "Career coach",
  "Podcast",
  "Football",
  "Writing",
  "Language",
  "Photo",
];
function SharingMentor() {
  return (
    <Box marginY={"2"}>
      <Stack direction="row" spacing={2} height={"100px"}>
        <Box flex={1}>
          <Typography>Đối tượng mentee của bạn *</Typography>
          <Autocomplete
            multiple
            className="my-2"
            options={Mentees}
            autoComplete
            getOptionLabel={(option) => option}
            //renderValue use for custom Chip
            renderValue={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                className="!font-bold"
              />
            )}
          />
        </Box>

        <Box flex={1}>
          <Typography>Nội dung chia sẽ</Typography>
          <Autocomplete
            multiple
            className="my-2 "
            options={SharingType}
            autoComplete
            getOptionLabel={(option) => option}
            //renderValue use for custom Chip
            renderValue={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
          {/* {errors.called && (
            <Typography color="error" fontSize={14} {...register("called")}>
              {errors.called.message}
            </Typography>
          )} */}
        </Box>
      </Stack>
    </Box>
  );
}

export default SharingMentor;
