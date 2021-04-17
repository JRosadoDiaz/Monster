import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

function OneMonster({name, species, age, pic}) {
    return (
        <View>
            <Image source={{ uri: pic }} style={{ width: 200, height: 200, marginTop: 30 }} />
            <Text>Name {name}</Text>
            <Text>Species: {species}</Text>
            <Text>Age: {age}</Text>
        </View>
    )
}

export default class Monsters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // States are just large JSON objects
            monsters: [
                {
                    name: "Bob",
                    species: "zombie",
                    age: 21,
                    pic: ""
                },
                {
                    name: "Suzette",
                    species: "vampire",
                    age: 34,
                    pic: ""
                },
                {
                    name: "Harry",
                    species: "werewolf",
                    age: 42,
                    pic: ""
                },
                {
                    name: "Diane",
                    species: "ghost",
                    age: 28,
                    pic: ""
                }
            ]
        }
    }

    render() {
        let monster_holder = [];
        for(let i=0; i<this.state.monsters.length; i++) {
            monster_holder.push(
                <OneMonster
                  key={i}
                  name={this.state.monsters[i].name}
                  species={this.state.monsters[i].species}
                  age={this.state.monsters[i].age}
                  pic={this.state.monsters[i].pic}
                />
            )
        }
        return (
            <View>
                <Text>Monsters</Text>
                {monster_holder}
                {/* <OneMonster name='Bob' age='21' species='zombie' /> */}
            </View>
        )
    }
}