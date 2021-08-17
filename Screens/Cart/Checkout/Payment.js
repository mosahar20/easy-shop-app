import React , { useState } from 'react';
import {View, Button} from 'react-native';
import { Container,
        Header,
        Content,
        ListItem,
        Text,
        Radio,
        Right,
        Left,
        Icon,
        Body,
        Title,
        Badge
} from 'native-base';

import {Picker} from '@react-native-picker/picker';

const methods = [
    {name: 'Cash on Delivery', value: 1},
    {name: 'Bank Transfer', value: 2},
    {name: 'Card Payment', value: 3}
]

const paymentCards = [
    {name: 'Wallet', value:1},
    {name: 'Visa', value:2},
    {name: 'MasterCard', value:3},
    {name: 'Other', value:4}
]

const Payment = (props) => {

    const order = props.route.params;

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();
    return(
        <Container>
            <Header>
                <Body>
                    <Title>Choose Your Payment Method</Title>
                </Body>
            </Header>
            <Content>
                {methods.map((item, index) => {
                    return (
                        <ListItem key={item.name} onPress={() => setSelected(item.value)}>
                            <Left>
                               <Text>{item.name}</Text> 
                            </Left>
                            <Right>
                                <Radio selected={selected == item.value} />
                            </Right>
                        </ListItem>
                    )
                })}
                {selected == 3 ? (
                    <Picker
                        mode='dropdown'
                        iosIcon={<Icon name={"arrow=down"} />}
                        headerStyle = {{backgroundColor: 'orange'}}
                        headerBackButtonTextStyle = {{color: '#fff'}}
                        headerTitleStyle = {{color: '#fff'}}
                        selectedValue = {card}
                        onValueChange = {(x) => setCard(x)}
                        style={{ width: 300,height:50, borderColor:'blue',borderWidth:1}}

                    >
                        {paymentCards.map((c, index) => {
                            return <Picker.Item key= {c.name} label={c.name} value={c.name} />
                        })}
                    </Picker>
                ): null}
                <View style={{marginTop: 60, alignSelf: 'center'}}>
                        <Button 
                            title={"Confirm"}
                            onPress={() => props.navigation.navigate("Confirm", {order})}
                            />
                </View>
            </Content>
        </Container>
    )

}

export default Payment;