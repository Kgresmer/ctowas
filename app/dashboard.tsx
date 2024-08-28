import {View, Text, StyleSheet} from "react-native";
import {ThemedLink} from "@/components/ThemedLink";
import {Colors} from "@/constants/Colors";


const Dashboard = () => {
    return (
        <View>
            <View className="flex-row justify-around">
                <View className="flex-1" style={[styles.card, styles.joinCard]}>
                    <ThemedLink href="/join-event" text="Join Event" style={{color: Colors.light.text}}/>
                </View>
                <View className="flex-1" style={[styles.card, styles.photoCard]}>
                    <ThemedLink href="/photos" text="Photos" style={{color: Colors.light.text}}/>
                </View>
            </View>
            <View className="flex-row justify-around">
                <View className="flex-1" style={[styles.card, styles.historyCard]}>
                    <ThemedLink href="/history" text="History" style={{color: Colors.light.text}}/>
                </View>
                <View className="flex-1" style={[styles.card, styles.createCard]}>
                    <ThemedLink href="/create-event" text="Create Event" style={{color: Colors.light.text}}/>
                </View>
            </View>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    card: {
        height: 180,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 15
    },
    photoCard: {
        backgroundColor: '#E7BB38',
    },
    historyCard: {
        backgroundColor: '#A0CE3B',
    },
    createCard: {
        backgroundColor: '#99C4FF',
    },
    joinCard: {
        backgroundColor: '#F2E085',
    }
});