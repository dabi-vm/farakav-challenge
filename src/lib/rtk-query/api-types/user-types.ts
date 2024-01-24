export type User = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  profile: {
    gender: string;
    interest: string;
    picture: string;
  };
  address: {
    city: string;
    street: string;
    "zip code": string;
  };
};
