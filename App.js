/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura: 0, peso: 0,  resultado:0, esultadoText: ""}
    this.calcular = this.calcular.bind(this)
  }

    calcular(){
      let imc = this.state.peso / (this.state.altura * this.state.altura)
      let s = this.state
      s.resultado = imc
      this.setState(s)

      if(s.resultado < 16){
          s.resultadoText = "Magreza Grave"
      } else if(s.resultado < 17){
          s.resultadoText = "Magreza Moderada"
      } else if(s.resultado < 18.5){
        s.resultadoText = "Magreza Leve"
      } else if(s.resultado < 25){
        s.resultadoText = "Saudável"
      } else if(s.resultado < 30){
          s.resultadoText = "Sobrepeso"
      } else if(s.resultado < 35){
        s.resultadoText = "Obesidade Grau I"
      } else if(s.resultado < 40){
        s.resultadoText = "Obesidade Grau II (severa)"
      } else if(s.resultado >= 40){
        s.resultadoText = "Obesidade Grau III (mórbida)"
      }

    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso)=>{this.setState({peso})}}/>
          <TextInput placeholder="Altura"  keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
        </View>
        <TouchableOpacity  style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas:{
    flexDirection:'row',
  },
  input: {
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize: 50, 
    marginTop: 10,
  },
  button:{
      backgroundColor:"#89ffa5",
  },
  buttonText:{
    alignSelf:'center',
    padding:30,
    fontSize: 25,
    color:"#6dc4a4",
    fontWeight: 'bold',
    backgroundColor:"#89ffa5",
},
resultado:{
  alignSelf:'center',
  color:"lightgrey",
  fontSize: 65,
  marginTop: 24,
}

});
