import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    image:{
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    input: {
        width: '80%', 
        borderWidth: 1,
        borderColor: '#AAA',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF', 
    },
    button: {
        width: '80%', 
        backgroundColor: '#F4991A',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;
