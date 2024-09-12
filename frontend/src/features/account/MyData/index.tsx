import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Spaced from "../../../components/Spaced";
import useMyDataViewModel from "./ViewModel";
import { Screen } from "../../../components/Screen";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import { updateUserSchema } from "../../../schemas/updateUser";

const MyData = () => {
  const { state, handlers } = useMyDataViewModel();
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus dados</Title>
      </Screen.Header>
      <Screen.Content>
        <Formik initialValues={state.initialValues} onSubmit={(values) => handlers.handleUpdate(values)} validationSchema={updateUserSchema}>
          {({ values, isValid, handleChange, handleSubmit }) => (
            <Spaced gap={15}>
              <Input label='Email' value={values.newEmail} onChangeText={handleChange("newEmail")} />
              <Input label='Senha atual' value={values.currentPassword} onChangeText={handleChange("currentPassword")} />
              <Input label='Nova senha' value={values.newPassword} onChangeText={handleChange("newPassword")} />
              <Button mode='contained' onPress={() => handleSubmit()} disabled={!isValid}>
                Atualizar dados
              </Button>
            </Spaced>
          )}
        </Formik>
      </Screen.Content>
    </Screen.Root>
  );
};

export default MyData;
