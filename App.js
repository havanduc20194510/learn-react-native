import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
      <Image
        source={{
          uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg",
        }}
        style={{ width: 300, height: 300 }}
      />
      <Text>
        Du lịch Việt Nam được Nhà nước Việt Nam xem là một ngành kinh tế mũi
        nhọn vì cho rằng đất nước Việt Nam có tiềm năng du lịch đa dạng và phong
        phú. Năm 2019, ngành Du lịch Việt Nam lập kỳ tích lần đầu tiên đón 18
        triệu lượt khách quốc tế, tăng 16,2% so với năm 2018. Giai đoạn từ
        2015-2019, lượng khách quốc tế đến Việt Nam đã tăng 2,3 lần từ 7,9 triệu
        lượt lên 18 triệu lượt, tốc độ tăng trưởng bình quân đạt 22,7% mỗi năm.
        Việt Nam liên tục nằm trong nhóm những quốc gia có tốc độ tăng trưởng
        khách du lịch nhanh nhất thế giới. Năm 2019, du lịch Việt Nam nhận giải
        thưởng Điểm đến di sản hàng đầu thế giới do World Travel Awards trao
        tặng, Điểm đến Golf tốt nhất thế giới do World Golf Awards trao tặng.
        Cùng với đó, World Travel Awards cũng vinh danh Việt Nam là Điểm đến
        hàng đầu châu Á 2 năm liên tiếp 2018-2019, Điểm đến văn hóa hàng đầu
        châu Á 2019, Điểm đến ẩm thực hàng đầu châu Á 2019.[2]
      </Text>
      </ScrollView>
    </View>
  );
}
