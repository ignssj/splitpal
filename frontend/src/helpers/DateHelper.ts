import moment from "moment";

export const formatDate = (d: Date) => {
  return moment(d).format("DD/MM/YYYY");
};
