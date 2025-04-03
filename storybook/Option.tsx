import { Pressable, StyleSheet, Text } from 'react-native';
import { memo, useState } from 'react';
import isEqual from '../src/utils/isEqual';

type Props = {
  title: string;
  onFocused?: (title: string) => void;
  onPress?: () => void;
  size?: number;
};

const OptionRaw = ({ title, onFocused, onPress, size }: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      style={{
        padding: 20,
        backgroundColor: focused ? '#FFFFFF' : 'transparent',
        borderRadius: 10,
        width: size,
        height: size,
        justifyContent: size ? 'center' : undefined,
        alignItems: size ? 'center' : undefined,
      }}
      onFocus={() => {
        setFocused(true);
        onFocused && onFocused(title);
      }}
      onBlur={() => setFocused(false)}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <Text style={[styles.optionText, focused && { color: '#5967FF' }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const dataUnchanged = (prevProps: Props, nextProps: Props) => {
  return isEqual(prevProps, nextProps);
};

const OptionMemo = memo(OptionRaw, dataUnchanged);

const styles = StyleSheet.create({
  optionText: {
    fontSize: 20,
    color: '#EEFFFF',
  },
});

export default OptionMemo;
