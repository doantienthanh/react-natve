import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Task from './Task';
import { ScrollView, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
const TodoList = () => {
  const [value, setValue] = useState('');
  const [todos, setTodo] = useState([]);

  const addTodo = () => {
    if (todos.length >= 1) {
      todos.forEach((element) => {
        if (value === element.text) {
          alert('This task have exits!');
        } else if (value.length < 1) {
          alert('You must enter your todo list!');
        } else {
          setTodo([...todos, { text: value, key: Date.now(), checked: false }]);
          setValue('');
        }
      });
    } else {
      if (value.length > 0) {
        setTodo([...todos, { text: value, key: Date.now(), checked: false }]);
        setValue('');
      } else {
        alert('You must enter your todo list!');
      }
    }
  };
  const deleteTodo = (id) => {
    setTodo(
      todos.filter((todo) => {
        if (todo.key !== id) {
          return true;
        }
      }),
    );
  };
  const Checked = (id) => {
    setTodo(
      todos.map((todo) => {
        if (todo.key === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      }),
    );
  };
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={(value) => setValue(value)}
          placeholder={'Create new todo list !'}
          placeholderTextColor="black"
          value={value}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon name="plus" size={30} color="#900" style={{ marginLeft: 30 }} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
            delete={() => deleteTodo(task.key)}
            checked={task.checked}
            setChecked={() => Checked(task.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default TodoList;
// CSS
const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffe4c4',
  },
  container: {
    flexDirection: 'row',
    borderColor: '#dc143c',
    borderBottomWidth: 2,
    paddingRight: 10,
  },
  textInput: {
    height: '100%',
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 20,
  },
});
