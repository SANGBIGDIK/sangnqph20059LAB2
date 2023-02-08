import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Styles/Style";

export default function Home(props) {
  const navigation = props.navigation;
  // const [data, setData] = useState({
  //   name: "Lục Anh Tài",
  //   phone: "0931360954",
  //   email: "tailaph26495@fpt.edu.vn",
  //   majors: "Lập trình mobile",
  //   birthday: "15/04/2003",
  // });

  const data = {
    name: "Ngô Quang Sang",
    phone: "0364050902",
    email: "sangnqph20059@fpt.edu.vn",
    majors: "Lập trình mobile",
    birthday: "Giải phóng miền Nam",
  };

  return (
    <View style={styles.container}>
     
      <Pressable
        android_ripple={{ color: "#CC99FF" }}
        style={styles.buttonNext}
        onPress={() => navigation.navigate("Profile", { data })}
      >
        <Text style={styles.textButton}>Thông tin cá nhân</Text>
      </Pressable>
    </View>
  );
}
