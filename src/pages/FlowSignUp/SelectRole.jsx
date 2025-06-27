import { Box, Radio, Typography } from "@mui/material";
import img_sample from "../../assets/image/user_img.jpg";
import { useFormContext } from "react-hook-form";
const listSelect = [
  {
    name: "mentor",
    img: img_sample,
  },
  {
    name: "educator",
    img: img_sample,
  },
];
function SelectRole() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch("role");
  const handleSelect = (value) => {
    setValue("role", value, { shouldValidate: true });
  };
  return (
    <Box className="flex flex-col items-center gap-2 my-[3rem]">
      <Typography variant="h6" className="font-bold" component={"p"}>
        Chọn vai trò muốn đăng ký
      </Typography>
      <Box className="flex gap-x-8">
        {listSelect.map((select, index) => (
          <Box
            key={index}
            onClick={() => handleSelect(select.name)}
            className={`flex flex-col w-[12rem] h-[16rem] rounded-md p-2 border 
              ${
                selectedValue === select.name ? "shadow-md" : ""
              } cursor-pointer`}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Radio
                {...register("role")}
                checked={selectedValue === select.name}
                value={select.name}
              />
              <Typography className="capitalize">{select.name}</Typography>
            </Box>
            <Box className="w-full flex-1">
              <img
                src={select.img}
                alt=""
                className="object-cover w-full h-full rounded-md"
              />
            </Box>
          </Box>
        ))}
      </Box>
      {errors.role && (
        <Typography color="error" fontSize={14}>
          {errors.role.message}
        </Typography>
      )}
    </Box>
  );
}

export default SelectRole;
