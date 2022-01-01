import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions 
} from "react-native";

import {Container, Header, Icon, Item, Input, Text} from "native-base"

import { useFocusEffect } from "@react-navigation/native";

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";

import EasyButton from '../../shared/StyledComponents/EasyButton';


//product List
import ProductList from './ProductList'
import { ScrollView } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage"
import Error from '../../shared/Error';






var {height} = Dimensions.get('window');


const ProductContainer = (props) => {
  
  const [devices, setDevices] = useState([]);
  const [focus, setFocus] = useState();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [error , setError] = useState("");


  useFocusEffect((
    useCallback(
      () => {
        setFocus(false);

        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios
                    .get(`${baseURL}data/my`, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
                    .then((res) => {
                      setDevices(res.data);
                      setLoading(false);
                    })
            })
            .catch((error) => 
                console.log('Api call error',error),
                )

        return ()=>{
          setDevices([]);
          setFocus();
        }
      },
      [],
    )
  ))

  const handleSubmit = () => {
    const body = {
      name
    }
    if (name === "") {
        setError("Please fill in your name")
    } else {
      AsyncStorage.getItem("jwt")
            .then((res) => {
                axios.post(`${baseURL}data`, body, {
                        headers: { Authorization: `Bearer ${res}` },
                    })
                    .then(
                      props.navigation.navigate("Home"),
                      setError("")
                    )
                    
            })
      .catch((error) => 
          console.log('Api call error',error),
          )
    }
}
      
  return(
    <>
    {loading == false ? (
        <Container>
        {focus == true ? (
          <View> 
            <Banner/>
          </View>
        ) : (
          <ScrollView>
            <View> 
          {devices.length > 0 ? (
              <View style={styles.listContainer}>
              {devices.map((item) => {
                return(
                  <ProductList
                    navigation = {props.navigation}
                    key = {item._id}
                    item={item}             
                  
                  />
    
                )
    
              })}
              
            </View>
            
            ) : (
              <View style= {[styles.center, {height: height/2}]}>
                <Text>No Devices Found</Text>
    
    
    
              </View>
    
          )}
          
          
          </View>    
          </ScrollView>
          
          
          
        )}
        <View style={{flexDirection: "row", flexWrap: "wrap",}}>
                {error ? <Error message={error}/> : null}
                
                <Input 
                placeholder={"Enter Name"}
                name = {"name"}
                id = {"name"}
                value={name}
                onChangeText = {(text) => setName(text)}            
                />

                <EasyButton 
                  large 
                  secondary
                  onPress={() => [
                    handleSubmit(),
                  ]}
                  >
                    <Text style={styles.textStyle}>Add Device</Text>
                </EasyButton>
          
            </View>
         
      </Container>
    ) : (
      //Loading
      <Container style={[styles.center, {backgroundColor: '#f2f2f2'}]}>
        <ActivityIndicator size="large" color='red' />
      </Container>
    )}
  </>
  );
    

  };

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold"
}
});

export default ProductContainer;
