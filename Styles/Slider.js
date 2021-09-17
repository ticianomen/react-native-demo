import { StyleSheet , Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width/3 ;

export const styles = StyleSheet.create({
    container: { 
        display:'flex',
        flexDirection:'row',
        width, 
        height,
        justifyContent: 'center'  
        },
    buttons:{
        width, 
        height,
    },
    images:{
        display:'flex',
        flexDirection:'row',
    },
    imageText:{
        width:(width/3.2), 
        height: (height/4),
        borderRadius: '10px',
        position: 'absolute',
        bottom:0,
        textAlign: 'center', 
        color:'#ccc',
        zIndex:2,
        backgroundColor: "rgba(52, 52, 52, 0.7)"
        },
    image: { 
        width:(width/3.2), 
        height,
        borderRadius: '10px', 
        marginRight:'5px'
        },
    pagination: { 
        width:'fit-content',
        display:'flex',
        flexDirection:'row',
        },
    pagingText: { 
        fontSize: (width/30), 
        color:'red',
        margin: 3 
        },
    pagingActiveText: { 
        fontSize: (width/30), 
        color:'red', 
        margin: 3 
        },
    numbers: {
        width:200,
        marginTop:'5px',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between'
        }
});