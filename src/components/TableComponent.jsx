import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Checkbox,
  Divider,
  ListSubheader,
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
                <Checkbox />
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
                <Checkbox />
                <Avatar src={item.image} sx={{ width: 32, height: 32 }} />
                <Typography>{item.firstName}</Typography>
              </Box>

              <div className="flex w-[200px] justify-start">
                <StatusChip status={item.gender} />
              </div>

              <Typography className="flex w-[200px] justify-start items-center">
                {item.role}
              </Typography>
              <Tooltip title={item.email}>
                <Typography className="flex flex-1 max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.email}
                </Typography>
              </Tooltip>
              <Typography className="flex w-[100px] justify-center items-center">
                {/* <Button> */}
                <MoreVertIcon
                  className="flex flex-1"
                  sx={{ cursor: "pointer" }}
                />
                {/* </Button> */}
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
