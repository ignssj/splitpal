import { Split } from "../../../../services/splits/types";

export interface ISplitList {
  data: Split[];
  loading: boolean;
}

export interface ISplitItem {
  split: Split;
}
