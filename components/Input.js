import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter new todo"
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
        onSubmitEditing={props.submit}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "lightgrey",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
  },
  input: {
    padding: 5,
    color: "#000",
    fontSize: 18,
  },
});
