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
  useGetUserQuery,
  useModifyUserMutation,
} from "@farakav-challenge/lib/rtk-query/api-services/user-api";
import {
  StyledFab,
  StyledUserCard,
  StyledUserChip,
} from "@farakav-challenge/pages/users/components/UserCard.styles";
import { CardContent, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Users from "..";
import UserDetails from "../components/UserDetails";

const Index = () => {
  const router = useRouter();
  const id = router.query.id;
  const user = useSelector((state) => state.main);
  const formProvider = useForm<User>({
    defaultValues: {},
  });
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const { data: userQueryData, isLoading: userQueryLoading } = useGetUserQuery(
    { id: id as string },
    {
      skip: !id,
    }
  );
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
    <Users>
      <Grid item xs={12}>
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
            ) : (
              <UserDetails loading={userQueryLoading} user={userQueryData} />
            )}
          </CardContent>
        </StyledUserCard>

        {!isEdit && (
          <StyledFab
            aria-label="add"
            variant="extended"
            onClick={handleAddClick}
          >
            <Typography variant="h6">+</Typography>
          </StyledFab>
        )}
      </Grid>
    </Users>
  );
};

export default Index;
