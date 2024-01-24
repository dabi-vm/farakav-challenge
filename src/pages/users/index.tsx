import { CSelect } from "@farakav-challenge/components/ui-components";
import { setUser, useDispatch } from "@farakav-challenge/lib";
import { useGetUsersQuery } from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import UserCard from "./components/UserCard";

const Index = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUsersQuery({});
  const router = useRouter();

  const handleSelectUser = (id: string) => {
    const user = data?.find((user) => user.id === id);
    if (user) dispatch(setUser(user));
    router.push(`/users/${id}`);
  };

  return (
    <Grid container p={4}>
      <Grid item xs={12} md={6}>
        <CSelect
          options={
            data?.map((user) => ({
              label: user?.name?.firstName,
              value: user?.id,
            })) || []
          }
          onChange={(e) => handleSelectUser(e.target.value)}
          label="Users"
        />
      </Grid>
      <UserCard loading={isLoading} />
    </Grid>
  );
};

export default Index;
