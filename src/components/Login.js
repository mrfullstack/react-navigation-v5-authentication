import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Login Screen </Text>
      <Button
        color="red"
        title="Login"
        onPress={() => {
          login();
        }}
      />
      {/* Don't have an account */}
      <Text style={styles.text2}>Don't have an account?</Text>
      <Button
        title="Go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 21,
    color: "green",
  },
  text2: {
    fontSize: 16,
    color: "gray",
  },
});
