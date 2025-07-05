import { Box, Stack, Step, StepButton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function StepComponent({ title, des, isActive, onClick, isCompleted }) {
  // console.log("isCompleted", isCompleted);
  const handleClick = () => {
    //handleClick if isCompleted
    if (isCompleted) {
      // console.log("completed roi nha");
      onClick();
    } else {
      // console.log("chua completed");
    }
  };
  return (
    <Step>
      <Box
        className={`${isActive || isCompleted ? "bg-[#F5F5FF]" : ""}`}
        padding={1}
        width={"15rem"}
        borderBottom={`4px solid ${isActive ? "#261EAC" : "gray"}`}
      >
        <StepButton onClick={handleClick}>
          <Box display={"flex"} alignItems={"center"} columnGap={"8px"}>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              className={isActive || isCompleted ? "text-[#261EAC]" : ""}
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
