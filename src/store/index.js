import { configureStore } from "@reduxjs/toolkit";
import Formslice from "./slices/formslice";

const store = configureStore({
  reducer: {
    user: Formslice,
  },
});
// console.log(store)

export default store;
