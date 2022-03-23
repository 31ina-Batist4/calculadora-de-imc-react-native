import React, {useState} from 'react';
import { 
  View,
  Text,
  Button,
  TextInput,
  Image
 } from 'react-native';
 import {TextInputMask} from 'react-native-masked-text';

const App = () => {
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [tema, setTema] = useState('');
  const [calcImc, setCalcImc] = useState(null);
  let imc = peso / (altura * altura);
   imc = imc.toFixed(1);
  
  const calculadora = () =>{
    if(altura && peso) {
     // imc = imc * 100;
    setTema('Seu imc é '),
    setCalcImc(imc)
    if(imc < 18.5)  {
      setResultado('Peso baixo'),
      setCalcImc(imc)
    } else 
     if(imc >= 18.5 && imc < 24.9) {
         setResultado('Peso normal'),
         setCalcImc(imc)
    } else
    if(imc >= 25 && imc < 30){
      setResultado('Sobrepeso'),
      setCalcImc(imc)
    } else
    if(imc >= 30 && imc < 35){
      setResultado('Obesidade grau l'),
      setCalcImc(imc)
    
    }else
    if(imc >= 35 && imc < 40){
      setResultado('Obesidade grau ll'),
      setCalcImc(imc)
    }else {
      setResultado('Obesidade grau lll ou Mórbida'),
      setCalcImc(imc)
    } 
  } else {
    alert('Informe valores para calculo!'),
    setCalcImc(imc)
  }
  };


  return (
    <View style={{
      justifyContent: 'center',
       width:'100%', 
       height:'100%',
       alignItems: 'center'
       }}>
      <Image
       source={require('./assets/imagem.jpg')}
       style={{
        with: '30%',
        height:'50%',
        alignItems: 'center',
        justifyContent:'center'
      }}/>
      <Text style={{
        color:'#696969',
        fontSize:40,
        fontWeight:'bold',
        marginTop: 5
        }}>Calculadora de IMC</Text>

      <Text style={{
        color:'#20B2AA',
        fontSize: 16,
        marginTop:5,
        textAlign:'center'}}>Descubra qual seu índice de massa corpórea</Text>
        
      <TextInputMask
      type={'custom'}
      options={{width:true, mask:'9.99'}}
      onChangeText={(value)=>setAltura(value)}
      placeholder='digite a altura.(Exemplo: 1.60)'
      keyboardType='numeric'
      style={{
        backgroundColor: '#DCDCDC',
        width: '80%',
        borderRadius: 10,
        marginVertical: 10,
        textAlign:'center'}}/>

      <TextInput
      onChangeText={(value)=>setPeso(value)}
      placeholder='digite o peso' 
      keyboardType='numeric'
      style={{
        backgroundColor: '#DCDCDC',
        width: '80%',
        borderRadius: 10,
        marginVertical: 20,
        textAlign:'center'}}/>

      <Button 
       onPress={calculadora}
       title='Calcular'
       color='#20B2AA'
       style={{
        width: '50%',
        borderRadius: 10,
        marginVertical: 20,
        textAlign:'center'}}
      />
        
      <Text style={{
        color:'#696969',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign:'center'}}>{tema} {calcImc}</Text>
        <Text style={{
        backgroundColor:'#FFA500',
        color:'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
        textAlign:'center'}}>{resultado}</Text>
    </View>
  );
};

export default App;