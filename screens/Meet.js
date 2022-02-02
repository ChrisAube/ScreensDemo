import React from "react";
import { View, StyleSheet, SafeAreaView, Linking, Text } from "react-native";
import { RowItem, RowSeparator } from "../components/RowItems";
import { AntDesign } from "@expo/vector-icons";
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#303030",
    paddingHorizontal: 20,
    margin: 20,
  },
  separator: {
    backgroundColor: "#101010",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
});

const openURL = (url) => {
  Linking.openURL(url).catch(alert("There was an error!"));
};

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          The King is surrounded by enemy Lobsters that have invaded. This was a
          setup. You must now face them all. Youre 2 remaining weapons are a
          knife and fists. How will you fight?
        </Text>
        <RowItem
          title="Fists"
          icon={<AntDesign name="Trophy" size={24} color="black" />}
          onPress={() => navigation.push("Fists")}
        />

        <RowSeparator />

        <RowItem
          title="Knife is the cowards way here ngl"
          icon={
            <AntDesign
              name="barcode"
              size={24}
              color="black"
              onPress={() => navigation.push("Options2")}
            />
          }
        />

        <RowSeparator />

        <RowItem
          title="Story 3"
          icon={<AntDesign name="camera" size={24} color="black" />}
          onPress={() => navigation.push("Options2")}
        />
      </View>
    </SafeAreaView>
  );
};
