import { Alert, Button, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid data!", "DOB incorrect")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid data!", "DOB incorrect", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          ])
        }
      />
    </View>
  );
}
