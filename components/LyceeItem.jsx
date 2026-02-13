import { StyleSheet, Text, View } from "react-native";

export default function LyceeItem({ lycee }) {
  const isPrivate = lycee.statut.toLowerCase().includes("privé");

  return (
    <View style={styles.card}>
      <Text style={[styles.status, isPrivate ? styles.private : styles.public]}>
        {lycee.statut.toUpperCase()}
      </Text>

      <Text style={styles.name}>{lycee.nom_etablissement}</Text>
      <Text style={styles.type}>
        {lycee.nature_uai} - {lycee.academie}
      </Text>

      <View style={styles.details}>
        <Text style={styles.text}>
          {lycee.adresse_postale}, {lycee.code_postal} {lycee.libelle}
        </Text>
        {lycee.telephone && (
          <Text style={styles.text}>Tél: {lycee.telephone}</Text>
        )}
        {lycee.mail && <Text style={styles.text}>Email: {lycee.mail}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "flex-start",
    padding: 3,
    borderRadius: 3,
    color: "white",
    backgroundColor: "#ccc",
  },
  public: {
    backgroundColor: "#4caf50",
  },
  private: {
    backgroundColor: "#ff9800",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  type: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  details: {
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    color: "#444",
  },
});
