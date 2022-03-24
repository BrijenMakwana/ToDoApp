import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CheckBox = (props) => {
  const iconName = props.isChecked ? "checkbox" : "checkbox-outline";
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Ionicons name={iconName} size={24} color="black" />
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
