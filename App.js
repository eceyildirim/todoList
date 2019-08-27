/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MyButton from './button';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Title,
  TextInput,
  label,
  console,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const todos = [];


export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.addItem = this.addItem.bind(this);

  }

  state = {
    toDo : ''
  }

  addItem() {
    // console.warn('App::addItem')

    todos.push(this.state.toDo)

    this.setState({toDo: ''})

  }


 renderItem(todo){
    return (
        <View key={todo} style={{ justifyContent: 'center', width: 400 , flex: 1, height: 100, backgroundColor: 'pink', margin: 8, padding: 8, borderWidth: 2, borderRadius: 10, borderColor: 'gray'}}>
          {/* <TextInput placeholder="" style={{ color: 'white', fontSize: 24}}></TextInput> */}
         <Text style={{color: 'gray', fontSize: 24, justifyContent: 'center', alignItems: 'center'}}>{todo}</Text>
        </View>
    );
  }


  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS == 'ios' ? 21 : 0}}>
        <View style={{backgroundColor: 'pink', height: 100, flexDirection: 'row', padding: 8}}>

        <View style={{ borderRadius: 16 ,backgroundColor: 'red', flex: 4, marginRight: 8, justifyContent: 'center'}}>
          <TextInput value={this.setState.toDo} onChangeText={(v) => this.setState({toDo: v})} placeholder={'Bugün ne yapacaksın?'} style={{borderRadius: 16,  height: 32, flex: 1, backgroundColor: '#f4f4f4'}}></TextInput>
        </View>
        <View style={{borderRadius: 16, backgroundColor: 'pink', flex: 1}}>
          <MyButton style={{color: 'gray'}} text={'Ekle'} onPress={this.addItem}/>
        </View>
        </View>

        <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 10}}></View>

        <ScrollView>
          {
            todos.map((todo) => this.renderItem(todo))
          }


        </ScrollView>

      </View>
    );
  }
}
