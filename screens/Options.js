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
          "You have a choice in which vacation you would like to go, where will
          it be?"
        </Text>
        <RowItem
          title="Pick One of the Stories"
          icon={<AntDesign name="Trophy" size={24} color="black" />}
          onPress={() => navigation.push("Options2")}
        />

        <RowSeparator />
        <RowItem
          title="Cancun"
          icon={
            <AntDesign
              name="barcode"
              size={24}
              color="black"
              onPress={() => navigation.push("Cancun")}
            />
          }
        />

        <RowSeparator />
        <RowItem
          title="The Moon"
          icon={<AntDesign name="camera" size={24} color="black" />}
          onPress={() => navigation.push("Options2")}
        />
      </View>
    </SafeAreaView>
  );
};
