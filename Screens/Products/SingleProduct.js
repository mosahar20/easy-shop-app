import React, {useState, useEffect, useContext} from "react";
import {Image, View, StyleSheet, Text, ScrollView, Button, Switch} from "react-native";
import {Left, Right, Container, H1} from "native-base";

import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions/cartActions';

import Toast from "react-native-toast-message";

import EasyButton from "../../shared/StyledComponents/EasyButton";

import TrafficLight from "../../shared/StyledComponents/TrafficLight";

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage"
import Error from '../../shared/Error';

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [light1, setLight1] = useState(item.light1);
    const [light2, setLight2] = useState(item.light2);
    const [light3, setLight3] = useState(item.light3);
    const [light4, setLight4] = useState(item.light4);
    const [light5, setLight5] = useState(item.light5);
    const [light6, setLight6] = useState(item.light6);
    const [light7, setLight7] = useState(item.light7);
    const [light8, setLight8] = useState(item.light8);
    const toggleSwitch1 = () => {
        setLight1(previousState => !previousState);
        const body = {
            light1: !light1
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light1/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch2 = () => {
        setLight2(previousState => !previousState);
        const body = {
            light2: !light2
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light2/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch3 = () => {
        setLight3(previousState => !previousState);
        const body = {
            light3: !light3
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light3/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch4 = () => {
        setLight4(previousState => !previousState);
        const body = {
            light4: !light4
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light4/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch5 = () => {
        setLight5(previousState => !previousState);
        const body = {
            light5: !light5
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light5/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch6 = () => {
        setLight6(previousState => !previousState);
        const body = {
            light6: !light6
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light6/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch7 = () => {
        setLight7(previousState => !previousState);
        const body = {
            light7: !light7
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light7/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
    const toggleSwitch8 = () => {
        setLight8(previousState => !previousState);
        const body = {
            light8: !light8
        }
        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .put(`${baseURL}data/Light8/${item._id}`,body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )
    }
        

    return (
        <Container style={styles.container}>

            <ScrollView>
                <View>

                   <Image
                     source = {{uri:'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}} 
                     resizeMode= "contain"
                     style = {styles.image}
                   />
                </View>
                <View style={styles.contenContainer}>
                <H1 style={styles.contentHeader}>{item.name}</H1>
                <Text style={styles.contentText}>Temp: {item.temp}</Text>
                <Text style={styles.contentText}>Humidity: {item.hum}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light1 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={light1}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light2 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={light2}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light3 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={light3}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light4 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch4}
                    value={light4}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light5 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch5}
                    value={light5}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light6 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch6}
                    value={light6}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light7 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch7}
                    value={light7}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={light8 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch8}
                    value={light8}
                />
                
                </View>
            </ScrollView>
        </Container>

    )

}

const mapDispatchToProps = (dispatch) =>{

    return{
        addItemToCart: (product) =>
            dispatch(Actions.addToCart({quantity: 1,product}))
    }

}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'

    },

    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0

    },

    image:{
        width: '100%',
        height: 250

    },
    contenContainer: {
        marginTop: 20,
        justifyContent:"center",
        alignItems: "center"

    },
    contentHeader:{
        fontWeight: 'bold',
        marginBottom: 20

    },
    contentText:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20

    },
    bottomContainer:{
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        left: 0

    },
    price:{

        fontSize: 25,
        margin: 20,
        color:'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    }

})

export default connect(null, mapDispatchToProps)(SingleProduct);