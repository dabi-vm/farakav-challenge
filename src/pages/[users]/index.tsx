import { CSelect } from "@farakav-challenge/components/ui-components";
import { setUser, useDispatch } from "@farakav-challenge/lib";
import { useGetUsersQuery } from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import { Grid } from "@mui/material";
import { useState } from "react";
import UserCard from "./components/UserCard";

const Index = () => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const { data } = useGetUsersQuery({});

  const handleSelectUser = (id: string) => {
    const user = data?.find((user) => user.id === id);
    if (user) dispatch(setUser(user));
  };

  return (
    <Grid container p={4}>
      <Grid item xs={12} md={6}>
        <CSelect
          options={
            data?.map((user) => ({
              label: user.name.firstName,
              value: user.id,
            })) || []
          }
          onChange={(e) => handleSelectUser(e.target.value)}
          label="Users"
        />
      </Grid>
      <UserCard {...{ isEdit, setIsEdit }} />
    </Grid>
  );
};

export default Index;
