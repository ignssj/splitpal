import React from "react";
import Title from "../../../components/Title";
import useMySplits from "../../../hooks/useMySplits";
import { Screen } from "../../../components/Screen";
import { Split } from "../components/Split";
import Spaced from "../../../components/Spaced";

const MySplits = () => {
  const { data, isLoading } = useMySplits();

  if (isLoading) return <Screen.Loading />;
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Feed</Title>
      </Screen.Header>
      <Screen.Content loading={isLoading}>
        <Spaced gap={20}>
          <Spaced gap={15}>
            <Title>Organizados por mim</Title>
            <Split.List data={data} messageOnEmpty='Você não organizou nenhum pagamento' />
          </Spaced>
          <Spaced gap={15}>
            <Title>Minhas participações</Title>
            <Split.List data={data} messageOnEmpty='Você não está participando de nenhum pagamento' />
          </Spaced>
        </Spaced>
      </Screen.Content>
    </Screen.Root>
  );
};

export default MySplits;
