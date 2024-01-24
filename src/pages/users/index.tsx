import { CSelect } from "@farakav-challenge/components/ui-components";
import { useGetUsersQuery } from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Users = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetUsersQuery({});
  const router = useRouter();

  const handleSelectUser = (id: string) => {
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
      {!router.query.id ? (
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            textAlign="center"
          >
            Select a user from the dropdown to see the details
          </Typography>
        </Grid>
      ) : null}
      {children}
    </Grid>
  );
};

export default Users;
