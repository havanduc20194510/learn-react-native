import { ActivityIndicator, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="small" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
    </View>
  );
}
