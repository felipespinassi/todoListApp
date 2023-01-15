import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function Tarefas({ item, onRemoveTask, onFinishTask, setTeste }: any) {
  return (
    <View style={styles.container}>
      <View>
        <BouncyCheckbox
          onPress={() => {
            onFinishTask();
          }}
          text={item}
          fillColor="#5E60CE"
        />
      </View>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => onRemoveTask()}>
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
    alignItems: "center",
  },
  text: {
    color: "#F2F2F2",
    width: "80%",
  },
});
