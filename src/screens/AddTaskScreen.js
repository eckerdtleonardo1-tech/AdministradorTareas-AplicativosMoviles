import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import {styles} from '../styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CrearTarea() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [listaTareas, setListaTareas] = useState([]);
  const [idEnEdicion, setIdEnEdicion] = useState(null);

 const agregarTarea = () => {
  if (titulo.trim()) {
    if (idEnEdicion !== null) {
      const listaActualizada = listaTareas.map((tareaIterada) => {
        if (tareaIterada.id === idEnEdicion) {
          return { ...tareaIterada, titulo: titulo, descripcion: descripcion };
        }
        return tareaIterada;
      });
      
      setListaTareas(listaActualizada);
      setIdEnEdicion(null); 
    } else {
      setListaTareas([
        ...listaTareas, 
        { id: Date.now().toString(), titulo: titulo, descripcion: descripcion, completado: false }
      ]);
    }
    setTitulo('');
    setDescripcion('');
  }
};

 const activarEdicion = (tareaSeleccionada) => {
  console.log("¡Botón presionado! Datos de la tarea:", tareaSeleccionada);
  setTitulo(tareaSeleccionada.titulo);
  setDescripcion(tareaSeleccionada.descripcion);
  setIdEnEdicion(tareaSeleccionada.id);
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

   const guardarEnAsyncStorage = async () => {
    console.log("Guardando en AsyncStorage:", listaTareas);
     await AsyncStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  };

    const cargarDesdeAsyncStorage = async () => {
        const tareasGuardadas = await AsyncStorage.getItem("listaTareas");
        console.log("Cargando desde AsyncStorage:", tareasGuardadas);
        if (tareasGuardadas) {
            setListaTareas(JSON.parse(tareasGuardadas));
        }
    }

    const limpiarAsyncStorage = async () => {
        await AsyncStorage.clear();
        setListaTareas([]);
    };

    useEffect(() => {
        cargarDesdeAsyncStorage();
    }, []);

    useEffect(() => {
        guardarEnAsyncStorage();
    }, [listaTareas]);


    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Lista de Tareas ✅</Text>

        <View style={styles.rowContainer}>
        <TextInput style={styles.input}
            placeholder="Escribe un titulo..."
            value={titulo}
            onChangeText={setTitulo}
      />
      <TextInput style={styles.input}
            placeholder="Escribe una descripción..."
            value={descripcion}
            onChangeText={setDescripcion}
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
              <Text style={styles.textoTarea}>{item.titulo} {item.descripcion}</Text>
            </TouchableOpacity>

           <TouchableOpacity onPress={() => activarEdicion(item)} style={styles.botonEditar}>
            <Text style={styles.textoTacho}>✏️</Text> 
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