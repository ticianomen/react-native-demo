import React, { Fragment, useState } from 'react';
import { StyleSheet, Button, Text, Image, View, ScrollView } from 'react-native';
import { styles } from '../Styles/Slider';
import useLocalStorage from '../useLocalStorage';


export default function Slider({images}){
    
const [active, setActive] = useLocalStorage('currentPage', 1);

const [state, setState] = useState({
    todos: images,
    currentPage: active?active:1,
    todosPerPage: 3,
  })

  const handleClick = (number) => {
    setActive(Number(number))
    setState({
      ...state,
      currentPage: Number(number)
    })
  }
  const handlePrev = () => {
      if(active>1){
        setActive(state.currentPage-1)
        setState({
        ...state,
        currentPage: state.currentPage-1
        })
      }
    
  }
  const handleNext = () => {
      if(active<Math.ceil(state.todos.length / state.todosPerPage)){
        setActive(state.currentPage+1)
        setState({
        ...state,
        currentPage: state.currentPage+1
        })
      }
    
  }
    const indexOfLastTodo = (state.currentPage * state.todosPerPage);
    const indexOfFirstTodo = indexOfLastTodo - state.todosPerPage;
    const currentTodos = state.todos.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
        return (
            <View
            key={index}
            style={styles.pagination}
            >
                <Text 
                style={styles.imageText}
                >
                    {todo.title}
                </Text>
                <Image
                source = {{ uri:todo.image}}
                style = {styles.image}
                />
            </View>
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(state.todos.length / state.todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        return (
            <Button
            key={number}
            id={number}
            onPress={()=>handleClick(number)}
            style={number===active?styles.pagingActiveText:styles.pagingText}
            title= {number}
            />
        )
    });

    
  return (
    <View style={styles.container}>
      
        {active!==1 &&<Button onPress={handlePrev} title="<" style={styles.buttons}/>}
        <View>
            <View style={{flexDirection:'row'}}>
                {
                    renderTodos
                }
            </View>
            
            <View style={styles.numbers}>
                {
                renderPageNumbers
            }
            </View>
            
        </View>
        
        {active!==Math.ceil(state.todos.length / state.todosPerPage)&&<Button onPress={handleNext} title=">" style={styles.buttons}/>}
        
    </View>
  )
}

