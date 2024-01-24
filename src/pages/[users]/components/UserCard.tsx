import { User } from "@farakav-challenge/lib";
import {
  StyledUserAvatar,
  StyledUserCard,
  StyledUserChip,
} from "@farakav-challenge/pages/[users]/components/UserCard.styles";
import { CardContent, Grid, Typography } from "@mui/material";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Grid item xs={12}>
      <StyledUserCard>
        <StyledUserChip
          label="Edit"
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => {}}
        />

        <CardContent>
          <StyledUserAvatar
            alt={user.name.firstName}
            src={user.profile.picture}
          />
          <Typography variant="h5">{`${user.name.firstName} ${user.name.lastName}`}</Typography>
          <Typography variant="subtitle2">{`Gender: ${user.profile.gender}`}</Typography>
          <Typography
            variant="subtitle1"
            mt={2}
          >{`Interest: ${user.profile.interest}`}</Typography>
          <Typography variant="caption">{`Address: ${user.address.street}, ${user.address.city}, ${user.address["zip code"]}`}</Typography>
        </CardContent>
      </StyledUserCard>
    </Grid>
  );
};

export default UserCard;
