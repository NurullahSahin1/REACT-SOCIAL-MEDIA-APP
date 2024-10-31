import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
  percentageWidth,
} from "../theme/Responsive";
import { useNavigation } from "@react-navigation/native";

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSendEmail = () => {
    // E-posta gönderme işlemi burada yapılacak
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Email Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#8F9BB3"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
          <Text style={styles.sendButtonText}>Send Email</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Check your inbox</Text>
            <Text style={styles.modalText}>
              Click the link sent to a********@gmail.com before resetting your
              password
            </Text>
            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.okButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  title: {
    fontSize: moderateScale(20),
    color: "#FFFFFF",
    marginBottom: verticalScale(20),
    fontWeight: "bold",
  },
  label: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(10),
  },
  inputContainer: {
    flex: 1,
    top: percentageWidth(50),
  },
  input: {
    width: horizontalScale(293),
    height: verticalScale(36),
    backgroundColor: "#2E3A59",
    color: "#FFFFFF",
    paddingHorizontal: moderateScale(10),
    marginBottom: verticalScale(20),
    borderRadius: moderateScale(2),
  },
  sendButton: {
    width: horizontalScale(293),
    height: verticalScale(36),
    backgroundColor: "#60C98B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(4),
    marginBottom: verticalScale(10),
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
  },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: horizontalScale(391),
    height: verticalScale(377),
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: moderateScale(38),
    borderTopRightRadius: moderateScale(38),
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(20),
  },
  modalTitle: {
    fontSize: moderateScale(20),
    color: "#1F274A",
    fontWeight: "bold",
    marginBottom: verticalScale(10),
  },
  modalText: {
    fontSize: moderateScale(14),
    color: "#1F274A",
    textAlign: "center",
    marginBottom: verticalScale(20),
  },
  okButton: {
    width: horizontalScale(104.57),
    height: verticalScale(36),
    backgroundColor: "#1F274A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(5),
  },
  okButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
  },
});

export default ForgetPasswordScreen;
