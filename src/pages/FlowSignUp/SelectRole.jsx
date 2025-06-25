import { Box, Button, Radio, RadioGroup, Typography } from "@mui/material";
import img_sample from "../../assets/image/user_img.jpg";
import { useState } from "react";

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
  const [selectedValue, setSelectedValue] = useState("mentor");
  const handleChange = (e) => {
    console.log("target", e.target.value);
    setSelectedValue(e.target.value);
  };
  return (
    <Box className="flex flex-col items-center gap-2 my-[3rem]">
      <Typography variant="h6" className="font-bold" component={"p"}>
        Chọn vai trò muốn đăng ký
      </Typography>
      <Box className="flex gap-x-8">
        {listSelect.map((select, index) => (
          <Box
            onClick={handleChange}
            key={index}
            className="flex flex-col w-[12rem] h-[16rem] rounded-md p-2 border border-gray-400 shadow-2xl shadow-gray-500"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Radio
                checked={selectedValue === select.name}
                onChange={handleChange}
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
    </Box>
  );
}

export default SelectRole;
