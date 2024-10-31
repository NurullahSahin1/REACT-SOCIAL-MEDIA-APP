import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/Responsive";

// Formik ve Yup için doğrulama şeması
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid e-mail")
    .required("Email is Mandatory"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^.&*])/,
      "Password must contain at least one uppercase letter, one number and one special character"
    ),
});

const LoginPage = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View style={styles.form}>
            <Text style={styles.label}>{"Email, Nickname"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.email && touched.email ? styles.inputError : null,
                ]}
                placeholder="Amil Taylor"
                placeholderTextColor="#8F9BB3"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Image
                  source={require("../assets/images/Vector2.png")} // Kırmızı uyarı işareti ikonunun yolu
                  style={styles.errorIcon}
                />
              )}
            </View>
            {errors.email && touched.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}

            <Text style={styles.label}>{"Password"}</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passworInput}
                placeholder="Password"
                placeholderTextColor="#8F9BB3"
                secureTextEntry={!passwordVisible}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIcon}
              >
                <Image source={require("../assets/images/Vector.png")} />
              </TouchableOpacity>
            </View>

            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}

            <View style={styles.rememberContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  onCheckColor="white"
                  CheckColor="#60C98B"
                  backgroundColor="#60C98B"
                  lineWidth={1}
                  boxType="square"
                  style={[
                    styles.checkbox,
                    values.termsAccepted && styles.backcolor,
                  ]}
                  value={values.termsAccepted}
                  onValueChange={(newValue) =>
                    setFieldValue("termsAccepted", newValue)
                  }
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgetPasswordScreen")}
                style={styles.link}
              >
                <Text style={styles.forgotText}>Forget password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterPage")}
              style={styles.link}
            >
              <Text style={styles.linkText}>
                Don’t have an account?
                <Text style={styles.linkTextSpan}>Sign up </Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F274A",
  },

  form: {
    width: horizontalScale(293),
    height: verticalScale(295),
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    width: horizontalScale(290),
    height: verticalScale(36),
    backgroundColor: "#2E3A59",
    padding: moderateScale(5),
    color: "#FFFFFF",
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(4),
  },
  passworInput: {
    width: horizontalScale(290),
    height: verticalScale(36),
    backgroundColor: "#2E3A59",
    padding: moderateScale(5),
    color: "#FFFFFF",
    borderRadius: moderateScale(4),
  },
  label: {
    color: "white",
    marginBottom: verticalScale(5),
    fontSize: moderateScale(16),
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  eyeIcon: {
    position: "absolute",
    right: moderateScale(10),
    top: moderateScale(8),
    right: moderateScale(13),
    padding: moderateScale(3),
    color: "white",
  },
  inputError: {
    borderColor: "red",
    borderWidth: horizontalScale(1),
  },
  errorIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    position: "absolute",
    top: moderateScale(10),
    right: moderateScale(10),
  },
  error: {
    color: "red",
    fontSize: moderateScale(12),
    marginBottom: verticalScale(10),
  },
  button: {
    width: horizontalScale(290),
    height: verticalScale(36),
    backgroundColor: "#60C98B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(4),
    marginBottom: verticalScale(10),
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(20),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(4),
  },
  checkbox: {
    width: horizontalScale(15),
    height: verticalScale(15),
    fontSize: moderateScale(13),
  },
  backcolor: {
    backgroundColor: "#60C98B",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(40),
  },
  rememberText: {
    color: "#FFFFFF",
    fontSize: moderateScale(13),
  },

  forgotText: {
    color: "#8F9BB3",
    marginLeft: "auto",
    fontSize: moderateScale(14),
    color: "#60C98B",
  },
  separator: {
    borderBottomColor: "#8F9BB3",
    borderBottomWidth: horizontalScale(1),
    marginVertical: verticalScale(10),
    width: "100%",
  },
  link: {
    marginTop: verticalScale(10),
  },
  linkText: {
    color: "#8F9BB3",
    fontSize: moderateScale(12),

    textAlign: "center",
    lineHeight: verticalScale(14.6),
  },
  linkTextSpan: {
    color: "#60C98B",
  },
});

export default LoginPage;
