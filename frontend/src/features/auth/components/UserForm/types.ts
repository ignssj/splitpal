export interface IUserFormInput {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (s: string) => void;
}
