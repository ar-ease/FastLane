import { createContext } from "react";

const userContext = createContext({
  usera: {
    name: "Dummy name",
    email: "dummy@gmail.com",
  },
});

export default userContext;
