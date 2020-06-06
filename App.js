import React, {Component} from 'react';
import {View, Text, Button, Image, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import People from './src/People';
import HomeScreen from './src/HomeScreen';

const Stack = createStackNavigator();
// hello world
//again change
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      // date:"",
      num: '',
    };
  }
  getImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.setState({img: image.path});
      console.log(image);
    });
  };

  render() {
    return (
      //     <View>
      //       <Text> App </Text>
      //       <Image
      //       style={{height:(100),width:(200)}}
      //       source={{uri:this.state.img}}
      //       />
      //       <Button
      //       title="getImage"
      //       onPress={()=>this.getImage()}
      //       />
      //     <TextInput
      //     style={{height:50,width:200,backgroundColor:"red"}}
      //     onChangeText={(val)=>this.setState({num:val})}
      //     />
      // <Text> {this.state.num}</Text>

      //     </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="People" component={People} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
