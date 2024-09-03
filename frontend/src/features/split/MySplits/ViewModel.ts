import useMySplits from "../../../hooks/useMySplits";

const useMySplitsViewModel = () => {
  const { data, isLoading } = useMySplits();

  return {
    state: {
      splits: data,
      isLoading,
    },
  };
};

export default useMySplitsViewModel;
