import React from "react";
import { View, StyleSheet, SafeAreaView, Linking } from "react-native";
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

export default () => {
  return (
    <SafeAreaView>
      <View>
        <RowItem
          title="Example 1"
          icon={<AntDesign name="Trophy" size={24} color="black" />}
          onPress={() =>
            Linking.openURL(
              "https://github.com/ChrisAube/converter/tree/master/assets"
            )
          }
        />

        <RowSeparator />

        <RowItem
          title="Example 2"
          icon={
            <AntDesign
              name="barcode"
              size={24}
              color="black"
              onPress={() =>
                Linking.openURL(
                  "https://github.com/ChrisAube/ChrisAube.github.io/tree/main/responsive"
                )
              }
            />
          }
        />

        <RowSeparator />

        <RowItem
          title="Example 3"
          icon={<AntDesign name="camera" size={24} color="black" />}
          onPress={() =>
            Linking.openURL(
              "https://github.com/ChrisAube/converter/blob/master/App.js"
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};
