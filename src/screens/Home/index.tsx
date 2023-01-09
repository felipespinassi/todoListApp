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
          placeholderTextColor={"#808080"}
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
    height: 60,
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
