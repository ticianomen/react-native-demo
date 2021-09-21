import { StyleSheet , Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = Dimensions.get('window').width * 0.8
const CARD_HEIGHT = Dimensions.get('window').width * 0.7
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10

export const styles = StyleSheet.create({
    container: { 
        flex: 1,
        height:CARD_HEIGHT,
        justifyContent: 'center',
        },
    left:{
        position: "absolute",
        zIndex:5,
        elevation:5,   
        flex:1,
        top: (CARD_HEIGHT/2 - 45),     
        left: 0,        
    },
    right:{  
        position: "absolute",
        zIndex:5,
        elevation:5,   
        flex:1,
        top: (CARD_HEIGHT/2 - 45),     
        right: SPACING_FOR_CARD_INSET,  
    },
    imageText:{
        width:(CARD_WIDTH), 
        height: (CARD_HEIGHT/2 - 15),
        borderRadius:15, 
        overflow: 'hidden',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        position: 'absolute',
        flex:1,
        bottom:0,
        right: 14,
        textAlign: 'center', 
        fontSize:30,
        color:'#ccc',
        zIndex:2,
        elevation:2,
        backgroundColor: "rgba(52, 52, 52, 0.7)"
        },
    image: { 
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode:'cover',
        borderRadius: 15, 
        marginRight: SPACING_FOR_CARD_INSET,
        flex:1,
        },
    pagination: { 
        display:'flex',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15
        },
});