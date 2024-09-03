import {View, SafeAreaView, Button, StyleSheet} from "react-native";
import {ThemedLink} from "@/components/ThemedLink";
import {Colors} from "@/constants/Colors";
import {Amplify} from "aws-amplify";
import {Authenticator, useAuthenticator} from "@aws-amplify/ui-react-native";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

const SignOutButton = () => {
    const {signOut} = useAuthenticator();

    return (
        <View style={styles.signOutButton}>
            <Button title="Sign Out" onPress={signOut}/>
        </View>
    );
};

const Dashboard = () => {
    return (
        <Authenticator.Provider>
            <Authenticator>
                <SafeAreaView>
                    <SignOutButton />
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
                </SafeAreaView>
            </Authenticator>
        </Authenticator.Provider>
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
    },
    signOutButton: {
        alignSelf: "flex-end",
    },
});