import { View, Text } from 'react-native';

type Props = {
  style?: never;
  title: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  textClassName?: string;
};

const Badge = ({
  size = 'md',
  textClassName = 'text-white',
  style,
  title,
}: Props) => {
  const sizeClasses =
    size === 'sm' ? 'px-2 py-1' : size === 'md' ? 'px-3 py-1' : 'px-2 py-1.5';

  const textSizeClass =
    size === 'sm' ? 'text-xs' : size === 'md' ? 'text-base' : 'text-xl';

  return (
    <View style={style} className={`rounded-full ${sizeClasses}`}>
      <Text className={`${textSizeClass} ${textClassName}`}>{title}</Text>
    </View>
  );
};

export default Badge;
