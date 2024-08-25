import useUserService from "../services/users";
import { useQuery } from "@tanstack/react-query";
import { isError } from "../helpers/ServiceHelper";
import { useRefetchOnFocus } from "./useRefetchOnFocus";
import { useAppSelector } from "../redux/hooks";
import { UserParticipation } from "../services/users/types";

const useMySplits = () => {
  const { id } = useAppSelector((state) => state.user);
  const { getMyParticipations } = useUserService();

  const fetchData = async () => {
    const response = await getMyParticipations({ userId: id });
    if (isError(response)) return [];

    return response;
  };

  const query = useQuery({
    queryKey: ["my-splits"],
    queryFn: fetchData,
  });

  useRefetchOnFocus(query.refetch);
  return {
    ...query,
    data: query.data as UserParticipation[],
  };
};

export default useMySplits;
