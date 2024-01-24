import { CTextField } from "@farakav-challenge/components/ui-components";
import { User } from "@farakav-challenge/lib";
import {
  StyledUserAvatar,
  StyledUserCard,
  StyledUserChip,
} from "@farakav-challenge/pages/[users]/components/UserCard.styles";
import { CardContent, Grid, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type UserCardProps = {
  user: User;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

const UserCard = ({ user, isEdit, setIsEdit }: UserCardProps) => {
  const handleModify = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <Grid item xs={12}>
      <StyledUserCard>
        <StyledUserChip
          label={isEdit ? "Submit" : "Edit"}
          color="secondary"
          variant={isEdit ? "filled" : "outlined"}
          size="small"
          onClick={handleModify}
        />

        <CardContent>
          <StyledUserAvatar
            alt={user.name.firstName}
            src={user.profile.picture}
          />

          {isEdit ? (
            <Grid container>
              <CTextField
                label="First Name"
                name="firstName"
                defaultValue={user.name.firstName}
              />
              <CTextField
                label="Last Name"
                name="lastName"
                defaultValue={user.name.lastName}
              />
              <CTextField
                label="Gender"
                name="gender"
                defaultValue={user.profile.gender}
              />
              <CTextField
                label="Interest"
                name="interest"
                defaultValue={user.profile.interest}
              />
              <CTextField
                label="Street"
                name="street"
                defaultValue={user.address.street}
              />
              <CTextField
                label="City"
                name="city"
                defaultValue={user.address.city}
              />
              <CTextField
                label="Zipcode"
                name="zipCode"
                defaultValue={user.address["zip code"]}
              />
            </Grid>
          ) : (
            <>
              <Typography variant="h5">{`${user.name.firstName} ${user.name.lastName}`}</Typography>
              <Typography variant="subtitle2">{`Gender: ${user.profile.gender}`}</Typography>
              <Typography
                variant="subtitle1"
                mt={2}
              >{`Interest: ${user.profile.interest}`}</Typography>
              <Typography variant="caption">{`Address: ${user.address.street}, ${user.address.city}, ${user.address["zip code"]}`}</Typography>
            </>
          )}
        </CardContent>
      </StyledUserCard>
    </Grid>
  );
};

export default UserCard;
