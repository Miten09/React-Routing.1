import * as yup from "yup";

export const signUpSchema = yup.object({
  fullname: yup.string().min(2).max(25).required("Please Enter Your Name"),
  email: yup.string().email().required("Please Enter Your Email"),
  password: yup.string().min(6).required("Please Enter Your Password"),

});
