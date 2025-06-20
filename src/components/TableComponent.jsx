import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Checkbox,
  Divider,
  IconButton,
  ListSubheader,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { StatusChip } from "../components/StatusChip";
import { fetchUserData } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function TableComponent({ currentPage = 1, onPageChange }) {
  console.log("component ");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.users);
  const users = useSelector((state) => state.users.users) || [];
  const total = useSelector((state) => state.users.total) || 1;
  const [skip, setSkip] = useState(0);
  console.log("user redux", users);
  const rowsPerPage = 10;
  ``;
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleToggleAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((i) => i.id));
    }
  };
  const handleToggleOne = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePageChange = (event, value) => {
    setSkip(value - 1); //skip = 0
    if (onPageChange) onPageChange(value);
  };

  useEffect(() => {
    dispatch(fetchUserData(skip));
  }, [dispatch, skip]);
  if (loading || error) {
    <div className="flex">
      <p>Loading</p>
    </div>;
  }
  return (
    <>
      <List
        subheader={
          <ListSubheader
            // disableSticky
            className="bg-[#fbf9f9]"
          >
            <Stack
              direction={"row"}
              bgcolor={"#f0f0f0"}
              paddingY={"8px"}
              paddingX={"0px"}
              borderRadius={"8px 8px 0px 0px"}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                className="flex w-[300px] items-center justify-start"
              >
                <Checkbox
                  onChange={handleToggleAll}
                  // onChange={() => setSelectedUsers(users.map((i) => i.id))}
                />
                FirstName
              </Typography>

              <Typography
                sx={{ fontWeight: "bold" }}
                className="flex w-[200px] text-center justify-start items-center"
              >
                Gender
              </Typography>

              <Typography
                sx={{ fontWeight: "bold" }}
                className="flex w-[200px] text-center justify-start items-center"
              >
                Role
              </Typography>

              <Typography
                sx={{ fontWeight: "bold" }}
                className="flex flex-1 max-w-[300px] text-center justify-start items-center"
              >
                Email
              </Typography>

              <Typography
                sx={{ fontWeight: "bold" }}
                className="flex w-[100px] text-center justify-center items-center"
              >
                Action
              </Typography>
            </Stack>
          </ListSubheader>
        }
      >
        {users.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem className="flex flex-row bg-[#f0f0f0] py-[8px] px-[0px]">
              <Box className="flex flex-row w-[300px] items-center justify-start gap-1">
                <Checkbox
                  checked={selectedUsers.includes(item.id)}
                  onChange={() => handleToggleOne(item.id)}
                />
                <Avatar src={item.image} sx={{ width: 32, height: 32 }} />
                <Typography>{item.firstName}</Typography>
              </Box>

              <div className="flex w-[200px] justify-start">
                <StatusChip status={item.gender} />
              </div>

              <Typography className="flex w-[200px] justify-start items-center capitalize">
                {item.role}
              </Typography>
              <Tooltip title={item.email}>
                <Typography className="flex flex-1 max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.email}
                </Typography>
              </Tooltip>
              <Typography className="flex w-[100px] justify-center items-center">
                <IconButton //using IconButton to remove bgcolor
                  onClick={handleClick}
                  sx={{
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <MoreVertIcon sx={{ cursor: "pointer" }} />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  transitionDuration={"auto"}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    elevation: 1,
                  }}
                >
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
              </Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      {/* pagination */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(total / rowsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </Box>
    </>
  );
}

export default TableComponent;
