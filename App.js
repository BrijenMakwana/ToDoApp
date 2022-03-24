import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import { db, collection, getDocs, addDoc } from "./Config";
import ToDoItem from "./components/ToDoItem";
import Input from "./components/Input";

export default function App() {
  const [todos, setToDos] = useState([]);
  const [newItem, setNewItem] = useState("");

  // get todo list
  const getToDos = async () => {
    const todosCol = collection(db, "ToDos");
    const todosSnapshot = await getDocs(todosCol);
    setToDos(todosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // add new item
  const addToDo = async () => {
    try {
      const docRef = await addDoc(collection(db, "ToDos"), {
        title: newItem,
        isChecked: false,
      });
      getToDos();
      setNewItem("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoItem
              title={item.title}
              isChecked={item.isChecked}
              id={item.id}
              refetch={getToDos}
            />
          )}
        />
      </View>

      <Input
        value={newItem}
        onChange={(text) => setNewItem(text)}
        submit={addToDo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 1,
  },
});
