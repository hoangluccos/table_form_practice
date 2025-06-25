import { Box, Stack, Step, StepButton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function StepComponent({ title, des, isActive, onClick, isCompleted }) {
  console.log("isCompleted", isCompleted);
  return (
    <Step>
      <Box
        className={`${isActive ? "bg-[#F5F5FF]" : ""}`}
        padding={1}
        width={"15rem"}
        borderBottom={`4px solid ${isActive ? "#261EAC" : "gray"}`}
      >
        <StepButton>
          <Box display={"flex"} alignItems={"center"} columnGap={"8px"}>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              className={isActive ? "text-[#261EAC]" : ""}
            >
              {title}
            </Typography>
            {isCompleted ? (
              <CheckCircleIcon
                className={`${isCompleted ? "text-green-600" : ""}`}
              />
            ) : (
              ""
            )}
          </Box>
          <Typography textAlign={"start"}>{des}</Typography>
        </StepButton>
      </Box>
    </Step>
  );
}

export default StepComponent;
