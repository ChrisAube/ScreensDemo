import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Options from "../screens/Options";
import Cancun1 from "../screens/Cancun1";
import Swimming from "../screens/Swimming";
import Stay from "../screens/Stay";
import Hitit from "../screens/Hitit";
import Befriend from "../screens/Befriend";
import Save from "../screens/Save";
import Drip from "../screens/Drip";
import Iwill from "../screens/Iwill";
import First from "../screens/First";
import Stab from "../screens/Stab";
import Meet from "../screens/Meet";
import Fists from "../screens/Fists";
import Throw from "../screens/Throw";
import King from "../screens/King";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Options} />
    <MainStack.Screen name="Cancun" component={Cancun1} />
    <MainStack.Screen name="Swimming" component={Swimming} />
    <MainStack.Screen name="Stay" component={Stay} />
    <MainStack.Screen name="Hit it" component={Hitit} />
    <MainStack.Screen name="Befriend" component={Befriend} />
    <MainStack.Screen name="Save" component={Save} />
    <MainStack.Screen name="Drip" component={Drip} />
    <MainStack.Screen name="Iwill" component={Iwill} />
    <MainStack.Screen name="First" component={First} />
    <MainStack.Screen name="Stab" component={Stab} />
    <MainStack.Screen name="Meet" component={Meet} />
    <MainStack.Screen name="Fists" component={Fists} />
    <MainStack.Screen name="Throw" component={Throw} />
    <MainStack.Screen name="King" component={King} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
