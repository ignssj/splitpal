import { Split } from "../../../../services/splits/types";

export interface ISplitList {
  data: Split[];
}

export interface ISplitItem {
  split: Split;
  title?: string;
}
