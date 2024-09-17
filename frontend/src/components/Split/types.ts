import { GetSplit, Split } from "../../../../services/splits/types";

export interface ISplitList {
  data: GetSplit[];
}

export interface ISplitItem {
  split: Split;
  title?: string;
}
