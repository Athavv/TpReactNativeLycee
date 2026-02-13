import { Stack } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import LyceeItem from '../../components/LyceeItem';
import { LYCEES_DATA } from '../../constants/Data';

const creteilData = LYCEES_DATA.filter(l => l.academie === 'Créteil');

export default function CreteilList() {
    return (
        <>
            <Stack.Screen options={{ title: 'Lycées de Créteil' }} />
            <View style={styles.container}>
                <View style={styles.headerCard}>
                    <Text style={styles.headerTitle}>Total Établissements</Text>
                    <Text style={styles.headerCount}>{creteilData.length}</Text>
                </View>
                <FlatList
                    data={creteilData}
                    keyExtractor={(item) => item.code_uai}
                    renderItem={({ item }) => <LyceeItem lycee={item} />}
                    style={styles.list}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f6fa',
    },
    headerCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTitle: {
        fontSize: 16,
        color: '#7f8c8d',
        marginBottom: 5,
    },
    headerCount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4e54c8',
    },
    list: {
        flex: 1,
    },
});
