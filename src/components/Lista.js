import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export default function Lista({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>Lista de Endereços</Text>
      </View>
      <TouchableOpacity
        style={styles.btnLista}
        onPress={() => navigation.navigate("BuscaCep")}
      >
        <Text style={styles.buttonText}>buscar cep</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnLista: {
    backgroundColor: "#764ABC",
    width: 100,
    justifyContent: "center",
    marginLeft: 20,
    height: 40,
    marginTop: 18,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },
  header: {
    fontSize: 34,
    fontWeight: "700",
    color: "#623CAE",
    marginTop: 18,
    textAlign: "center"
  },
});
