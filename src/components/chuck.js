import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';

export default class Chuck extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getData() {
        let url = "https://api.chucknorris.io/jokes/random";

        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({chuck: json.value, pic: json.icon_url});
            });
    }

    // Runs when the component is loaded
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View>
                <Text>Some text from Chuck</Text>
                <Text>Sup { this.props.name }</Text>
                <Image source={{ uri: this.state.pic }} style={{width: 200, height:200}} />
                <Text>{ this.state.chuck }</Text>
                <Button
                    onPress={() =>{
                        this.getData();
                    }}
                    title="More Chuck Norris"
                />
            </View>
        )
    }
}