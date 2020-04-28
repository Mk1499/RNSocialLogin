import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import SnapchatLogin from 'react-native-snapchat-login';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

const { width, height } = Dimensions.get("window")

export default class Home extends Component {

    state = {
        userName: "",
        avatar: ''
    }

    componentDidMount() {
        // SnapchatLogin.login();
    }

    snapLogin = () => {
        SnapchatLogin.login().then(userData => {
            console.log("User Data : ", userData);
            this.setState({
                userName: userData.displayName,
                avatar: userData.avatar
            })

        })

    }


    render() {
        return (

            <Container style={styles.container}>
                <View >
                    <TouchableOpacity style={styles.snapBtn} onPress={this.snapLogin}>
                        <Text> SnapchatLogin </Text>

                    </TouchableOpacity>
                    {this.state.userName ?


                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: this.state.avatar }} />
                                    <Body>
                                        <Text>{this.state.userName}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                        : null}
                </View>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width,
        height,
        backgroundColor: '#333'

    },
    snapBtn: {
        backgroundColor: 'yellow',
        width: 0.5 * width,
        height: 0.1 * height,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#333',
        borderWidth: 3,
        borderRadius: 18
    }
})