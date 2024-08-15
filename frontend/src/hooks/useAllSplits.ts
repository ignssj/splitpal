import useSplitService from "../services/splits";
import { useQuery } from "@tanstack/react-query";
import { isError } from "../helpers/ServiceHelper";
import { Split } from "../services/splits/types";

const useAllSplits = () => {
  const { getAll } = useSplitService();

  const fetchData = async () => {
    const response = await getAll();
    if (isError(response)) return [];

    return response.data;
  };

  const query = useQuery({
    queryKey: ["all-splits"],
    queryFn: fetchData,
  });

  return {
    ...query,
    data: query.data as Split[],
  };
};

export default useAllSplits;
