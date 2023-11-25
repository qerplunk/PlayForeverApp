import { React, useState } from 'react';
import { FlatList, Image, ImageBackground, Dimensions, ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from './Colors'

import HomeBanner from './HomeBanner'
import SideMenu from './SideMenu'

const {width} = Dimensions.get('window');
const frameWidth = width;
const buttonWidth = frameWidth / 3;

const GetButtons = () => {
  const navigation = useNavigation();

  const getImageSource = (buttonName) => {
    switch (buttonName) {
      case 'Upcoming Events':
        return require('./assets/upcoming_events_button.png');
      case 'Annual Report':
        return require('./assets/annual_report_button.png');
      case 'Our Impact':
        return require('./assets/our_impact_button.png');
      case 'For Kids':
        return require('./assets/for_kids_button.png');
      case 'About Us':
        return require('./assets/about_us_button.png');
      case 'Volunteering':
        return require('./assets/volunteering_button.png');
      case 'Programs':
        return require('./assets/programs_button.png');
      case 'Donate':
        return require('./assets/donate_button.png');
      case 'Contact Us':
        return require('./assets/contact_us_button.png');
      default:
        return require('./assets/icon.png');
    }
  };

  const buttons = [];
  const buttonNames = new Map([
    ['Upcoming Events', 'NONE'],
    ['Annual Report', 'AnnualReport'],
    ['Our Impact', 'NONE'],
    ['For Kids', 'NONE'],
    ['Programs', 'NONE'],
    ['Volunteering', 'NONE'],
    ['Donate', 'NONE'],
    ['About Us', 'NONE'],
    ['Contact Us', 'NONE'],
  ]);

  buttonNames.forEach(function(_, key) {
    buttons.push(
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          switch (key) {
            case 'Annual Report':
              console.log("Annual report not ready");
              break;
            case 'Programs':
              navigation.navigate('Programs')
              break;
            case 'Contact Us':
              navigation.navigate('ContactUs')
              break;
            default:
              console.log("NONE");
              break;
          }
        }}
      >
        <ImageBackground
          source={getImageSource(key)}
          style={{opacity: 0.45, ...StyleSheet.absoluteFillObject, position: 'absolute'}}
          blurRadius={2}
        />
        <Text style={{fontSize: 20, fontFamily: 'Futura-Medium', textShadowColor: 'white', textShadowRadius: 3, textAlign: 'center'}}> {key} </Text>
      </TouchableOpacity>
    )
  });

  return buttons;
}

const Home = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const updateSideMenu = (show) => {
    setShowSideMenu(show);
  };

  return (
    <SafeAreaView style={{backgroundColor:COLORS.navy_blue, height: '100%'}}>

      { /* Home banner */ }
      <HomeBanner updateSideMenu={updateSideMenu}/>

      { /* Scrollable area */ }
      <View>
        <ScrollView
          style={{backgroundColor: 'lightgray', height: '100%'}}
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
            BUILDING HEALTHY, VIBRANT
            COMMUNITIES STARTS HERE
          </Text>
          </View>

          <Image
            style={{width:450, height: 320}}
            source={require('./assets/community.jpg')}
          />

          <Text style={{fontSize: 20, fontFamily: 'Futura-Medium', paddingVertical: 30, paddingHorizontal: 20}}>
            Play Forever offers a range of programs and services aimed to fulfill the needs of youth, families and communities
          </Text>

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

          <View style={{padding: 200}}>
          </View>

        </ScrollView>

        {
          showSideMenu ?
            <SideMenu/>
            :
            null
        }


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    width: frameWidth,
    backgroundColor: 'lightblue',
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
  }

});

export default Home;
