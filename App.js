import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press me"
        onPress={() => alert("Button pressed!")}
        color="midnightblue"
        disabled
      />
    </View>
  );
}
