import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InPutComponent';

export const Screen2 = () => {

  const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const dividir = () => {
      const num1 = Number(numero1);
      const num2 = Number(numero2);

      const respuesta = 
      num1 === 0 && num2 === 0 ? 'INDETERMINACÍON':
      num2 === 0 ? 'NO EXISTE DIVISIÓN PARA CERO':
      (num1/num2).toString();

      setResultado(respuesta);
    };

  return (
    <View style={styles.container2}>
      <Text style={styles.text}>Campo número 1</Text>
      <InputComponent
      placeholder='Ingrese el número'
      value={numero1}
      onChangeText={setNumero1}
      />

      <Text style={styles.text}>Campo número 2</Text>
      <InputComponent
      placeholder='Ingrese el número'
      value={numero2}
      onChangeText={setNumero2}
      
      />
      
      <Text style={styles.textAnswer}> Respuesta: </Text>
      <Text style={styles.answer}>{resultado} </Text>

      <TouchableOpacity
      style={styles.button}
      onPress={dividir}
      >
        <Text style={styles.div}>Dividir</Text>
      </TouchableOpacity>
    </View>
  )
}

