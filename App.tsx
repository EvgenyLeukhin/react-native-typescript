import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    {/* bg-green-500 bg-[#1E1C2E] className="bg-blue-500" */}
    <Text style={{ color: 'white', fontSize: 35, fontWeight: 700 }}>Hello, React Native!+++</Text>

    {/* auto, dark, light */}
    <StatusBar style="auto" />
  </View>
);

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'deeppink',
  },
});

export default App;
