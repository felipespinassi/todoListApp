import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Tarefas({ item, onRemoveTask }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      <TouchableOpacity onPress={() => onRemoveTask()}>
        <Image source={require("../../../assets/Layer2.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#333333",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  text: {
    color: "#F2F2F2",
  },
});
