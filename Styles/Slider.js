import { StyleSheet , Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width ;

export const styles = StyleSheet.create({
    shadow:{
        backgroundColor: 'rgba(17, 17, 17, 0.2)',
        position:'relative',
        top:-4,
        left:-4,
        borderRadius: 15,
    },
    container: { 
        margin: 5,
        display:'flex',
        flexDirection:'row',
        width, 
        },
    left:{
        position: "absolute",
        zIndex:5,
        elevation:5,   
        flex:1,
        top: (height/2 - 45),     
        left: 0,        
    },
    right:{  
        position: "absolute",
        zIndex:5,
        elevation:5,   
        flex:1,
        top: (height/2 - 45),     
        right: 15,  
    },
    imageText:{
        width:(width*0.6)-15, 
        height: (height/2 - 55),
        borderRadius:15, 
        overflow: 'hidden',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        position: 'absolute',
        flex:1,
        bottom:0,
        textAlign: 'center', 
        marginRight: 15,
        fontSize:30,
        color:'#ccc',
        zIndex:2,
        elevation:2,
        backgroundColor: "rgba(52, 52, 52, 0.7)"
        },
    image: { 
        width,
        resizeMode:'contain',
        borderRadius: 15, 
        marginRight: 15,
        flex:1,
        },
    pagination: { 
        display:'flex',
        width:(width*0.9),      
        flex:1,
        flexDirection:'row',
        },
});