import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>TODO</Text>
      </View>
      <View style={styles.inputRow}>
        <TextInput
          placeholderTextColor={"#808080"}
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
        />
        <TouchableOpacity>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#262626",
    width: "100%",
    height: 300,
  },
  inputRow: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#262626",
    color: "#808080",
    marginRight: 5,
    borderRadius: 5,
    padding: 10,
    width: 300,
    borderColor: "#5E60CE",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#1E6F9F",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
    color: "#F2F2F2",
  },
});
