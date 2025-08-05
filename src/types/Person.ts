export type Person = {
  name: { title: string; first: string; last: string };
  email: string;
  phone: string;
  picture: { large: string; thumbnail: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
  };
  dob: { age: number };
  login: { uuid: string };
};
