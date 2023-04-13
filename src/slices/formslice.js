import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
  },
  reducers: {
    setForm: (state, action) => {
      state.form.push(action.payload);
      // state.email = action.payload;
      // state.password = action.payload;
      // state.gender = action.payload;
      // state.hobby = action.payload;
      // state.cities = action.payload;
      // state.date = action.payload;
    },
  },
});

export default FormSlice.reducer;

export const formActions = FormSlice.actions;
