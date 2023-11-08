import { React } from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from './Colors';

const HomeBanner = () => {
  const navigation = useNavigation();

  return (
    <View style={banner.background}>
      <View style={banner.contents}>
        <Image
          style={banner.contents.play_forever_logo}
          source={require('./assets/PlayForeverLogo_image_text_transparent.png')}
        />

        <TouchableOpacity
          style={banner.contents.account_button}
          onPress={() => navigation.navigate('MemberPage')}
        >
        </TouchableOpacity>

      </View>
    </View>
  );
};

const banner = StyleSheet.create({
  background: {
    backgroundColor: COLORS.navy_blue,
    height: '2.3%',
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    play_forever_logo: {
      marginTop: '6%',
      marginLeft: '3%',
      width: 180,
      height: 60,
      resizeMode: 'contain',
    },
    account_button: {
      width: 50,
      height: 50,
      borderRadius: '5%',
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
      marginTop: '6%',
      marginRight: '2%',
    }
  },
});

export default HomeBanner;
