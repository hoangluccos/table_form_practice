import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData, searchUser } from "../redux/slices/userSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ListCustomerPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const pageQuery = parseInt(queryParams.get("page")) || 1;
  // const pageQuery = location.search.split("=")[1] || 1;
  // const pageQuery = Number(location.search.split("=")[1] || 1);

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickFilter = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearch = () => {
    if (searchValue.trim()) {
      dispatch(searchUser(searchValue));
    } else {
      dispatch(fetchUserData(pageQuery - 1));
    }
  };

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
      <Box
        marginY={"12px"}
        padding={"12px 12px"}
        bgcolor={"#F3F3F3"}
        borderRadius={"8px"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Typography paddingX={"20px"}>User</Typography>
          <Stack
            flexGrow={2}
            bgcolor={"#FDFDFD"}
            paddingY={"8px"}
            borderRadius={"4px"}
            direction={"row"}
            alignItems={"stretch"}
            justifyContent={"space-between"}
          >
            <Box></Box>
            <Button endIcon={<ExpandMoreIcon />} onClick={handleClickFilter}>
              Add filter
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  width: anchorEl ? anchorEl.offsetWidth : undefined,
                },
              }}
            >
              <MenuItem onClick={handleClose}>Filter1</MenuItem>
              <MenuItem onClick={handleClose}>Filter2</MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      {/* search - sort - setting more */}
      <div className="flex flex-row justify-between mt-2">
        <Box
          sx={{ padding: "0px", boxSizing: "border-box", height: "40px" }}
          alignContent={"center"}
          borderRadius={"5px"}
          bgcolor={"#fbf9f9"}
          className="focus-within:border focus-within:border-black transition-colors ease-in-out"
        >
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search users"
            id="filled-search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
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
