import { Stack } from "expo-router";
import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LYCEES_DATA } from "../../constants/Data";

export default function VersaillesEmails() {
  const dataWithMail = LYCEES_DATA.filter(
    (l) => l.academie === "Versailles" && l.mail,
  );

  const handleMail = (email) => {
    Linking.openURL(`mailto:${email}`).catch((err) => console.error(err));
  };

  return (
    <>
      <Stack.Screen options={{ title: "Emails Versailles" }} />
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>Emails Disponibles</Text>
          <Text style={styles.headerCount}>{dataWithMail.length}</Text>
        </View>
        <FlatList
          data={dataWithMail}
          keyExtractor={(item) => item.code_uai}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleMail(item.mail)}
            >
              <Text style={styles.name}>{item.nom_etablissement}</Text>
              <Text style={styles.email}>{item.mail}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  headerCard: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 15,
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
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2c3e50",
  },
  email: {
    fontSize: 14,
    color: "#4e54c8",
    textDecorationLine: "underline",
  },
});
