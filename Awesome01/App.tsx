import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  Button, 
  Alert,

} from "react-native";

function App() {
  return (
    
      <SafeAreaView>
        <View>
          <Text>Hello WORLD !</Text>
          <Text>Hello WORLD !</Text>
          <Text>Hello WORLD !</Text>
          <Button 
          title="Click me"
          onPress={() => 
            Alert.alert("Button Clicked !")  
          }/> 
        </View>
      </SafeAreaView>
    
  );
}

export default App;