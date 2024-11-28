import { alignCenter, flex1, justifyCenter, textXl }
from "@/style";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={[flex1, justifyCenter, alignCenter]}>
      <Text style={[textXl]}>React Native Configurado!!!</Text>
    </View>
  );
}


