import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screen/Screen1';
import { Screen2 } from '../screen/Screen2';

const Stack = createStackNavigator();

export const StackNavigator =() => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Pantalla1" options={{title:'Menú'}} component={Screen1} />
        <Stack.Screen name="Pantalla2" options={{title:'Formulario'}} component={Screen2} />
    </Stack.Navigator>
    );
}