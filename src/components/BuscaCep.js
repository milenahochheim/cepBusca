import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

export default function BuscaCep({ navigation, ...props }) {
  const [searchCep, setSearchCep] = useState("");
  const [cepInfo, setCepInfo] = useState([]);

  const getCep = async () => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${searchCep}/json/`
    );
    setCepInfo(data);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>findhome 🏡</Text>
        <TouchableOpacity
          style={styles.btnLista}
          onPress={() => navigation.navigate("Lista")}
        >
          <Text style={styles.buttonText}>📋</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleInfo}>CEP</Text>
      <View style={styles.cepArea}>
        <TextInput
          value={searchCep}
          onChangeText={(text) => setSearchCep(text)}
          placeholder="Digite o CEP aqui"
          keyboardType="numeric"
          maxLength={8}
          style={styles.inputCep}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={getCep}>
          <Text style={styles.buttonText}>procurar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleInfo}>Logradouro</Text>
      <View style={styles.input}>
        <Text style={styles.inputText}>{cepInfo.logradouro}</Text>
      </View>
      <Text style={styles.titleInfo}>Bairro</Text>
      <View style={styles.input}>
        <Text style={styles.inputText}>{cepInfo.bairro}</Text>
      </View>
      <Text style={styles.titleInfo}>Cidade</Text>

      <View style={styles.input}>
        <Text style={styles.inputText}>{cepInfo.localidade}</Text>
      </View>
      <Text style={styles.titleInfo}>Estado</Text>

      <View style={styles.input}>
        <Text style={styles.inputText}>{cepInfo.uf}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={() => {
            if (searchCep === "") {
              Alert.alert("precisa digitar, por favor :)");
            } else {
              handleCep();
              navigation.navigate("Lista");
            }
          }}
        >
          <Text style={styles.buttonCadastrar}>cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 34,
    fontWeight: "700",
    color: "#623CAE",
    paddingLeft: 15,
    paddingTop: 10,
  },
  input: {
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
    width: "80%",
    fontSize: 16,
    color: "black",
    opacity: 0.8,
    backgroundColor: "white",
    borderColor: "#C7C7C7",
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
  },
  inputCep: {
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
    width: "59%",
    fontSize: 16,
    color: "black",
    opacity: 0.8,
    backgroundColor: "white",
    borderColor: "#C7C7C7",
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
  },
  button: {
    backgroundColor: "#623CAE",
    width: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: 10,
    height: 40,
    marginTop: 8,
  },
  cepArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },
  buttonCadastrar: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  inputText: {
    fontSize: 16,
    marginTop: 8,
  },

  btnLista: {
    backgroundColor: "#C7C7C7",
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    height: 50,
    marginTop: 18,
    marginRight: 70,
  },
  btnCadastrar: {
    backgroundColor: "#764ABC",
    width: 200,
    borderRadius: 100,
    justifyContent: "center",
    height: 40,
    marginTop: 18,
    marginLeft: 100,
  },
  titleInfo: {
    fontSize: 18,
    paddingTop: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#696969",
  },
  notesContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9,
  },
});

//os campos Logradouro, Cidade, Bairro e UF com o resultado;
