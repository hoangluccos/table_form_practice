import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  ListSubheader,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { StatusChip } from "../components/StatusChip";
import { fetchUserData } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function ListCustomerPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.users);
  const users = useSelector((state) => state.users.users) || [];
  console.log("user redux", users);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const paginatedUsers = users.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  if (loading || error) {
    <div className="flex">
      <p>Loading</p>
    </div>;
  }
  return (
    <div>
      {/* header */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <p className="text-3xl font-bold">Users</p>
          <div className="flex flex-row gap-x-2">
            <Button
              className="flex gap-1"
              variant="contained"
              onClick={() => console.log("click")}
            >
              <DownloadIcon />
              Import
            </Button>
            <Button
              className="flex gap-1"
              variant="contained"
              onClick={() => console.log("click")}
            >
              <FileUploadIcon />
              Export
            </Button>
            <Button variant="contained" onClick={() => console.log("click")}>
              Click here
            </Button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe
          dolor quae sequi, officiis rem est numquam tempora ipsum voluptatibus.
        </p>
      </div>
      {/* search - sort - setting more */}
      <div className="flex flex-row justify-between mt-2">
        <div className="flex flex-row justify-center items-center h-[2rem] mt-2">
          <SearchIcon />
          <TextField
            size="small"
            sx={{
              backgroundColor: "transparent",
            }}
            className="none-bg"
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
        </div>
        <div className="flex flex-row gap-3 items-center justify-center">
          <SwapVertIcon />
          <MoreHorizIcon />
        </div>
      </div>
      {/* table */}
      <Box
        sx={{
          marginTop: "1rem",
          borderRadius: "50px",
          display: "grid",
          fontWeight: "bold",
          py: 1,
        }}
      >
        <List
          subheader={
            <ListSubheader
              disableSticky
              component="div"
              sx={{ px: 0, background: "#f0f0f0" }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 3fr 0.5fr",
                  alignItems: "center",
                  px: 2,
                  fontWeight: "bold",
                  columnGap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Checkbox disabled />
                  <Typography>FirstName</Typography>
                </Box>
                <Typography>Gender</Typography>
                <Typography>Role</Typography>
                <Typography>Email</Typography>
                <Typography>Action</Typography>
              </Box>
            </ListSubheader>
          }
        >
          {paginatedUsers.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 3fr 0.5fr",
                    alignItems: "center",
                    px: 2,
                    py: 1,
                    columnGap: 2,
                    width: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox />
                    <Avatar src={item.image} sx={{ width: 32, height: 32 }} />
                    <Typography>{item.firstName}</Typography>
                  </Box>

                  <StatusChip status={item.gender} />

                  <Typography>{item.role}</Typography>

                  <Typography>{item.email}</Typography>

                  <MoreVertIcon sx={{ cursor: "pointer" }} />
                </Box>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
      {/* pagination */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(users.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </Box>
    </div>
  );
}

export default ListCustomerPage;
