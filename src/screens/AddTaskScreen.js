import { View, Text, Button } from 'react-native';
import { useState } from 'react';


export default function CrearTarea({ navigation }) {
    const [texto, setTexto] = useState('');
    const [lista, setLista] = useState([]);

    
    const agregarTarea = () => {
    if (tarea.trim()) {
      setListaTareas([...listaTareas, { id: Date.now().toString(), texto: tarea, completada: false }]);
      setTarea('');
    }
  };


  // Eliminar Tarea
  const eliminarTarea = (id) => {
    setListaTareas(listaTareas.filter((item) => item.id !== id));
  };


  // Marcar como completada
  const alternarCompletada = (id) => {
    setListaTareas(
      listaTareas.map((item) =>
        item.id === id ? { ...item, completada: !item.completada } : item
      )
    );
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