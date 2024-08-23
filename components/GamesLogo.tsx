import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';

export function GamesLogo() {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>{String.fromCodePoint(0x1F9E9)}</ThemedText>
      <ThemedText style={styles.text2}>{String.fromCodePoint(0x1F3B2)}</ThemedText>
      <ThemedText style={styles.text3}>{String.fromCodePoint(0x1F52B)}</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    lineHeight: 42,
    marginTop: -6,
  },
  text2: {
    fontSize: 36,
    lineHeight: 42,
    marginTop: -12,
    marginLeft: 40
  },
  text3: {
    fontSize: 36,
    lineHeight: 42,
    marginTop: 0,
  },
});
