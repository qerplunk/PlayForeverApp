import { React } from 'react';
import { ImageBackground, Linking, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { COLORS } from './Colors';

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
      <Text style={styles.logoButton.text}>
        {name}
      </Text>
    </View>
  );
}

const ContactUs = ({ navigation }) => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: COLORS.navy_blue}}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.back.text}>
          Go Back
        </Text>
      </TouchableOpacity>

      <View style={{height: '100%', backgroundColor: 'lightgray'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 22, fontFamily: 'Futura-Medium'}}>
            Get in contact with us!
          </Text>
        </View>

        <LogoButton
          name='FaceBook'
          imageURL={require('./assets/facebook_logo.png')}
          webURL={'https://www.facebook.com/Playforever.ca/'}
        />
        <LogoButton
          name='Twitter'
          imageURL={require('./assets/twitter_logo.png')}
          webURL={'https://twitter.com/playforever_ca'}
        />
        <LogoButton
          name='Instagram'
          imageURL={require('./assets/instagram_logo.png')}
          webURL={'https://www.instagram.com/playforever.ca/'}
        />
        <LogoButton
          name='LinkedIn'
          imageURL={require('./assets/linkedin_logo.png')}
          webURL={'https://www.linkedin.com/company/play-forever/?originalSubdomain=ca'}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    text: {
      fontFamily: 'Futura-Medium',
      fontSize: 16,
    }
  },
  logoButton: {
    width: 50,
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    backgroundColor: 'black',
    alignSelf: 'flex-start',
    text: {
      color: 'black',
      top: 42,
      fontSize: 22,
      fontFamily: 'Futura-Medium',
      padding: 4
    }
  }
});

export default ContactUs;
