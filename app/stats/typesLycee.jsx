import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { LYCEES_DATA } from '../../constants/Data';

export default function TypesCount() {
    const counts = {
        'LP PR': 0,
        'LPO': 0,
        'LGT': 0
    };

    LYCEES_DATA.forEach(lycee => {
        const type = lycee.sigle_uai;
        if (counts.hasOwnProperty(type)) {
            counts[type]++;
        }
    });

    return (
        <>
            <Stack.Screen options={{ title: 'Statistiques par Type' }} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.label}>Lycées Professionnels Privés (LP PR)</Text>
                    <Text style={styles.value}>{counts['LP PR']}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Lycées Polyvalents (LPO)</Text>
                    <Text style={styles.value}>{counts['LPO']}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Lycées Généraux et Techno (LGT)</Text>
                    <Text style={styles.value}>{counts['LGT']}</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    card: {
        padding: 20,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});
