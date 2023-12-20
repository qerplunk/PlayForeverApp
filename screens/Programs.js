import { React } from 'react';
import { Image, StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';

import BackButton from '../components/BackButton';
import { COLORS } from '../Colors';

const LineBreak = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{width: 360, height: 2, backgroundColor: 'black', marginVertical: 40}}>
      </View>
    </View>
  );
};

const Programs = ({ navigation }) => {
  return(
    <SafeAreaView style={{height: '100%', backgroundColor: COLORS.navy_blue}}>

      <BackButton
        navigation={navigation}
        destination={'Home'}
      />

      <ScrollView style={{height: '100%', backgroundColor: 'lightgray'}} bounces='false'>
        <View style={{alignItems: 'center', paddingBottom: 20}}>
          <Text style={{fontSize: 22, fontFamily: 'Futura-Medium'}}>
            Our Programs
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>BASKETBALL PROGRAMS</Text>
          <Text style={styles.programDescriptions}>Youth basketball leagues</Text>
          <Text style={styles.programDescriptions}>Basketball summer camp</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/programs.png')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>HOMEWORK CLUB</Text>
          <Text style={styles.programDescriptions}>Building bright futures</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/for_kids.jpg')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>PARKS & RECREATION REVITILIZATION</Text>
          <Text style={styles.programDescriptions}>Reviving community spaces</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/favicon.png')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>HEALTH & WELLNESS WORKSHOPS</Text>
          <Text style={styles.programDescriptions}>Promoting healthy lifestyle choices</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/favicon.png')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>ARTS & CRAFTS</Text>
          <Text style={styles.programDescriptions}>Bringing imagination to life</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/favicon.png')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>BOOK CLUB</Text>
          <Text style={styles.programDescriptions}>Journey through pages</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/favicon.png')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>SENIOR TECH & HEALTH SESSIONS</Text>
          <Text style={styles.programDescriptions}>Connecting seniors through technology</Text>
          <Text style={styles.learnMore}>Tap to learn more!</Text>
          <Image source={require('../assets/favicon.png')} style={{width: 380, height: 380, marginVertical: 10}} />
        </View>

        <LineBreak/>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  learnMore: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontFamily: 'Futura-Medium',
  },
  programDescriptions: {
    fontSize: 18,
    fontFamily: 'Futura-Medium',
  },
  programTitles: {
    fontSize: 20,
    fontFamily: 'Futura-Bold',
  },
});

export default Programs;
