import { React, useState } from 'react';
import { FlatList, Image, ImageBackground, Dimensions, ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomeBanner from './HomeBanner'
import HomeSideMenu from './HomeSideMenu'
import { COLORS } from '../Colors'

const {width} = Dimensions.get('window');
const frameWidth = width;
const buttonWidth = frameWidth / 3;

const GetButtons = () => {
  const navigation = useNavigation();

  const getImageSource = (buttonName) => {
    switch (buttonName) {
      case 'Upcoming Events':
        return require('../assets/upcoming_events_button.png');
      case 'Annual Report':
        return require('../assets/annual_report_button.png');
      case 'Our Impact':
        return require('../assets/our_impact_button.png');
      case 'For Kids':
        return require('../assets/for_kids_button.png');
      case 'About Us':
        return require('../assets/about_us_button.png');
      case 'Volunteering':
        return require('../assets/volunteering_button.png');
      case 'Programs':
        return require('../assets/programs_button.png');
      case 'Donate':
        return require('../assets/donate_button.png');
      case 'Contact Us':
        return require('../assets/contact_us_button.png');
      default:
        return require('../assets/icon.png');
    }
  };

  const buttonsMap = new Map();
  buttonsMap.set('Programs', 'Programs');
  buttonsMap.set('Upcoming Events', 'NONE');
  buttonsMap.set('For Kids', 'NONE');
  buttonsMap.set('Annual Report', 'NONE');
  buttonsMap.set('Volunteering', 'NONE');
  buttonsMap.set('Our Impact', 'NONE');
  buttonsMap.set('Contact Us', 'ContactUs');
  buttonsMap.set('About Us', 'AboutUs');
  buttonsMap.set('Donate', 'NONE');

  const buttons = Array.from(buttonsMap).map(([buttonName, destination]) => (
      <TouchableOpacity
        key={buttonName}
        style={styles.button}
        onPress={() => {
          if (destination === 'NONE') {
            console.log(buttonName + " not ready");
          } else {
            navigation.navigate(destination)
          }
        }}
      >
        <ImageBackground
          source={getImageSource(buttonName)}
          style={{opacity: 0.52, ...StyleSheet.absoluteFillObject, position: 'absolute'}}
          blurRadius={1}
        />
        <Text style={{fontSize: 20, fontFamily: 'Futura-Medium', textShadowColor: 'white', textShadowRadius: 3, textAlign: 'center'}}> {buttonName} </Text>
      </TouchableOpacity>
  ));

  return buttons;
}

const Home = () => {
  const [showHomeSideMenu, setShowHomeSideMenu] = useState(false);

  const updateHomeSideMenu = (show) => {
    setShowHomeSideMenu(show);
  };

  return (
    <SafeAreaView style={{backgroundColor:COLORS.navy_blue, height: '100%'}}>

      { /* Home banner */ }
       <HomeBanner updateHomeSideMenu={updateHomeSideMenu}/>

      { /* Scrollable area */ }
      <View>
        <ScrollView
          style={{backgroundColor: COLORS.background, height: '100%'}}
          bounces='false'
        >

          { /* A grid of three buttons on each row */ }
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: '5%'}}>
            <View style={styles.frame}>
              {GetButtons()}
            </View>
          </View>

          { /* Content */ }

          <View style={{alignItems: 'center'}}>
            <View style={{backgroundColor: 'gray', width: width-40, height: 2}}>
            </View>
          </View>

          <View style={{alignItems: 'center', paddingVertical: 30}}>
          <Text style={{fontSize: 24, fontFamily: 'Futura-Medium'}}>
            BUILDING HEALTHY, VIBRANT COMMUNITIES STARTS HERE
          </Text>
          </View>

          <Image
            style={{width:450, height: 320}}
            source={require('../assets/community.jpg')}
          />

          <Text style={{fontSize: 20, fontFamily: 'Futura-Medium', paddingVertical: 30, paddingHorizontal: 20}}>
            PlayForever offers a range of programs and services aimed to fulfill the needs of the youth, families and communities
          </Text>

          {/*
          <FlatList
            data={[
              {key: 'Arts & Crafts'},
              {key: 'Homework Club'},
              {key: 'Academic Tutoring'},
              {key: 'Professional Grant-Writing'},
              {key: 'Professional Resumé Writing'},
              {key: 'After-school programs (Physical/Virtual)'},
              {key: 'Seniors’ technology classes'},
              {key: 'Health and Wellness Workshops'},
              {key: 'Parks & Recreation Revitalization'},
              {key: 'Education and Volunteer Mentorship'},
              {key: 'University/College Co-op Opportunities'},
              {key: 'Youth Basketball Leagues/Camps (Aged 13+)'},
            ]}
            renderItem={({item}) => <Text style={{fontSize: 18, paddingLeft: 10}}>• {item.key}</Text>}
          >
          </FlatList>
           */ }

          <View style={{padding: 200}}>
          </View>

        </ScrollView>

        {
          showHomeSideMenu ?
            <HomeSideMenu/>
            :
            null
        }


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: 'lightgray',
    width: frameWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default Home;
