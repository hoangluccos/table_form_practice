import { Chip } from "@mui/material";

export function StatusChip({ status }) {
  const getChipProps = (status) => {
    switch (status) {
      case "female":
        return {
          label: "Female",
          variant: "outlined",
          color: "success",
        };
      case "male":
        return {
          label: "Male",
          variant: "outlined",
          color: "warning",
        };
      default:
        return { label: "Unknown", variant: "outlined" };
    }
  };

  const chipProps = getChipProps(status);

  return <Chip {...chipProps} sx={{ borderRadius: "12px" }} />;
}
