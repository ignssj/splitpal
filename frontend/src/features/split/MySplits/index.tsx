import React from "react";
import Title from "../../../components/Title";
import useMySplitsViewModel from "./ViewModel";
import { Screen } from "../../../components/Screen";
import { Split } from "../components/Split";

const MySplits = () => {
  const { state } = useMySplitsViewModel();
  if (state.isLoading) return <Screen.Loading />;

  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Feed</Title>
      </Screen.Header>
      <Screen.Content loading={state.isLoading}>
        <Split.List data={state.splits} messageOnEmpty='Você não organizou nenhum pagamento' />
      </Screen.Content>
    </Screen.Root>
  );
};

export default MySplits;
