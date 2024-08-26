import {Image, StyleSheet, View} from 'react-native';

import {GamesLogo} from '@/components/GamesLogo';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Dimensions} from 'react-native';
import {Link} from 'expo-router';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                    source={require('@/assets/images/banner-img-ctowas.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView className="flex-row">
                <ThemedText className="flex-2" type="title">Welcome to your backyard game scoreboard!</ThemedText>
                <GamesLogo/>
            </ThemedView>
            <View className="flex-1 justify-items-center bg-amber-600">
                <Link href="/dashboard" className="text-4xl">Dashboard</Link>
            </View>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 200,
        width: Dimensions.get('window').width,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
