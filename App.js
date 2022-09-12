import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, {key: text}]);
    setText("")
  }

  const clear = () => {
    setData([])
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <StatusBar style="auto" />
      <TextInput 
        style={{ borderColor: "gray", borderWidth: 1, width: 200}}
        onChangeText={text => setText(text)}
        value={text}
      />
      <View style={{flex: 0.2, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Button onPress={add} title="Add" />
        <Text>       </Text>
        <Button onPress={clear} title="Clear" />
      </View>
      <Text>Shopping List</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
});
