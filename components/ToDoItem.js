import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import { db, doc, deleteDoc, updateDoc } from "../Config";
import { MaterialIcons } from "@expo/vector-icons";

const ToDoItem = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const [todoTitle, setTodoTitle] = useState(props.title);

  // update isChecked property
  const updateIsChecked = async () => {
    await updateDoc(doc(db, "ToDos", props.id), {
      isChecked: isChecked,
      title: todoTitle,
    });
  };

  // delete specific item
  const deleteShoppingItem = async () => {
    await deleteDoc(doc(db, "ToDos", props.id)).then(() => {
      props.refetch();
    });
  };

  // call updateIsChecked function whenever isChecked property change
  useEffect(() => {
    updateIsChecked();
  }, [isChecked]);

  return (
    <View style={styles.container}>
      <CheckBox
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
      <TextInput
        placeholder="ToDo"
        value={todoTitle}
        style={styles.text}
        onChangeText={(text) => setTodoTitle(text)}
        onSubmitEditing={updateIsChecked}
      />

      <Pressable onPress={deleteShoppingItem}>
        <MaterialIcons name="delete" size={24} color="#FD5D5D" />
      </Pressable>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
  },
});
