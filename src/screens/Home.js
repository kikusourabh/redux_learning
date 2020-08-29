import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, Text, Button} from 'react-native';
import {increment, decrement} from '../store/actions/CounterAction';

function Home() {
  const data = useSelector((state) => state.counts);
  const dispatch = useDispatch();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={styles.TextStyle}>{data}</Text>
      <Text style={styles.TextStyle}>Counts</Text>
      <Button title="Add" onPress={() => dispatch(increment())}></Button>
      <Button title="Sub" onPress={() => dispatch(decrement())}></Button>
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
