import React, { useState, useCallback } from 'react'; 
import { View, Text, Button, FlatList } from 'react-native'; 
import theme from '../styles/theme'; 
import { styles } from '../styles/theme'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; 

export default function HomeScreen({ navigation }) { 
    const [tareas, setTareas] = useState([]);

    const cargarTareas = async () => {
        try {
            const tareasGuardadas = await AsyncStorage.getItem("listaTareas");
            if (tareasGuardadas) {
                setTareas(JSON.parse(tareasGuardadas));
            }
        } catch (error) {
            console.log("Error cargando tareas en Home:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            cargarTareas();
        }, [])
    );

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Bienvenido al Administrador de Tareas</Text>

            <View style={{ marginTop: 20, width: '50%', alignSelf: 'center' }}>
                <Button 
                    title="Nueva Tarea" 
                    onPress={() => navigation.navigate('NuevaTarea')} 
                />
            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 10 }}>
                Tus tareas pendientes:
            </Text>

            <FlatList
                data={tareas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 15, backgroundColor: '#f9f9f9', borderBottomWidth: 1, borderColor: '#eee', marginBottom: 10 }}>
                        <Text style={{ fontSize: 16 }}>
                            {item.completada ? "✅" : "⏳"} {item.titulo}
                        </Text>
                        <Text style={{ color: '#666' }}>{item.descripcion}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20, color: '#888' }}>No tienes tareas agregadas aún.</Text>}
            />

        </View>
    );
}