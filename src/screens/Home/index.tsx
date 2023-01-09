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
    <View>
      <Text style={{ color: "#fff" }}>todo</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
        />
        <TouchableOpacity>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#262626",
    color: "#808080",
    marginRight: 5,
    borderRadius: 5,
    height: 40,
    width: 300,
  },
  button: {
    backgroundColor: "#1E6F9F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
