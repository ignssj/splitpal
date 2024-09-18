export interface IUserFormInput {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (s: string) => void;
}

export interface IUserFormPassword extends IUserFormInput {
  visible: boolean;
  toggleVisibility: () => void;
}
