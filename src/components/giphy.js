import React, {Component} from 'react';
import {View, Image, Text, Button} from 'react-native';

export default class Giphy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getData() {
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.props.search}&limit=10&api_key=CQ8IVx6WAEmlMyhXDfjW1E3OfqvGEYjc`;

        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                let rand = Math.floor(Math.random() * 9);
                console.log(rand);
                this.setState({pic: json.data[rand].images.downsized_medium.url});
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View>
                <Image source={{ uri: this.state.pic }} style={{ width: 250, height: 250 }} />
                <Text>Powered By GIPHY</Text>
                <Button
                    onPress={() => {
                        this.getData();
                    }}
                    title="New Image"
                />
            </View>
        );
    }
}