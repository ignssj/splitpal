import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Card from "../../../components/Card";
import ModalJoinSplit from "../components/ModalJoinSplit";
import useCreateSplitViewModel from "./ViewModel";
import styles from "./styles";
import { Button } from "react-native-paper";
import { Screen } from "../../../components/Screen";
import { Formik } from "formik";
import { splitSchema } from "../../../schemas/split";
import FormError from "../../../components/FormError";

const CreateSplit = () => {
  const { state, handlers } = useCreateSplitViewModel();
  return (
    <Screen.Root style={styles.root}>
      <Screen.Header>
        <Title>Novo pagamento</Title>
      </Screen.Header>
      <Screen.Content style={styles.content}>
        <Formik initialValues={state.initialSplitValue} validationSchema={splitSchema} onSubmit={(values) => handlers.handleCreate(values)}>
          {({ values, isSubmitting, errors, isValid, handleChange, handleSubmit }) => (
            <Card>
              <Input label='Nome' value={values.name} onChangeText={handleChange("name")} />
              {errors.name && <FormError>{errors.name}</FormError>}
              <Input label='Categoria' value={values.category} onChangeText={handleChange("category")} />
              <Input label='Valor' value={values.total} keyboardType='decimal-pad' onChangeText={handleChange("total")} />
              {errors.total && <FormError>{errors.total}</FormError>}
              <Input label='QR Code' value={values.qrcode} onChangeText={handleChange("qrcode")} />
              {errors.qrcode && <FormError>{errors.qrcode}</FormError>}
              <Button mode='contained' onPress={() => handleSubmit()} loading={isSubmitting} disabled={!isValid}>
                Criar
              </Button>
            </Card>
          )}
        </Formik>
        <Button onPress={() => handlers.setModalVisible(true)}>Quero ingressar em um pagamento</Button>
      </Screen.Content>
      <ModalJoinSplit visible={state.modalVisible} setVisible={handlers.setModalVisible} />
    </Screen.Root>
  );
};

export default CreateSplit;
