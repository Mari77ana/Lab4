import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const Article = () => {
  return (
    <ScrollView>
      <View style={{ height: 600, width: 350, left: 18, top: 50 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            backgroundColor: "oldlace",
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            First Article{"\n"}
          </Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, ooked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum. have the intution
        </Text>
      </View>

      <View style={{ height: 600, width: 350, left: 18, marginTop: -140 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            backgroundColor: "oldlace",
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Another Article{"\n"}
          </Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, ooked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, very popular during the Renaissance popular during the
        </Text>
      </View>

      <View style={{ height: 600, width: 350, left: 18, marginTop: -170 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            backgroundColor: "oldlace",
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Importent one{"\n"}
          </Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, ooked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum,
        </Text>
      </View>
    </ScrollView>
  );
};

export default function Article1() {
  return <Article style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
