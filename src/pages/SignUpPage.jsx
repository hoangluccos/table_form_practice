import { Box, Button, Stack, Stepper, Typography } from "@mui/material";
import StepComponent from "../components/StepComponent";
import React, { useMemo, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SelectRole from "./FlowSignUp/SelectRole";
import Information from "./FlowSignUp/Information";
import {
  step1Schema,
  step2Schema,
  step3SchemaEducator,
  step3SchemaMentor,
} from "../utils/validateSchema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SharingMentor from "./FlowSignUp/SharingMentor";
import SharingEducator from "./FlowSignUp/SharingEducator";

const listStepArr = [
  {
    title: "Bước 1",
    des: "Chọn vai trò",
  },
  {
    title: "Bước 2",
    des: "Thông tin cá nhân",
  },
  {
    title: "Bước 3",
    des: "Nội dung chia sẽ",
  },
];
// const schemas = [
//   step1Schema,
//   step2Schema,
//   step3SchemaEducator,
//   step3SchemaMentor,
// ];
function SignUpPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  //create concrete useForm
  const method = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      role: "",
      fullName: "",
      called: "",
      email: "",
      phone: "",
      linkedin: "",
      social: "",
      objectMentees: [],
      sharingTopic: [],
      experience: "",
      expertise: [],
    },
  });

  console.log("completed", completed);
  console.log("activeStep", activeStep);

  //watch realtime role value
  const role = method.watch("role");

  const currentSchema = useMemo(() => {
    if (activeStep === 0) return step1Schema;
    if (activeStep === 1) return step2Schema;
    if (activeStep === 2) {
      return role === "mentor" ? step3SchemaMentor : step3SchemaEducator;
    }
    return step1Schema;
  }, [activeStep, role]);

  // 🧠 Cập nhật resolver khi schema thay đổi
  useMemo(() => {
    method.reset(method.getValues(), {
      keepDefaultValues: true,
      keepValues: true,
    });
    method.control._options.resolver = zodResolver(currentSchema);
  }, [currentSchema]);

  const isFinalStep = useMemo(() => {
    console.log("isFinalStep()", activeStep);
    console.log(
      "true or false isFinalStep()",
      activeStep === listStepArr.length - 1
    );
    return activeStep === listStepArr.length - 1; //true or false
  }, [activeStep]);

  const handleNext = async () => {
    // const valid = await method.trigger(); //=> no more need validate before next because isValid is used for disable button
    // if (!valid) return;
    if (!isFinalStep) {
      setActiveStep((prev) => prev + 1);
      setCompleted((prev) => {
        return { ...prev, [activeStep]: true };
      });
    } else {
      //do something
      console.log("Ending form");
      const data = method.getValues();
      console.log("data form", data);
    }
  };

  const handleClickOnStep = (index) => {
    setActiveStep(index);
  };
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStep = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <SelectRole />;
      case 1:
        return <Information />;
      case 2:
        return role === "mentor" ? <SharingMentor /> : <SharingEducator />;

      default:
        return <SelectRole />;
    }
  }, [activeStep]);
  const {
    formState: { isValid },
  } = method;
  return (
    <FormProvider {...method}>
      <Box>
        <Typography
          variant="h5"
          component={"p"}
          sx={{ marginTop: "4rem", fontWeight: "bold", textAlign: "center" }}
        >
          Trở thành chuyên gia của Edtronaut
        </Typography>
        <Stepper className="flex gap-2" nonLinear activeStep={activeStep}>
          <Box display={"flex"} marginTop={"2rem"} width={"auto"}>
            {listStepArr.map((item, index) => (
              <StepComponent
                key={index}
                title={item.title}
                des={item.des}
                //-------
                onClick={() => handleClickOnStep(index)}
                isCompleted={completed[index]}
                isActive={activeStep === index}
              />
            ))}
          </Box>
        </Stepper>
        <div className="">
          <Box mt={8}>{renderStep}</Box>
          {/* forward and back button */}
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              className="!font-bold !text-white !bg-[#261EAC]"
            >
              Trở về
            </Button>
            <Button
              disabled={!isValid}
              endIcon={<ArrowForwardIcon />}
              className={`!font-bold  ${
                !isValid
                  ? "!bg-white !text-[#261EAC] !border !border-[#261EAC]"
                  : !isFinalStep
                  ? "!bg-[#261EAC] !text-white"
                  : "!bg-amber-500 !text-white"
              } `}
              onClick={handleNext}
            >
              {isFinalStep ? "Hoàn tất" : "Tiếp tục"}
            </Button>
          </Stack>
        </div>
      </Box>
    </FormProvider>
  );
}

export default SignUpPage;
