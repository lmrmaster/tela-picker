import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    { key: 0, nome: 'golf 1.6', valor: '62.000' },
    { key: 1, nome: 'savero 1.0', valor: '29.300' },
    { key: 2, nome: 'gol 1.0', valor: '25.200' },
    { key: 3, nome: 'bmw 120i', valor: '225.200' },
    { key: 4, nome: 'uno com escada em cima', valor: '30.000' }
  ]);

  // Map through the cars and create Picker items
  let carrosItem = carros.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />;
  });

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={carroSelecionado}
        onValueChange={(itemValue) => setCarroSelecionado(itemValue)}
      >
        {carrosItem}
      </Picker>

      <Text style={styles.carros}>carro: {carros[carroSelecionado].nome}</Text>
      {/* Convert valor to number before using toFixed */}
      <Text style={styles.carros}>r$ {parseFloat(carros[carroSelecionado].valor).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  carros: {
    marginTop: 15,
    fontSize: 25,
  },
});
