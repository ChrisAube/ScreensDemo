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
          The enemy Seals approach, their numbers are many. Us few sharks must
          band together. You must choose your spot in their formation of attack.
        </Text>
        <RowItem
          title="First in the charge"
          icon={<AntDesign name="Trophy" size={24} color="black" />}
          onPress={() => navigation.push("First")}
        />

        <RowSeparator />

        <RowItem
          title="Be a loser and stay back in the backlines"
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