import { View, Text, Button } from 'react-native';
import { useState } from 'react';


export default function CrearTarea({ navigation }) {
    const [texto, setTexto] = useState('');
    const [lista, setLista] = useState([]);

    
    const agregar = () => {
        if (texto.trim()) {
            setLista([...lista, texto]);
            setTexto('');
        }
    };

    return (
        <View>
            <Text>Crear Tarea</Text>
            <Button
                title="Crear Tarea"
                onPress={agregar} 
            />
        </View>
    );


}