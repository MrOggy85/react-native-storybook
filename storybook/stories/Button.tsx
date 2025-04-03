import { StyleSheet, View } from 'react-native';
import Button from '../../src/components/Button';

const Story = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Button A"
        onPress={() => console.log('Pressed!')}
      />
      <Button
        title="Button B"
        onPress={() => console.log('Pressed!')}
      />

      <Button title="Button Default" onPress={() => console.log('Pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
});

export default Story;
