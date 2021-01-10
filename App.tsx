import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoItem';
import FormTodo from './components/FormTodo';
interface props {

}
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee'        ,  key: '1' },
    { text: 'create and app'    ,  key: '2' },
    { text: 'play on the switch',  key: '3' },
    { text: 'Study2',  key: '4' }
  ])
  const pressHander = (key : any) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <FormTodo todos={todos} setTodos={setTodos}/>
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({item}) => (
            <TodoItem item={item} pressHander={pressHander}/>
          )}/>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
 container:{
   flex: 1,
   backgroundColor: '#fff'
 },
 content:{
   padding: 40
 },
 list :{
   marginTop: 20
 }
});
