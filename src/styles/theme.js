    import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    contenedor: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
    titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
    input: {
    borderWidth: 1,
    borderColor: '#0056b3', // Tu borde azul
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1, 
    marginRight: 10,  
    height: '100%',
  },
    tarea: {
    backgroundColor: '#fbfbfb', 
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 15, 
    justifyContent: 'center',
    height: '100%', 
  },
    tareaCompletada: {
    backgroundColor: '#249224',
    textDecorationLine: 'line-through',
  },
    textoTarea: {
    fontSize: 16,
  },
    textoTacho: {
    color: '#ffffff',
    fontSize: 20,   
    lineHeight: 20,
  },
    botonEliminar: {
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    width: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
  },
    rowContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 15,
    height: 50, 
    alignItems: 'stretch',
  },
    boton: {
    backgroundColor: '#249224',
    bordercolor: '#000000', 
    borderRadius: 5,
    paddingHorizontal: 15,
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
    botonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
    listaContainer: {
    flex: 1,
    width: '100%',
    marginTop: 15,
    }

});
