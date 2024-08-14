import useSplitService from "../services/splits";
import { useQuery } from "@tanstack/react-query";
import { isError } from "../helpers/ServiceHelper";
import { Split } from "../services/splits/types";

const useAllSplits = () => {
  const { getAll } = useSplitService();

  const fetchData = async () => {
    // const response = await getAll();
    // if (isError(response)) return [];

    // return response.data;
    return [
      {
        id: "479637bd",
        name: "Futebol de quarta",
        category: "Lazer",
        total: 20.0,
        qrcode: "1239139ai93293ia9",
      },
      {
        id: "873128ta",
        name: "Road to Floripa",
        category: "Viagem",
        total: 800.0,
        qrcode: "1239139ai93293ia9",
      },
      {
        id: "38159zo",
        name: "Janta",
        category: "Despesa",
        total: 50.0,
        qrcode: "1239139ai93293ia9",
      },
    ];
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
