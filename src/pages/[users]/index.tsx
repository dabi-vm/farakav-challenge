import { CSelect } from "@farakav-challenge/components/ui-components";
import { User, setUser, useDispatch } from "@farakav-challenge/lib";
import { useGetUsersQuery } from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import { Grid } from "@mui/material";
import { useState } from "react";
import UserCard from "./components/UserCard";

const user: User = {
  id: "1",
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  profile: {
    gender: "Male",
    interest: "Programming",
    picture: "https://example.com/picture.jpg",
  },
  address: {
    city: "New York",
    street: "123 Main St",
    "zip code": "10001",
  },
};

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
