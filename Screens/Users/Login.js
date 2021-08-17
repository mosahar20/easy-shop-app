import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import FormContainer from '../../shared/Form/FormContainer';
import Input from '../../shared/Form/Input';
import Error from '../../shared/Error';

//context
import AuthGlobal from '../../Context/store/AuthGlobal';
import { loginUser } from '../../Context/actions/Auth.actions';

import EasyButton from '../../shared/StyledComponents/EasyButton';


const Login = (props) => {

    const context = useContext(AuthGlobal)
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState("");

    useEffect(() => {
        if (context.stateUser.isAuthenticated === true) {
            props.navigation.navigate("User Profile")
        }
    }, [context.stateUser.isAuthenticated])

    const handleSubmit = () => {
        const user = {
            email,
            password
        }

        if (email === "" || password === "") {
            setError("Please fill in your credentials")
        } else {
            loginUser(user, context.dispatch)
        }
    }


    return (
        <FormContainer
            title = {"Login"}
        >
            <Input 
                placeholder={"Enter Email"}
                name = {"email"}
                id = {"email"}
                vlaue={email}
                onChangeText = {(text) => setEmail(text.toLowerCase())}            
            />
            <Input 
                placeholder={"Enter Passord"}
                name = {"password"}
                id = {"password"}
                vlaue={password}
                secureTextEntry = {true}
                onChangeText = {(text) => setPassword(text)}            
            />

            <View style={styles.buttonGroup}>
                {error ? <Error message={error}/> : null}
                <EasyButton large primary onPress={() => handleSubmit()}>
                     <Text style={{ color: "white" }}>Login</Text>
                </EasyButton>
            </View>

            <View style={{marginTop: 40}, styles.buttonGroup}>
                <Text style={styles.middleText}>Dont have an acount yet</Text>
                <EasyButton
                    large
                    secondary 
                    onPress={() => props.navigation.navigate("Register")}>
                    <Text style={{ color: "white" }}>Register</Text>
                </EasyButton>
            </View>

        </FormContainer>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        alignItems: 'center'
    },
    middleText:{
        marginBottom: 20,
        alignSelf: 'center'
    }

})

export default Login;