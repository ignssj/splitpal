import { ReactElement } from "react";
import { Split } from "../../../../services/splits/types";

export interface ISplitList {
  data: Split[];
  messageOnEmpty: string;
}

export interface ISplitItem {
  split: Split;
  title?: string;
}
