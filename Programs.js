import { React } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { COLORS } from './Colors';

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
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.back.text}>
          Go Back
        </Text>
      </TouchableOpacity>

      <ScrollView style={{height: '100%', backgroundColor: 'lightgray'}} bounces='false'>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>BASKETBALL PROGRAMS</Text>
          <Text style={styles.programDescriptions}>Youth basketball leagues</Text>
          <Text style={styles.programDescriptions}>Basketball summer camp</Text>
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>HOMEWORK CLUB</Text>
          <Text style={styles.programDescriptions}>Building bright futures</Text>
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>PARKS & RECREATION REVITILIZATION</Text>
          <Text style={styles.programDescriptions}>Reviving community spaces</Text>
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>HEALTH & WELLNESS WORKSHOPS</Text>
          <Text style={styles.programDescriptions}>Promoting healthy lifestyle choices</Text>
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>ARTS & CRAFTS</Text>
          <Text style={styles.programDescriptions}>Bringing imagination to life</Text>
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>BOOK CLUB</Text>
          <Text style={styles.programDescriptions}>Journey through pages</Text>
        </View>

        <LineBreak/>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.programTitles}>SENIOR TECH & HEALTH SESSIONS</Text>
          <Text style={styles.programDescriptions}>Connecting seniors through technology</Text>
        </View>

        <LineBreak/>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  programDescriptions: {
    fontSize: 18,
    fontFamily: 'Futura-Medium',
  },
  programTitles: {
    fontSize: 20,
    fontFamily: 'Futura-Bold',
  },
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
});

export default Programs;
