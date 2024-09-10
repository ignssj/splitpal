import useMySplits from "../../../hooks/useMySplits";

const useFeedViewModel = () => {
  const { data, isLoading } = useMySplits();

  return {
    state: {
      splits: data,
      isLoading,
    },
  };
};

export default useFeedViewModel;
