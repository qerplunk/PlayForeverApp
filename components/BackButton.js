import { React } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import BackButtonStyles from '../styles/BackButtonStyles';

const BackButton = ({navigation, destination, text}) => {
  return (
    <TouchableOpacity
      style={BackButtonStyles.container}
      onPress={() => navigation.navigate(destination)}
    >
      <Text style={BackButtonStyles.text}>
        {text != undefined ? text : 'Back'}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
