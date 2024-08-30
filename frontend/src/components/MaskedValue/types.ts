export interface IMaskedInput {
  masked: string;
  onChangeText: (masked: string, raw?: string) => void;
}
