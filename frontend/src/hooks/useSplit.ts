import useSplitService from "../services/splits";
import { useQuery } from "@tanstack/react-query";
import { isError } from "../helpers/ServiceHelper";
import { GetSplit } from "../services/splits/types";
import { useRefetchOnFocus } from "./useRefetchOnFocus";

const useSplit = (id: string) => {
  const { getById } = useSplitService();

  const fetchData = async () => {
    const response = await getById(id);
    if (isError(response)) return null;

    return response;
  };

  const query = useQuery({
    queryKey: [id],
    queryFn: fetchData,
    enabled: !!id,
  });

  useRefetchOnFocus(query.refetch);
  return {
    ...query,
    data: query.data as GetSplit | undefined,
  };
};

export default useSplit;
