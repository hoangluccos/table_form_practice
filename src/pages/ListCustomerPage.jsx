import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "../components/TableComponent";
import { useLocation, useNavigate } from "react-router-dom";

function ListCustomerPage() {
  console.log("Page");
  const location = useLocation();
  const navigate = useNavigate();

  // Lấy query page từ URL
  const queryParams = new URLSearchParams(location.search);
  console.log("location.search", location.search);
  // console.log("split", location.search.split("="));
  const pageQuery = parseInt(queryParams.get("page")) || 1;

  return (
    <Container>
      {/* header */}
      <div className="flex flex-col gap-2">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5" component={"div"} fontWeight={"bold"}>
            Users
          </Typography>
          <Stack spacing={1} direction={"row"}>
            <Button startIcon={<DownloadIcon />}>Import</Button>
            <Button startIcon={<FileUploadIcon />}>Export</Button>
            <Button variant="contained" sx={{ bgcolor: "#793FFB" }}>
              Add Users
            </Button>
          </Stack>
        </Stack>
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe
          dolor quae sequi, officiis rem est numquam tempora ipsum
          voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio saepe dolor quae sequi, officiis rem est numquam tempora ipsum
          voluptatibus.
        </p>
      </div>
      {/* search - sort - setting more */}
      <div className="flex flex-row justify-between mt-2">
        <Box
          sx={{ padding: "0px" }}
          alignContent={"center"}
          borderRadius={"5px"}
          bgcolor={"#fbf9f9"}
          className="focus-within:border focus-within:border-black transition-colors ease-in-out"
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search users" id="filled-search" />
        </Box>

        <Stack direction={"row"} gap={1}>
          <IconButton>
            <SwapVertIcon />
          </IconButton>
          <IconButton id="filled-search">
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </div>
      {/* table */}
      <Box
        className="mt-[1rem] overflow-auto min-w-[1000px]"
        sx={{ borderRadius: "0px 0px 8px 8px" }}
      >
        {/* tableComponent */}
        <TableComponent
          currentPage={pageQuery}
          onPageChange={(newPage) => {
            navigate(`?page=${newPage}`);
          }}
        />
      </Box>
    </Container>
  );
}

export default ListCustomerPage;
