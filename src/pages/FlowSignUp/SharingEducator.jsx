import {
  Autocomplete,
  Box,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { Controller, useFormContext } from "react-hook-form";
const experience = ["Sinh viên mới tốt nghiệp", "1 năm", "2 năm", "3 năm"];
const expertise = [
  "Career coach",
  "Podcast",
  "Football",
  "Writing",
  "Language",
  "Photo",
];
const SharingEducator = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box marginY={"2"} maxWidth={"100%"}>
      <Stack direction="row" spacing={2} width={"100%"}>
        <Box flex={1} sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography>Kinh nghiệm</Typography>
          <Controller
            name="experience"
            control={control}
            render={({ field }) => (
              <Autocomplete
                className="my-2"
                options={experience}
                autoComplete
                value={field.value || ""}
                onChange={(_, newValue) => field.onChange(newValue)}
                //let user input doesn't bound with search option
                freeSolo
                clearIcon={<CancelPresentationIcon />}
                getOptionLabel={(option) => option} //if typeof option === "string" ? option : option.label ?? ''
                //renderValue use for custom Chip

                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
            )}
          />
          {errors.experience && (
            <Typography color="error" fontSize={14}>
              {errors.experience.message}
            </Typography>
          )}
        </Box>

        <Box flex={1} sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography>Chuyên môn</Typography>
          <Controller
            name="expertise"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                className="my-2 "
                options={expertise}
                autoComplete
                value={field.value || []}
                onChange={(_, newValue) => field.onChange(newValue)}
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
            )}
          />
          {errors.expertise && (
            <Typography color="error" fontSize={14}>
              {errors.expertise.message}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default SharingEducator;
