import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Button from "./src/components/Button";
import Task from "./src/components/Task";
import styles from "./Global";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addNewTask() {
    setTasks([...tasks, {text: newTask, completed: false}]);
  }

  function toggleTask(index) {
    const newTask =[...tasks];
    newTask[index].completed = !newTask[index].completed;
    setTasks(newTask);
    }
  useEffect(() => {
      const initialTask = [
        {text: "Atividade1", completed: false},
        {text: "Atividade2", completed: true},
        {text: "Atividade3", completed: true}
      ];
      setTasks(initialTask);
  },[])


  return (
  <View style={styles.container}>

      <TextInput 
      value={newTask} 
      style= {styles.input} 
      onChangeText={(text) => setNewTask(text)}
      />
      <Button title="Adicionar" onPress={() => addNewTask()}/>
      <View style={styles.listContainer}>
        {tasks.map((task,index) => (
        <Task 
        key={task.text}
        isChecked={task.completed} 
        label={task.text} 
        onPress={() => toggleTask(index)}/>
        ))}
      </View>

   

  </View>

  )

}