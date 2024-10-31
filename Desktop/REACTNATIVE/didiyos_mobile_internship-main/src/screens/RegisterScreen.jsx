import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
  percentageWidth,
} from "../theme/Responsive";
import CheckBox from "@react-native-community/checkbox";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

// Formik ve Yup validation schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("İsim zorunludur"),
  username: Yup.string().required("Kullanıcı adı zorunludur"),
  email: Yup.string()
    .email("Geçerli bir email girin")
    .required("Email zorunludur"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre zorunludur")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^.&*])/,
      "Password must contain at least one uppercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifreyi onaylayın"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms"),
});

const RegisterPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          termsAccepted: false,
        }}
        validationSchema={RegisterSchema}
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
            {/* Name Input */}
            <Text style={styles.label}>{"Name"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.name && touched.name ? styles.inputError : null,
                ]}
                placeholder="Name"
                placeholderTextColor="#8F9BB3"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && touched.name && (
                <Image
                  source={require("../assets/images/Vector2.png")} // Hata ikonu
                  style={styles.errorIcon}
                />
              )}
            </View>
            {errors.name && touched.name ? (
              <Text style={styles.error}>{errors.name}</Text>
            ) : null}

            {/* Username Input */}
            <Text style={styles.label}>{"Username"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.username && touched.username
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Username"
                placeholderTextColor="#8F9BB3"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {errors.username && touched.username && (
                <Image
                  source={require("../assets/images/Vector2.png")}
                  style={styles.errorIcon}
                />
              )}
            </View>
            {errors.username && touched.username ? (
              <Text style={styles.error}>{errors.username}</Text>
            ) : null}

            {/* Email Input */}
            <Text style={styles.label}>{"Email address"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.email && touched.email ? styles.inputError : null,
                ]}
                placeholder="Email address"
                placeholderTextColor="#8F9BB3"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Image
                  source={require("../assets/images/Vector2.png")}
                  style={styles.errorIcon}
                />
              )}
            </View>
            {errors.email && touched.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}

            {/* Password Input */}
            <Text style={styles.label}>{"Password"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.password && touched.password
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Password"
                placeholderTextColor="#8F9BB3"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Image
                  source={require("../assets/images/Vector2.png")}
                  style={styles.errorIcon}
                />
              )}
            </View>
            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}

            {/* Confirm Password Input */}
            <Text style={styles.label}>{"Confirm Password"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.confirmPassword && touched.confirmPassword
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Confirm Password"
                placeholderTextColor="#8F9BB3"
                secureTextEntry
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Image
                  source={require("../assets/images/Vector2.png")}
                  style={styles.errorIcon}
                />
              )}
            </View>
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            ) : null}

            {/* Terms and Conditions Checkbox */}
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
                <Text style={styles.rememberText}>I Agree With</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Terms & Conditions</Text>
              </TouchableOpacity>
            </View>
            {errors.termsAccepted && touched.termsAccepted ? (
              <Text style={styles.error}>{errors.termsAccepted}</Text>
            ) : null}

            {/* Register Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate("LoginPage")}
              style={styles.link}
            >
              <Text style={styles.linkText}>
                Already have an account? Log in
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
    width: horizontalScale(292),
    height: verticalScale(536),
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
    color: "#FFFFFF",
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(4),
  },
  inputError: {
    borderColor: "red",
    borderWidth: horizontalScale(1),
  },
  errorIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    position: "absolute",
    right: horizontalScale(10),
    top: verticalScale(8),
  },
  label: {
    color: "white",
    marginBottom: verticalScale(5),
    fontSize: moderateScale(16),
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
    fontSize: moderateScale(16),
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(40),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(15),
  },
  checkbox: {
    width: horizontalScale(15),
    height: verticalScale(15),
    fontSize: moderateScale(13),
    color: "white",
  },
  backcolor: {
    backgroundColor: "#60C98B",
  },
  rememberText: {
    color: "#FFFFFF",
    fontSize: moderateScale(13),
  },
  forgotText: {
    color: "#60C98B",
    fontSize: moderateScale(14),
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
    fontSize: moderateScale(14),
  },
});

export default RegisterPage;
