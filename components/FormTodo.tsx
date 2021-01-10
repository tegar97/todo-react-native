import React,{useRef,useState} from 'react'
import { Alert, Button, TextInput, View } from 'react-native'


interface props {
    todos :  any,
    setTodos: any
}
function FormTodo({todos,setTodos } : props) {
    const [todo,setTodo] = useState('')
    const SubmiTodo = () =>{
        if(todo.length > 3) {
            setTodos((prevTodos : any) =>{
                return [{
                    text: todo,key: Math.random().toString(),
                },...prevTodos]
            })
        }else{
            Alert.alert('oops','Todos Must Length then 3 ',[{
                text: 'ok'
            }])
        }
      
    }
    return (
        <View>
            <TextInput onChangeText={(value) => setTodo(value)} placeholder="Tell me , whats you plan today" />
            <Button onPress={() => SubmiTodo()} title="Submit" color="coral"/>
        </View>
    )
}

export default FormTodo
