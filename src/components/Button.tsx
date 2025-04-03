import { Pressable, Text } from 'react-native';
import type { PropsWithChildren } from 'react';
import { memo, useEffect, useState } from 'react';
import isEqual from '../../utils/isEqual';

type Props = {
  title: string;
  onPress: () => void;
  onCancel?: () => void;
  onFocus?: () => void;
  hasInitialFocus: boolean;
} & PropsWithChildren;

const Button = (
  {
    onPress,
    onFocus,
    title,
    style,
    hasInitialFocus,
  }: Props) => {
  const [focused, setFocused] = useState(hasInitialFocus);

  useEffect(() => {
    if (hasInitialFocus) {
      setFocused(true);
    }
  }, [hasInitialFocus]);

  return (
    <Pressable
      className={`h-18 flex-row justify-center items-center rounded-xl border-2 border-white  pl-4 pr-6 outline-none`}
      style={style}
      onPress={onPress}
      onFocus={() => {
        setFocused(true);
        onFocus && onFocus();
      }}
      onBlur={() => setFocused(false)}
    >
      <Text
        className={`text-white ${focused ? focusedTextClassName : ''}`}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const dataUnchanged = (prevProps: Props, nextProps: Props) => {
  return isEqual(prevProps, nextProps);
};

const ButtonMemo = memo(Button, dataUnchanged);

export default ButtonMemo;
