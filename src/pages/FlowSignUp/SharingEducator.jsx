import {
  Autocomplete,
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClearIcon from "@mui/icons-material/Clear";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
const experience = ["Sinh viên mới tốt nghiệp", "1 năm", "2 năm", "3 năm"];
const expertise = [
  "Career coach",
  "Podcast",
  "Football",
  "Writing",
  "Language",
  "Photo",
];
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const SharingEducator = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [selectedFile, setSelectedFile] = useState([]);
  const handleFileChange = (e) => {
    console.log("event", e);
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const new_files = files.map((f) => ({
      selectFile: f,
      url: URL.createObjectURL(f),
    }));
    const updatedFiles = [...selectedFile, ...new_files];
    setSelectedFile(updatedFiles);
    //update for validate RHF
    setValue("image", updatedFiles);
  };

  // const handleUpload = async () => {
  //   console.log("selectedFile", selectedFile);
  // };
  const handleRemoveImage = (fileToRemove) => {
    const updatedFiles = selectedFile.filter(
      (file) => file.selectFile !== fileToRemove
    );
    setSelectedFile(updatedFiles);
    setValue("image", updatedFiles);
  };
  return (
    <Box marginY={"2"} maxWidth={"100%"}>
      <Stack direction="row" spacing={2} width={"100%"} height={"100px"}>
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
      <Stack direction="column" spacing={2} width={"100%"} marginY={"1rem"}>
        <Box flex={1} sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography>Thêm hình ảnh</Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileChange}
              multiple
            />
          </Button>
        </Box>
        <Stack direction={"row"} spacing={2} flexWrap="wrap">
          {selectedFile.length > 0 &&
            selectedFile.map((item, index) => (
              <Box
                key={index}
                style={{ maxWidth: "150px" }}
                className="relative"
              >
                <img
                  src={item.url}
                  alt={`preview-${index}`}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
                <IconButton
                  onClick={() => handleRemoveImage(item.selectFile)}
                  aria-label="delete"
                  size="large"
                  className="!absolute top-0 right-0 !p-0 !bg-red-600"
                >
                  <ClearIcon fontSize="inherit" />
                </IconButton>
              </Box>
            ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharingEducator;
