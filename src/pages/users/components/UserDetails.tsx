import { User } from "@farakav-challenge/lib";
import LoadingCardSkeleton from "@farakav-challenge/pages/users/components/LoadingCardSkeleton";
import { Typography } from "@mui/material";
import { StyledUserAvatar } from "./UserCard.styles";

type UserDetailsProps = {
  user?: User;
  loading: boolean;
};
const UserDetails = ({ user, loading }: UserDetailsProps) => {
  if (loading) return <LoadingCardSkeleton />;

  return (
    <>
      <StyledUserAvatar
        alt={user?.name?.firstName}
        src={user?.profile?.picture}
      />
      <Typography variant="h5">{`${user?.name?.firstName} ${user?.name?.lastName}`}</Typography>
      <Typography variant="subtitle2">{`Gender: ${user?.profile?.gender}`}</Typography>
      <Typography
        variant="subtitle1"
        mt={2}
      >{`Interest: ${user?.profile?.interest}`}</Typography>
      <Typography variant="caption">{`Address: ${user?.address?.street}, ${user?.address?.city}, ${user?.address?.zipCode}`}</Typography>
    </>
  );
};

export default UserDetails;
