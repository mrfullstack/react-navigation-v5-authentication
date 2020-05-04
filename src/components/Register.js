import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Register screen Screen </Text>
      {/* Don't have an account */}
      <Text style={styles.text2}>Already havae an account?</Text>
      <Button
        title="Go to login"
        onPress={() => {
          navigation.navigate("Login");
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
