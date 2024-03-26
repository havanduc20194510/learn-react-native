import { Image, ImageBackground, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Image source={{uri:"https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg"}} 
      style={{ width: 300, height: 300 }} />
      <Text></Text>
     
    </View>
  );
}
