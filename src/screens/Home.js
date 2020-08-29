import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function Home() {
  const [counts, setCounts] = useState(0);

  const increment = () => {
    setCounts(counts + 1);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={styles.TextStyle}>{counts}</Text>
      <Text style={styles.TextStyle}>Counts</Text>
      <Button title="Add" onPress={increment}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  TextStyle: {
    color: '#000000',
    fontSize: 20,
  },
});
export default Home;
