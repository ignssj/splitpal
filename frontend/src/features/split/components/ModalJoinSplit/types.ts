export interface IModalJoinSplit {
  visible: boolean;
  code: string;
  setVisible: (visible: boolean) => void;
  onCodeChange: (text: string) => void;
  onJoin: () => void;
}
