import { React, useState } from 'react';
import { ImageBackground, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../Colors';

const HomeBanner = ({updateHomeSideMenu}) => {
  const navigation = useNavigation();

  const [showHomeSideMenu, setShowHomeSideMenu] = useState(false);

  return (
    <View style={banner.background}>
      <View style={banner.contents}>

        {/* Hamburger icon for side menu */}
        <TouchableOpacity
          style={[banner.contents.hamburger_menu_icon]}
          onPress={() => {
            updateHomeSideMenu(!showHomeSideMenu)
            setShowHomeSideMenu(!showHomeSideMenu);
          }}
        >
          <ImageBackground
            source={require('../assets/hamburger_menu_icon.png')}
            style={{...StyleSheet.absoluteFillObject}}
          />
        </TouchableOpacity>

        {/* PlayForever Logo */}
        <Image
          style={[banner.contents.play_forever_logo]}
          source={require('../assets/PlayForeverLogo_image_text_transparent.png')}
        />

        {/* Default member icon */}
        <TouchableOpacity
          style={[banner.contents.account_button]}
          onPress={() => navigation.navigate('MemberPage')}
        >
          <ImageBackground
            source={require('../assets/member_default_icon.png')}
            style={{...StyleSheet.absoluteFillObject}}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const banner = StyleSheet.create({
  background: {
    backgroundColor: COLORS.navy_blue,
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    hamburger_menu_icon: {
      width: 50,
      height: 50,
      marginLeft: 5,
    },
    play_forever_logo: {
      marginTop: '2%',
      marginRight: '5%',
      width: 180,
      height: 60,
      resizeMode: 'contain',
    },
    account_button: {
      width: 34,
      height: 34,
      borderRadius: '5%',
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
      marginRight: '3%',
    }
  },
});

export default HomeBanner;
