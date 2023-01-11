import { View, Text, StyleSheet } from "react-native";

export function Tarefas({ tarefa }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tarefa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  text: {
    color: "#F2F2F2",
  },
});
