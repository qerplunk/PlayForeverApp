import { React } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SideMenu = () => {
  return(
    <View
      style={{opacity: 0.93, position: 'absolute', width: 300, height: 900, backgroundColor: 'black'}}
    >
      <TouchableOpacity
        style={{marginTop: 50, marginLeft: 20, backgroundColor: 'black', alignSelf: 'flex-start'}}
      >
        <Text style={{color: 'white', fontSize: 22, fontFamily: 'Futura-Medium', padding: 4}}>
          Archived
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 20, backgroundColor: 'black', alignSelf: 'flex-start'}}
      >
        <Text style={{color: 'white', fontSize: 22, fontFamily: 'Futura-Medium', padding: 4}}>
          App Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 20, backgroundColor: 'black', alignSelf: 'flex-start'}}
      >
        <Text style={{color: 'white', fontSize: 22, fontFamily: 'Futura-Medium', padding: 4}}>
          Feedback
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 20, backgroundColor: 'black', alignSelf: 'flex-start'}}
      >
        <Text style={{color: 'white', fontSize: 22, fontFamily: 'Futura-Medium', padding: 4}}>
          Help
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SideMenu;
