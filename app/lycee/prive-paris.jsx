import { Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import LyceeItem from "../../components/LyceeItem";
import { LYCEES_DATA } from "../../constants/Data";

const REGION_PARISIENNE = ["Créteil", "Versailles", "Paris"];
const filteredData = LYCEES_DATA.filter(
  (l) =>
    l.statut.toLowerCase().includes("privé") &&
    REGION_PARISIENNE.includes(l.academie),
);

export default function PriveParisList() {
  return (
    <>
      <Stack.Screen options={{ title: "Lycées Privés (Paris)" }} />
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>Total Établissements Privés</Text>
          <Text style={styles.headerCount}>{filteredData.length}</Text>
        </View>
        <FlatList
          data={filteredData}
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
    backgroundColor: "#f5f6fa",
  },
  headerCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 5,
  },
  headerCount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#171c8f",
  },
  list: {
    flex: 1,
  },
});
