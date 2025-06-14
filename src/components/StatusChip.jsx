import { Chip } from "@mui/material";

export function StatusChip({ status }) {
  const getChipProps = (status) => {
    switch (status) {
      case "female":
        return {
          label: "female",
          color: "success",
          sx: { backgroundColor: "#ffebee" },
        };
      case "male":
        return {
          label: "male",
          color: "warning",
          sx: { backgroundColor: "#fff3e0" },
        };
      default:
        return { label: "Unknown", color: "default" };
    }
  };

  const chipProps = getChipProps(status);

  return <Chip {...chipProps} sx={{}} />;
}
