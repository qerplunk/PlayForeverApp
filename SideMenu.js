import { React } from 'react';
import { ImageBackground, View, Linking, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextButton = ({text}) => {
  return (
      <TouchableOpacity
        style={styles.textButton.button}
      >
        <Text style={styles.textButton.text}>
          {text}
        </Text>
      </TouchableOpacity>
  );
}

const LogoButton = ({imageURL, webURL}) => {
  return (
      <TouchableOpacity
        style={styles.logoButton}
        onPress={() => Linking.openURL(webURL)}
      >
        <ImageBackground
          style={{...StyleSheet.absoluteFillObject}}
          source={imageURL}
        />
      </TouchableOpacity>
  );
}

const SideMenu = () => {
  return(
    <View
      style={{opacity: 0.93, position: 'absolute', width: 300, height: 900, backgroundColor: 'black'}}
    >
      <TextButton text={'App Settings'} />
      <TextButton text={'Feedback'} />
      <TextButton text={'Archived'} />
      <TextButton text={'Help'} />

      <View style={{padding: 30}} />

      <LogoButton
        imageURL={require('./assets/facebook_logo.png')}
        webURL={'https://www.facebook.com/Playforever.ca/'}
      />
      <LogoButton
        imageURL={require('./assets/twitter_logo.png')}
        webURL={'https://twitter.com/playforever_ca'}
      />
      <LogoButton
        imageURL={require('./assets/instagram_logo.png')}
        webURL={'https://www.instagram.com/playforever.ca/'}
      />
      <LogoButton
        imageURL={require('./assets/linkedin_logo.png')}
        webURL={'https://www.linkedin.com/company/play-forever/?originalSubdomain=ca'}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    button: {
      width: 150,
      marginTop: 20,
      marginLeft: 20,
    },
    text: {
      color: 'white',
      fontSize: 22,
      fontFamily: 'Futura-Medium',
      padding: 4
    }
  },
  logoButton: {
    width: 50,
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'black',
    alignSelf: 'flex-start',
  }
})


export default SideMenu;
