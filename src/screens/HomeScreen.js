import { View, Text, Button } from 'react-native';
import theme from '../styles/theme';
import {styles} from '../styles/theme'; 



export default function HomeScreen({ navigation }) {


    return (
        <View>
            <Text style={styles.titulo}>Bienvenido al Administrador de Tareas</Text>

            <Button style={styles.boton, { marginTop: 20 }, { width: '50%' }, { alignSelf: 'center' }}
                title="Tareas"
                onPress={() => navigation.navigate('NuevaTarea')}
            />


        </View>
    );
}