import { StyleSheet, View, Text } from 'react-native';
import Badge from '../../src/components/Badge';

const Story = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Small Badge</Text>
      <Badge
        title="無料"
        size="sm"
        textClassName="text-white"
        className="border border-[rgba(255,255,255,0.5)] px-2.5 py-0"
      />
      <Text style={styles.txt}>Medium Badge</Text>
      <Badge
        title="無料"
        size="md"
        textClassName="text-white"
        className="border border-[rgba(255,255,255,0.5)] px-2.5 py-0"
      />
      <Text style={styles.txt}>Large Badge</Text>
      <Badge
        title="無料"
        size="lg"
        textClassName="text-white"
        className="border border-[rgba(255,255,255,0.5)] px-2.5 py-0"
      />
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
  txt: {
    color: '#EEE',
    fontSize: 20,
    marginTop: 8,
    marginBottom: 1,
  },
});

export default Story;
