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

//product List
import ProductList from './ProductList'
import SearchedProducts from "./SearchedProducts";
import Banner from '../../shared/Banner'
import CategoryFilter from './CategoryFilter'
import { ScrollView } from "react-native-gesture-handler";


var {height} = Dimensions.get('window');


const ProductContainer = (props) => {
  
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]); 
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true);


  useFocusEffect((
    useCallback(
      () => {
        setFocus(false);
        setActive(-1);

        //products
        axios.get(`${baseURL}products`)
              .then((res) => {
                setProducts(res.data);
                setProductsFiltered(res.data);
                setProductsCtg(res.data);
                setInitialState(res.data);
                setLoading(false);
              })
              .catch((erroe) => {
                console.log('Api call error')
              })

        //categories
        axios.get(`${baseURL}categories`)
              .then((res) => {
                setCategories(res.data);
              })
              .catch((erroe) => {
                console.log('Api call error')
              })

        return ()=>{
          setProducts([]);
          setProductsFiltered([]);
          setFocus();
          setCategories([]);
          setActive();
          setInitialState();
        }
      },
      [],
    )
  ))
      
      

  const searchedProducts = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))

    )

  }

  const openList = () => {
    setFocus(true);

  }

  const onBlur = () => {
    setFocus(false);

  }

  const changectg = (ctg) => {
    {
      ctg == 'all' 
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category._id == ctg),
              setActive(true)

            )

        ]
    }
  }
  return(
    <>
    {loading == false ? (
        <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search"/>
            <Input 
              placeholder= "Search"
              onFocus = {openList}
              onChangeText={(text) => searchedProducts(text)}
            />
            {focus == true ? (
              <Icon onPress={onBlur} name="ios-close"/>
            ) : (
              null
            ) }
          </Item>
        </Header>
        {focus == true ? (
          <SearchedProducts
            navigation= {props.navigation}
            productsFiltered={productsFiltered}
          
          />
        ) : (
          <ScrollView>
            <View> 
          <View>
            <Banner/>
          </View>
          <View>
            <CategoryFilter
              categories= {categories}
              CategoryFilter = {changectg}
              productsCtg = {productsCtg}
              active = {active}
              setActive = {setActive}        
            />
          </View>
          {productsCtg.length > 0 ? (
              <View style={styles.listContainer}>
              {productsCtg.map((item) => {
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
                <Text>No Products Found</Text>
    
    
    
              </View>
    
            
    
    
          )}
          
          </View>
    
          </ScrollView>
          
        )}
        
        
        
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
    height: height + 150,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default ProductContainer;
