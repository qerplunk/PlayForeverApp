import { React } from 'react';
import { ImageBackground, Linking, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import BackButton from '../components/BackButton';
import { COLORS } from '../Colors';

const LogoButton = ({name, imageURL, webURL}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.logoButton}
        onPress={() => Linking.openURL(webURL)}
      >
        <ImageBackground
          style={{...StyleSheet.absoluteFillObject}}
          source={imageURL}
        />
      </TouchableOpacity>
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
  );
}

const ContactUs = ({navigation}) => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: COLORS.navy_blue}}>

      <BackButton
        navigation={navigation}
        destination={'Home'}
      />

      <View style={{height: '100%', backgroundColor: COLORS.background}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 22, fontFamily: 'Futura-Medium', marginTop: 10}}>
            Get in contact with us!
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <LogoButton
            name='FaceBook'
            imageURL={require('../assets/facebook_logo.png')}
            webURL={'https://www.facebook.com/Playforever.ca/'}
          />
          <LogoButton
            name='Twitter'
            imageURL={require('../assets/twitter_logo.png')}
            webURL={'https://twitter.com/playforever_ca'}
          />
          <LogoButton
            name='Instagram'
            imageURL={require('../assets/instagram_logo.png')}
            webURL={'https://www.instagram.com/playforever.ca/'}
          />
          <LogoButton
            name='LinkedIn'
            imageURL={require('../assets/linkedin_logo.png')}
            webURL={'https://www.linkedin.com/company/play-forever/?originalSubdomain=ca'}
          />
          <LogoButton
            name='Email'
            imageURL={require('../assets/email_logo.png')}
            webURL={'mailto:info@playforever.com'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoButton: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  text: {
    height: 30,
    color: 'black',
    top: 27,
    fontSize: 22,
    fontFamily: 'Futura-Medium',
    paddingLeft: 4,
  }
});

export default ContactUs;
