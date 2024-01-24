import { CSelect } from "@farakav-challenge/components/ui-components";
import { useGetUsersQuery } from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Users = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState<string>();
  const { data } = useGetUsersQuery({});

  const handleSelectUser = (id: string) => {
    setSelectedUser(id);
    router.push(`/users/${id}`);
  };

  useEffect(() => {
    setSelectedUser(String(router.query.id));
  }, [router.query.id]);

  return (
    <Grid container p={4}>
      <Grid item xs={12}>
        <CSelect
          options={
            data?.map((user) => ({
              label: user?.name?.firstName,
              value: user?.id,
            })) || []
          }
          value={selectedUser}
          onChange={(e) => handleSelectUser(e.target.value)}
          label="Users"
        />
      </Grid>
      {!router.query.id ? (
        <Grid item xs={12}>
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
