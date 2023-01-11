import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Tarefas } from "../../components/Tarefas";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  function onTaskAdd() {
    setTarefas((prevstate) => [...prevstate, tarefa]);
    setTarefa("");
  }

  function onRemoveTask(tarefa: string) {
    setTarefas(() => tarefas.filter((task) => task !== tarefa));
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          onChangeText={setTarefa}
          placeholderTextColor={"#808080"}
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={tarefa}
        />
        <TouchableOpacity onPress={() => onTaskAdd()}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={styles.viewCriadas}>
            <Text style={styles.textCriadas}>Criadas</Text>
            <Text style={styles.numberCriadas}>{tarefas.length}</Text>
          </View>
          <View style={styles.viewConcluidas}>
            <Text style={styles.textConcluidas}>Concluídas</Text>
            <Text style={styles.numberConcluidas}>0</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#808080",
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingTop: 20,
          }}
        />

        <FlatList
          ListEmptyComponent={() => (
            <View style={styles.taskManager}>
              <Image
                style={{ marginTop: 40, marginBottom: 30 }}
                source={require("../../../assets/Clipboard.png")}
              />
              <Text style={styles.taskManagerTexts}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.taskManagerTexts}>
                Crie tarefas e organize seus itens a fazer{" "}
              </Text>
            </View>
          )}
          data={tarefas}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tarefas
              onRemoveTask={() => onRemoveTask(item)}
              key={item}
              item={item}
            />
          )}
        />
      </View>
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
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },

  inputRow: {
    flexDirection: "row",
    position: "absolute",
    top: 220,
    zIndex: 2,
  },
  input: {
    backgroundColor: "#333333",
    color: "#F2F2F2",
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
  content: {
    backgroundColor: "#262626",
    height: "100%",
    width: "100%",
    zIndex: 0,
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  viewCriadas: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCriadas: {
    color: "#4EA8DE",
    paddingRight: 10,
    fontSize: 18,
  },
  numberCriadas: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    padding: 5,
    borderRadius: 10,
  },
  viewConcluidas: {
    flexDirection: "row",
    alignItems: "center",
  },
  textConcluidas: {
    color: "#8284FA",
    paddingRight: 10,
    fontSize: 18,
  },
  numberConcluidas: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    padding: 5,
    borderRadius: 10,
  },
  taskManager: {
    justifyContent: "center",
    alignItems: "center",
  },
  taskManagerTexts: {
    color: "#808080",
  },
});
