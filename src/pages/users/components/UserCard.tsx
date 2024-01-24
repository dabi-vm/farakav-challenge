import { CTextFieldController } from "@farakav-challenge/components/ui-components/CTextFieldControler/CTextFieldController";
import {
  User,
  clearState,
  setUser,
  useDispatch,
  useSelector,
} from "@farakav-challenge/lib";
import {
  useAddUserMutation,
  useModifyUserMutation,
} from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import {
  StyledFab,
  StyledUserCard,
  StyledUserChip,
} from "@farakav-challenge/pages/users/components/UserCard.styles";
import { CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingCardSkeleton from "./LoadingCardSkeleton";
import UserDetails from "./UserDetails";

type UserCardProps = {
  loading: boolean;
};

const UserCard = ({ loading }: UserCardProps) => {
  const user = useSelector((state) => state.main);
  const formProvider = useForm<User>({
    defaultValues: {},
  });
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const [addUser] = useAddUserMutation();
  const [modifyUser] = useModifyUserMutation();

  const handleAddClick = () => {
    dispatch(clearState());
    formProvider.reset({});
    setIsEdit(true);
  };

  const handleModify = (data?: User) => {
    if (!isEdit) {
      formProvider.reset({ ...user });
      setIsEdit(true);
    } else {
      if (!user?.id) {
        addUser({ ...data! })
          .unwrap()
          .then(() => {
            setUser(data);
            formProvider.reset(data);
            setIsEdit(false);
          });
      } else {
        modifyUser({ ...data!, id: user.id! })
          .unwrap()
          .then(() => {
            setUser(data);
            formProvider.reset(data);
            setIsEdit(false);
          });
      }
    }
  };

  useEffect(() => {
    if (user?.id) setIsEdit(false);
  }, [user.id]);

  return (
    <Grid item xs={12}>
      {Boolean(user?.name?.firstName) || isEdit ? (
        <StyledUserCard>
          <CardContent>
            <StyledUserChip
              label={isEdit ? "Submit" : "Edit"}
              color="secondary"
              variant={isEdit ? "filled" : "outlined"}
              size="small"
              onClick={formProvider.handleSubmit(handleModify)}
            />
            {isEdit ? (
              <>
                <StyledUserChip
                  label="X"
                  color="error"
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    formProvider.reset({});
                    setIsEdit(false);
                  }}
                  sx={{
                    right: 70,
                  }}
                />
                <Grid container component="form">
                  <CTextFieldController
                    name="name.firstName"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "First Name",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                  <CTextFieldController
                    name="name.lastName"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "Last Name",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                  <CTextFieldController
                    name="profile.gender"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "Gender",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                  <CTextFieldController
                    name="profile.interest"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "Interest",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                  <CTextFieldController
                    name="address.street"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "Street",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                  <CTextFieldController
                    name="address.city"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "City",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                  <CTextFieldController
                    name="address.zipCode"
                    formProvider={formProvider}
                    defaultValue=""
                    inputProps={{
                      label: "Zipcode",
                      fullWidth: true,
                    }}
                    gridProps={{
                      xs: 12,
                      md: 6,
                    }}
                  />
                </Grid>
              </>
            ) : loading ? (
              <LoadingCardSkeleton />
            ) : (
              <UserDetails user={user} />
            )}
          </CardContent>
        </StyledUserCard>
      ) : null}
      {!isEdit && (
        <StyledFab aria-label="add" variant="extended" onClick={handleAddClick}>
          <Typography variant="h6">+</Typography>
        </StyledFab>
      )}
    </Grid>
  );
};

export default UserCard;
