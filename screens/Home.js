import { React, useState } from 'react';
import { FlatList, Image, ImageBackground, Dimensions, ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomeBanner from './HomeBanner'
import HomeSideMenu from './HomeSideMenu'
import LineBreak from '../components/LineBreak';
import { COLORS } from '../Colors'

const {width, height} = Dimensions.get('window');
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
      <View style={{backgroundColor: '#dddddd'}}>
        <Image
          style={{position: 'absolute', width: width/2+220, height: height/2+340, opacity: 0.5}}
          blurRadius={4}
          source={require('../assets/acrylic_paint.jpg')}
        />

        <ScrollView
          style={{height: '100%'}}
          bounces='false'
        >

          { /* A grid of three buttons on each row */ }
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: '5%'}}>
            <View style={styles.frame}>
              {GetButtons()}
            </View>
          </View>

          { /* Content */ }

          <LineBreak marginY={20} />

          <View style={{paddingBottom: 30}}>

            <View style={{top: 30, alignSelf: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontFamily: 'Futura-Medium'}}>
                  BUILDING HEALTHY,
                </Text>
                <Text style={{fontSize: 24, fontFamily: 'Futura-Medium'}}>
                  VIBRANT COMMUNITIES
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 24, fontFamily: 'Futura-Medium'}}>
                    STARTS
                  </Text>
                  <Text style={{alignItems: 'center', color: COLORS.cinabar, fontSize: 24, fontFamily: 'Futura-Medium', paddingLeft: 8}}>
                    HERE
                  </Text>
                  <Text style={{fontSize: 24, fontFamily: 'Futura-Medium'}}>
                    !
                  </Text>
                </View>

              <Image
                style={{width: width, height: width}}
                source={require('../assets/community.jpg')}
              />
            </View>

          </View>

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
