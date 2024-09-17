import React from "react";
import Title from "../../../components/Title";
import useFeedViewModel from "./ViewModel";
import { Screen } from "../../../components/Screen";
import { Split } from "../../../components/Split";

const Feed = () => {
  const { state } = useFeedViewModel();
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Feed</Title>
      </Screen.Header>
      <Screen.Content>
        <Split.List data={state.splits} />
      </Screen.Content>
    </Screen.Root>
  );
};

export default Feed;
