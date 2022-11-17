import { body, param } from "express-validator";

export const SignupUserRequestValidator = [
  body("email", "email should be an email").isEmail(),
  body("name"),
];
