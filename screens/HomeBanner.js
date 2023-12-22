import { React, useState } from 'react';
import { ImageBackground, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomeBannerStyles from '../styles/HomeBannerStyles';

const HomeBanner = ({updateHomeSideMenu}) => {
  const navigation = useNavigation();
  const [showHomeSideMenu, setShowHomeSideMenu] = useState(false);

  return (
    <View style={HomeBannerStyles.background}>
      <View style={HomeBannerStyles.contents}>

        {/* Hamburger icon for side menu */}
        <TouchableOpacity
          style={[HomeBannerStyles.contents.hamburger_menu_icon]}
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
          style={[HomeBannerStyles.contents.play_forever_logo]}
          source={require('../assets/PlayForeverLogo_image_text_transparent.png')}
        />

        {/* Default member icon */}
        <TouchableOpacity
          style={[HomeBannerStyles.contents.account_button]}
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

export default HomeBanner;
