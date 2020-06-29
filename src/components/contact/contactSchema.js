import * as Yup from "yup";

const contactSchema = {
  info: Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email("Must be a valid e-mail address."),
    message: Yup.string().required("Op--Don't forget to fill out a message!"),
  }),
};

export default contactSchema;
