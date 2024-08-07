import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 50,
        backgroundColor: PRIMARY_COLOR
    },

    container2:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 50,
        backgroundColor: SECUNDARY_COLOR
    },

    title:{
        color:'#345f87',
        fontWeight:'bold',
        fontSize: 50,
        marginBottom: 40,
        alignSelf:'center'
    },

    image:{
        width: 220,
        height: 230,
        marginBottom: 70,
        alignSelf: 'center'
    },

    input: {
        height: 35,
        margin: 20,
        borderWidth: 0.8,
        padding: 10,
        marginBottom: 40,
        backgroundColor: INPUT_COLOR
    },

    text:{
        color: '#3a8038',
        fontWeight:'bold',
        fontSize: 20,
    },

    textAnswer:{
        color: '#388073',
        fontWeight:'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10
    },

    answer:{
        fontWeight:'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 30
        },

    button:{
        width:100,
        height: 20,
        backgroundColor: '#e1daff',
        borderRadius: 5,
        alignSelf: 'center',
    },

    div:{
        fontSize: 20,
        alignSelf: 'center',
    }
})
