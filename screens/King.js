import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Linking,
  Text,
  Image,
} from "react-native";
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
  img: {
    width: 500,
    height: 400,
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
          Your ceremony is incredible, and you are now the leader of the NSO
          (New Shark Order). The world is yours to conquer. This story is over,
          but what's next for you?
        </Text>
        <Image
          style={styles.img}
          source={{
            uri: "https://i.pinimg.com/originals/a8/ff/a3/a8ffa3b96d81ab03c0b56cc724c93242.jpg",
          }}
        />
        <RowItem
          title="Kill all the humans"
          icon={<AntDesign name="Trophy" size={24} color="black" />}
          onPress={() => navigation.push("King")}
        />

        <RowSeparator />

        <RowItem
          title="Spare us please"
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
