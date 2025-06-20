import { Chip, useTheme, alpha } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export function StatusChip({ status }) {
  const theme = useTheme();

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
        return {
          label: "Unknown",
          variant: "outlined",
          color: "default",
        };
    }
  };

  const chipProps = getChipProps(status);

  const chipBgColor = chipProps.color
    ? alpha(theme.palette[chipProps.color].main, 0.08)
    : undefined;

  return (
    <Chip
      icon={<FiberManualRecordIcon fontSize="inherit" />}
      {...chipProps}
      sx={{
        borderRadius: "12px",
        fontWeight: "bold",
        bgcolor: chipBgColor,
        color: theme.palette[chipProps.color]?.main,
        border: "none",
      }}
    />
  );
}
