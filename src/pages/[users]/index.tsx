import { CSelect } from "@farakav-challenge/components/ui-components";
import { User } from "@farakav-challenge/lib";
import { Grid } from "@mui/material";
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
  return (
    <Grid container p={4}>
      <Grid item xs={12} md={6}>
        <CSelect options={[]} label="Users" />
      </Grid>
      <UserCard user={user} />
    </Grid>
  );
};

export default Index;
