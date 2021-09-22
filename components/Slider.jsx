import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView,Dimensions,Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from '../Styles/Slider';
import useLocalStorage from '../useLocalStorage';
import { useRef } from 'react';
export default function Slider({images}){
   
const CARD_WIDTH = Dimensions.get('window').width * 0.8
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 
const [active, setActive] = useLocalStorage('currentPage', 1);

const scrollRef = useRef();
const [state, setState] = useState({
    todos: images,
    currentPage: active?active:1,
    todosPerPage: images.length,
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
    
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <ScrollView 
          ref={scrollRef} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          decelerationRate={'fast'} 
          snapToInterval={CARD_WIDTH+10} 
          snapToAlignment='center' 
          contentInset={{ 
            left: SPACING_FOR_CARD_INSET, 
            right: SPACING_FOR_CARD_INSET 
          }}
          contentContainerStyle={{
            
            display:'flex', 
            paddingHorizontal: (Platform.OS === 'android' || Platform.OS === 'web' )? SPACING_FOR_CARD_INSET : 0
          }}
        >
        {active!==1 &&
          <View style={styles.left}>
            <Icon
              name="chevron-small-left"
              size={40}
              color="rgba(55, 55, 55, 0.8)"
              onPress={handlePrev} 
          />
          </View>
        }
        {
            renderTodos
        }
        
        {active!==Math.ceil(state.todos.length / state.todosPerPage)&&
        <View style={styles.right}>
          <Icon
          name="chevron-small-right"
          size={40}
          color="rgba(55, 55, 55, 0.8)"
          onPress={handleNext}
        />
          </View>
        }
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
      
      
  )
}