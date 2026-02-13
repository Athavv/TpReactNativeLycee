import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.headerTitle}>Aathavan App Mobile</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Tableau de bord</Text>
            <Text style={styles.sectionSubtitle}>Gestion des lycées d'Île-de-France</Text>
          </View>

          <View style={styles.gridContainer}>
            <DashboardAction
              title="Lycées Créteil"
              icon="list-outline"
              href="/lycee/creteil"
              color="#171c8f"
            />
            <DashboardAction
              title="Privés Paris"
              icon="business-outline"
              href="/lycee/prive-paris"
              color="#171c8f"
            />

            <DashboardAction
              title="Statistiques"
              icon="pie-chart-outline"
              href="/stats/typesLycee"
              color="#171c8f"
            />
            <DashboardAction
              title="Région Stats"
              icon="bar-chart-outline"
              href="/stats/academies"
              color="#171c8f"
            />
          </View>

          <Link href="/contact/versailles" asChild>
            <TouchableOpacity style={styles.fullWidthCard}>
              <View style={[styles.iconBox, { backgroundColor: '#171c8f' }]}>
                <Ionicons name="mail-outline" size={24} color="#fff" />
              </View>
              <View style={styles.cardTextContent}>
                <Text style={styles.cardTitle}>Contacts Versailles</Text>
                <Text style={styles.cardSubtitle}>Liste des responsables Académiques</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#ccc" />
            </TouchableOpacity>
          </Link>

        </ScrollView>
      </View>
    </>
  );
}

function DashboardAction({ title, icon, href, color }) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: color }]}>
          <Ionicons name={icon} size={28} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f6",
  },
  header: {
    backgroundColor: "#171c8f",
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#171c8f",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoBackground: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 4,
  },
  logo: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    width: "47%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    aspectRatio: 1,
  },
  fullWidthCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  cardTextContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34495e",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#95a5a6",
    marginTop: 2,
  },
});
