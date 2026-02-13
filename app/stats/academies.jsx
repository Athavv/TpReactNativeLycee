import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { LYCEES_DATA } from '../../constants/Data';

export default function AcademiesStats() {
    const counts = {
        'Créteil': 0,
        'Versailles': 0,
        'Paris': 0
    };

    LYCEES_DATA.forEach(l => {
        if (counts.hasOwnProperty(l.academie)) {
            counts[l.academie]++;
        }
    });

    const total = counts['Créteil'] + counts['Versailles'] + counts['Paris'];

    return (
        <>
            <Stack.Screen options={{ title: 'Lycées Région Parisienne' }} />
            <View style={styles.container}>
                <Text style={styles.title}>Statistiques par Académie</Text>

                <View style={styles.statsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Créteil:</Text>
                        <Text style={styles.value}>{counts['Créteil']}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Versailles:</Text>
                        <Text style={styles.value}>{counts['Versailles']}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Paris:</Text>
                        <Text style={styles.value}>{counts['Paris']}</Text>
                    </View>

                    <View style={[styles.row, styles.totalRow]}>
                        <Text style={styles.totalLabel}>Total Région Parisienne:</Text>
                        <Text style={styles.totalValue}>{total}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    statsContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    totalRow: {
        borderBottomWidth: 0,
        marginTop: 10,
        paddingTop: 10,
    },
    label: {
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});
