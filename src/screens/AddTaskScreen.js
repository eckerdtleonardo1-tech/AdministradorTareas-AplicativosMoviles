import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';



export default function CrearTarea() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

    
    const agregarTarea = () => {
    if (tarea.trim()) {
      setListaTareas([...listaTareas, { id: Date.now().toString(), texto: tarea, completada: false }]);
      setTarea('');
    }
  };


  const eliminarTarea = (id) => {
    setListaTareas(listaTareas.filter((item) => item.id !== id));
  };


  const alternarCompletada = (id) => {
    setListaTareas(
      listaTareas.map((item) =>
        item.id === id ? { ...item, completada: !item.completada } : item
      )
    );
  };

    return (
        <View>
            <Text >Lista de Tareas ✅</Text>


        <TextInput
            placeholder="Escribe una tarea..."
            value={tarea}
            onChangeText={setTarea}
      />
            <Button
                title="Guardar Tarea"
                onPress={agregarTarea} 
            />
            <FlatList
                data={listaTareas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => alternarCompletada(item.id)}
                onLongPress={() => eliminarTarea(item.id)}
            >
                <Text>{item.texto}</Text>
            </TouchableOpacity>
        )}
      />
        </View>
    );


}