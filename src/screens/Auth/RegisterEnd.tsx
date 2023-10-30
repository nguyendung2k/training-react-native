import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import {
  createUser,
  formatNewUser,
  resetGroupJoin,
  RootState,
  showNoticeSuccess,
} from "@redux";
import { useDispatch, useSelector } from "react-redux";
import { BORDER, COLORS, SIZES } from "@theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { RegisterScreenProp } from "@navigation/type";
import { InputComponent, InputDrop } from "@components/Input";
import { HeaderAuth } from "@components/Header";
import { ButtonComponent } from "@components/Button";
import { MessageError } from "@components/MessageError";

interface inputValue {
  profession?: string;
  birth_year?: string;
  gender?: string;
  introduction?: string;
}

const userSelector = (state: RootState) => state.user.user;
const registerSelector = (state: RootState) => state.register;

const RegisterEnd = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<RegisterScreenProp<"RegisterEnd">["navigation"]>();
  const userData = useSelector(userSelector);
  const registerUser = useSelector(registerSelector);

  const [valueProfession, setValueProfession] = useState<string>("Singer");
  const [itemsProfession, setItemsProfession] = useState<
    {
      label: string;
      value: string;
    }[]
  >([
    { label: "Singer", value: "Singer" },
    { label: "Doctor", value: "Doctor" },
    { label: "Cook", value: "Cook" },
  ]);

  const [valueGender, setValueGender] = useState<string>("Male");
  const [itemsGender, setItemsGender] = useState<
    {
      label: string;
      value: string;
    }[]
  >([
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ]);

  const [valueBirth, setValueBirth] = useState<string>("2000");
  const [itemsBirth, setItemsBirth] = useState<
    {
      label: string;
      value: string;
    }[]
  >([
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
    { label: "2002", value: "2002" },
  ]);

  const [image, setImage] = useState<string>("");

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handelSubmitForm = (values: inputValue) => {
    const newUser = {
      ...registerUser,
      data: {
        ...registerUser.data,
        image: image,
        introduction: values.introduction,
      },
    };

    const ListNewUser = [...userData, newUser];
    dispatch(createUser(ListNewUser));
    dispatch(formatNewUser());
    dispatch(showNoticeSuccess(true));
    dispatch(resetGroupJoin());
    navigation.popToTop();
  };

  const checkInput = Yup.object({
    introduction: Yup.string().required("Introduction is required"),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Neutral0 }}>
      <KeyboardAwareScrollView
        style={{ marginHorizontal: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderAuth
          title="Getting started"
          description="Personal Introduction"
          txtContent="Profile picture"
          number="3"
          primary
        />

        <View style={styles.content}>
          <Image
            source={{
              uri: image === "" ? "https://i.stack.imgur.com/l60Hf.png" : image,
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              marginBottom: 20,
            }}
          />

          <ButtonComponent
            label="Choose picture"
            onPress={handlePickImage}
            styleBtn={styles.btnChoosePicture}
            styleText={styles.txtBtn}
          />
        </View>

        <HeaderAuth txtContent="Profile info" number="4" />

        <Formik
          initialValues={{
            profession: "Singer",
            birth_year: "2000",
            gender: "Male",
            introduction: "Hello world",
          }}
          validationSchema={checkInput}
          onSubmit={handelSubmitForm}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <>
              <InputDrop
                title="Profession"
                value={valueProfession}
                items={itemsProfession}
                setValue={setValueProfession}
                setItems={setItemsProfession}
                onChangeValue={handleChange("profession")}
                primary
              />

              <InputDrop
                title="Birth year"
                value={valueBirth}
                items={itemsBirth}
                setValue={setValueBirth}
                setItems={setItemsBirth}
                onChangeValue={handleChange("birth_year")}
                primary
              />

              <InputDrop
                title="Gender"
                value={valueGender}
                items={itemsGender}
                setValue={setValueGender}
                setItems={setItemsGender}
                onChangeValue={handleChange("gender")}
                primary
              />

              <InputComponent
                title="Introduction"
                style={styles.inputIntroduction}
                onChangeText={handleChange("introduction")}
                introduction
                value={values.introduction}
                error={
                  touched.introduction && errors.introduction ? (
                    <MessageError error={errors.introduction} />
                  ) : null
                }
              />

              <View style={styles.btn}>
                <ButtonComponent
                  label="Start"
                  onPress={handleSubmit}
                  styleBtn={styles.btnStart}
                  styleText={styles.txtStart}
                />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterEnd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 52,
  },
  btn: {
    marginTop: 60,
    marginBottom: 10,
  },
  btnStart: {
    fontWeight: "600",
    fontSize: SIZES.medium,
    paddingVertical: 17,
    borderRadius: BORDER.base,
    backgroundColor: COLORS.Primary,
    color: COLORS.White,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  txtStart: {
    fontSize: SIZES.large,
    fontWeight: "600",
    marginRight: 10,
    color: COLORS.Neutral0,
  },
  btnChoosePicture: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    color: COLORS.Primary,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  inputIntroduction: {
    width: "100%",
  },
});
