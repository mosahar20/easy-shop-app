import { retry } from 'async';
import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions/cartActions';

import Toast from 'react-native-toast-message';

import EasyButton from '../../shared/StyledComponents/EasyButton';

var {width} = Dimensions.get("window");

const ProductCard = (props) => {

const {name, temp, hum, soil, light1, light2, light3, light4, light5, light6, light7, light8} = props;

return(
    <View style= {styles.container}>
        <Image 
        style={styles.image}
        resizeMode= "contain"
        source = {{uri: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
        />
        
        <View style={styles.card}/>
        <Text style={styles.title}>
            {name.length > 15 ? name.substring(0, 15-3)
                + '...': name 
            }
        </Text>
        <Text style={styles.price}>temp: {temp}</Text>
        <Text style={styles.price}>Hum: {hum}</Text>
        
    </View>

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
        width: width/2-20,
        height:width/1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
        },

        image: {
            width: width/2 -20 -10,
            height: width/2 -20 - 10,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: -45
        }, 

        card: {
            marginBottom: 10,
            height: width/2 -20 -90,
            backgroundColor: 'transparent',
            width: width/2-20-10
        },
        title: {
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center'

        },

        price: {
            fontSize: 20,
            color: 'orange',
            marginTop: 10
        }





})

export default connect(null, mapDispatchToProps)(ProductCard);