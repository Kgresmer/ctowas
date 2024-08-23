import { Image, StyleSheet } from 'react-native';

import { GamesLogo } from '@/components/GamesLogo';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Dimensions} from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner-img-ctowas.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to your backyard game scoreboard!</ThemedText>
        <GamesLogo />
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  reactLogo: {
    height: 200,
    width: Dimensions.get('window').width,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
