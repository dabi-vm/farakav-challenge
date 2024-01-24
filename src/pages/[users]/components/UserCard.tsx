import { User } from "@farakav-challenge/lib";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          marginTop: 4,
          padding: 4,
        }}
      >
        <CardContent>
          <Avatar
            alt={user.name.firstName}
            src={user.profile.picture}
            sx={{ width: 56, height: 56, mb: 4 }}
          />
          <Typography variant="h5">{`${user.name.firstName} ${user.name.lastName}`}</Typography>
          <Typography variant="subtitle2">{`Gender: ${user.profile.gender}`}</Typography>
          <Typography
            variant="subtitle1"
            mt={2}
          >{`Interest: ${user.profile.interest}`}</Typography>
          <Typography variant="caption">{`Address: ${user.address.street}, ${user.address.city}, ${user.address["zip code"]}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCard;
