import React, {useState} from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
 } from 'react-native';
 import {TextInputMask} from 'react-native-masked-text';

const App = () => {
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [calcImc, setCalcImc] = useState('');
  
 const calculadora = () => {
      const tempA = parseFloat(altura);
      const tempB = parseFloat(peso);
     const calculando = ( tempB / (tempA * tempA));
      switch(true){
        case (calculando <= 18.5) :
          setResultado('Peso baixo');
          setCalcImc(calculando.toFixed(2));
          setAltura('');
          setPeso('');
          break;
        case (calculando >= 18.5 && calculando < 24.9) :
          setResultado('Peso normal');
          setCalcImc(calculando.toFixed(2));
          setAltura('');
          setPeso('');
          break;
        case (calculando >= 25 && calculando < 30) :
            setResultado('Sobrepeso');
            setCalcImc(calculando.toFixed(2));
            setAltura('');
            setPeso('');
            break;
        case (calculando >= 30 && calculando < 35) :
            setResultado('Obesidade grau l');
            setCalcImc(calculando.toFixed(2));
            setAltura('');
            setPeso('');
            break;
        case (calculando >= 35 && calculando < 40) :
              setResultado('Obesidade grau ll');
              setCalcImc(calculando.toFixed(2));
              setAltura('');
              setPeso('');
              break;  
        case (calculando > 40) :
                setResultado('Obesidade grau lll ou Mórbida');
                setCalcImc(calculando.toFixed(2));
                setAltura('');
                setPeso('');
                break;  
        default: 
                alert('Preencha todos os campos!');
      }
    }
    return (
      <View style={{
      justifyContent: 'center',
       width:'100%', 
       height:'100%',
       alignItems: 'center',
       justifyContent:'center'
       }}>
      <Image 
       source={require('./assets/imagem.jpg')}
       style={{
        display: 'flex',
        with: '30%',
        height:'50%',
        
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
        textAlign:'center'}} value={altura}/>

      <TextInput
       value={peso}
      onChangeText={(value)=>setPeso(value)}
      placeholder='digite o peso' 
      keyboardType='numeric'
      style={{
        backgroundColor: '#DCDCDC',
        width: '80%',
        borderRadius: 10,
        marginVertical: 20,
        textAlign:'center'}}/>

      <TouchableOpacity  onPress={calculadora}>
          <Text  style={{width:100, fontWeight: 'bold',fontSize:25, color:'#20B2AA', textAlign:'center'}}>calcular</Text>
      </TouchableOpacity>
      <Text style={{color:'#696969',fontSize: 20,marginTop: 10,textAlign:'center'}}>{calcImc}</Text>
      
        <Text style={{
        backgroundColor:'black',
        color:'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
        textAlign:'center'}}>{resultado}</Text>
    </View>
  );
}

export default App;