 import * as Yup from 'yup';

 export const userSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  phone: Yup.string()
    .required("phone is required")
    .min(10, "phone is too short - should be 4 chars minimum"),
});
