import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState, createElement } from 'react';
import { stories } from './generatedStories';
import Option from './Option';

const Storybook = () => {
  const [selectedStory, setSelectedStory] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.leftMenu}>
        <Text style={styles.leftMenuTitle}>Stories</Text>
        <ScrollView>
          {Object.keys(stories).map((story) => (
            <Option
              key={story}
              title={story}
              onPress={() => {
                setSelectedStory(story);
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.mainMenu}>
        <Text style={styles.mainMenuTitle}>Story: {selectedStory}</Text>
        <View style={styles.storyContainer}>
          {selectedStory && createElement((stories as any)[selectedStory])}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'coral',
  },
  leftMenu: {
    display: 'flex',
    width: 300,
    backgroundColor: 'black',
  },
  leftMenuTitle: {
    fontSize: 30,
    color: 'yellow',
  },
  mainMenu: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#EEE',
  },
  mainMenuTitle: {
    fontSize: 30,
    color: '#111',
  },
  storyContainer: {
    width: 1920 - 300,
    height: 1080 - 100,
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default Storybook;
