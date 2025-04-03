import { AppRegistry, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { App } from './src/App';
import { name as appName } from './app.json';

if (process.env.STORYBOOK) {
  let VeryExpensive = null;

  const StorybookWrapper = () => {
    const [needsExpensive, setNeedsExpensive] = useState(false);
    useEffect(() => {
      if (VeryExpensive == null) {
        VeryExpensive = require('./storybook/Storybook').default;
      }

      setNeedsExpensive(true);
    }, []);

    return (
      <View style={{ backgroundColor: 'orange', flex: 1 }}>
        <Text style={{ fontSize: 50, color: 'green' }}>Storybook</Text>
        {needsExpensive ? <VeryExpensive /> : null}
      </View>
    );
  };

  AppRegistry.registerComponent(appName, () => StorybookWrapper);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
