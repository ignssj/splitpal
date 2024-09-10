import { ILoginForm } from "./Login";

export interface ISignupForm extends ILoginForm {
  confirmation: string;
}
