import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import {styles} from '../styles/theme';


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
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Lista de Tareas ✅</Text>

        <View style={styles.rowContainer}>
        <TextInput style={styles.input}
            placeholder="Escribe una tarea..."
            value={tarea}
            onChangeText={setTarea}
      />
            <TouchableOpacity  style={styles.boton}
                onPress={agregarTarea} color="#688f5d" 
            >
                <Text style={styles.botonText}>Guardar Tarea</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
        <FlatList
        data={listaTareas}
        keyExtractor={(item) => item.id.toString()}
        style={{ height: 500, width: '100%' }}
       
        renderItem={({ item }) => (
    
    <View style={styles.rowContainer}>
            
            <TouchableOpacity
              style={[styles.tarea, item.completada && styles.tareaCompletada]}
              onPress={() => alternarCompletada(item.id)}
            >
              <Text style={styles.textoTarea}>{item.texto}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => eliminarTarea(item.id)} 
              style={styles.botonEliminar}
            >
              <Text style={styles.textoTacho}>🗑️</Text>
            </TouchableOpacity>

          </View>
          
        )} 
      />
        </View>
        </View>
    );


}