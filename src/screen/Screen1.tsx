import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps <any, any>{};

export const Screen1 = ({navigation}: Props) => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>- Bienvenido -</Text>
        
        <Image 
        style={styles.image}
        source={{uri:'https://mktinideas.com/wp-content/uploads/2020/06/Aplicaciones-Moviles.png'}}/>
        
        <Button 
        title='Acceder'
        onPress={()=>navigation.navigate('Pantalla2')}/>
    </View>
    )
}
