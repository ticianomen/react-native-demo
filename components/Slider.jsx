import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView,Dimensions,Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/Slider';
import useLocalStorage from '../useLocalStorage';
import { useRef } from 'react';
import defaultImage from '../assets/defaultImage.jpg'
export default function Slider({images}){
   
const CARD_WIDTH = Dimensions.get('window').width * 0.8
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 
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
          horizontal // Change the direction to horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled // Enable paging
          decelerationRate={'fast'} // Disable deceleration
          snapToInterval={CARD_WIDTH+10} // Calculate the size for a card including marginLeft and marginRight
          snapToAlignment='center' // Snap to the center
          contentInset={{ // iOS ONLY
            left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
            right: SPACING_FOR_CARD_INSET // Right spacing for the very last card
          }}
          contentContainerStyle={{
            
            display:'flex', // contentInset alternative for Android
            paddingHorizontal: (Platform.OS === 'android' || Platform.OS === 'web' )? SPACING_FOR_CARD_INSET : 0 // Horizontal spacing before and after the ScrollView
          }}
        >
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
      </SafeAreaView>
    </React.Fragment>
      
      
  )
}