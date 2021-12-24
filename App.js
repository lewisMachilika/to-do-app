import React, {useState} from 'react';
import { StyleSheet,View, FlatList , Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import SandBox from './components/SandBox';
import TodoItem from './components/TodoItem';
import { MaterialIcons } from '@expo/vector-icons'
export default function App() {
  // const [name, setName]=useState("luja");
  // const [person, setPerson]=useState({name:"lewis",age:28});
  // const onPressHandler = () =>{
  //   if(name=="luja")
  //     setName("Machilika");
  //   else setName("luja")
  // }
  const [todos, setTodos]= useState([
    {text:'buy cofee', key: '1'},
    {text:'Advertise an App', key: '2'},
    {text:'Create an App', key: '3'},
    {text:'Victimize Elizabeth', key: '4'}
  ])
  const [showPlus, setShowPlus]=useState(true)
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{return prevTodos.filter(todo=>todo.key!=key)})
  }
  const submitHandler = (text) =>{
    if(text.length>3){
      setShowPlus(true)
      setTodos((prevTodos)=>{
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      });
    }else
      Alert.alert('OOPS', 'Chars should be greater than 3',
        [{text:'Understtod',onPress:()=>console.log('Understood pressed')}]
      );
  }
  return (
    //<SandBox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      setShowPlus(true)
      console.log("touched");
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.item}>
          {
            showPlus?
              <MaterialIcons name='add' size={30} onPress={
                      ()=>{setShowPlus(false)}
                    }
                 style={styles.add} color='#333'/>
              :
              <AddTodo submitHandler={submitHandler}/>
          }
          <FlatList data={todos} renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item:{
    flex: 1,
    padding: 30,
  },
  add:{
    flexDirection: 'row',
    alignSelf: 'center',
  }
});
