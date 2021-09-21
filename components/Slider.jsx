import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/Slider';
import useLocalStorage from '../useLocalStorage';
import { useRef } from 'react';
import defaultImage from '../assets/defaultImage.jpg'
export default function Slider({images}){
   
const {width} = Dimensions.get('window'); 
const [active, setActive] = useLocalStorage('currentPage', 1);

const scrollRef = useRef();
const [state, setState] = useState({
    todos: images,
    currentPage: active?active:1,
    todosPerPage: 3,
  })

  const handlePrev = () => {
      if(active>1){
        setActive(state.currentPage-1)
        setState({
        ...state,
        currentPage: state.currentPage-1
        })
        scrollRef.current?.scrollTo({
          x: 375*3,
          animated: true,
        });
      }
      scrollRef.current?.scrollTo({
        x: 'end',
        animated: true,
      })
    
  }
  const handleNext = () => {
      if(active<Math.ceil(state.todos.length / state.todosPerPage)){
        setActive(state.currentPage+1)
        setState({
        ...state,
        currentPage: state.currentPage+1
        })
        scrollRef.current?.scrollTo({
          x: 0,
          animated: true,
        });
      } 
  }

    const indexOfLastTodo = (state.currentPage * state.todosPerPage);
    const indexOfFirstTodo = indexOfLastTodo - state.todosPerPage;
    const currentTodos = state.todos.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
        return (
            <View
            key={index}
            style={[styles.pagination]}
            ><View>
              
            </View>
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
    
  return (
      
      <ScrollView 
      ref={scrollRef} 
      horizontal 
      pagingEnabled
      style={styles.container}>
        {active!==1 &&
          <Icon
              name="arrow-left"
              size={90}
              color="rgba(55, 55, 55, 0.8)"
              onPress={handlePrev} 
              style={styles.left}
          />
        }
        {
            renderTodos
        }
        
        {active!==Math.ceil(state.todos.length / state.todosPerPage)&&
        <Icon
          name="arrow-right"
          size={90}
          color="rgba(55, 55, 55, 0.8)"
          onPress={handleNext}
          style={styles.right}
        />
        }
        </ScrollView>
  )
}