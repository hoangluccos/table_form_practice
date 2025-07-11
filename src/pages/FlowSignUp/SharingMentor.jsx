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
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box marginY={"2"} maxWidth={"100%"}>
      <Stack direction="row" spacing={2} width={"100%"}>
        <Box flex={1} sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography>Đối tượng mentee của bạn *</Typography>
          <Controller
            name="objectMentees"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                className="my-2"
                options={Mentees}
                autoComplete
                value={field.value || []}
                onChange={(_, newValue) => field.onChange(newValue)}
                //let user input doesn't bound with search option
                freeSolo
                clearIcon={<CancelPresentationIcon />}
                getOptionLabel={(option) => option} //if typeof option === "string" ? option : option.label ?? ''
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
          {errors.objectMentees && (
            <Typography color="error" fontSize={14}>
              {errors.objectMentees.message}
            </Typography>
          )}
        </Box>

        <Box flex={1} sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography>Nội dung chia sẽ</Typography>
          <Controller
            name="sharingTopic"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                className="my-2 "
                options={SharingType}
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
          {errors.sharingTopic && (
            <Typography color="error" fontSize={14}>
              {errors.sharingTopic.message}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default SharingMentor;
