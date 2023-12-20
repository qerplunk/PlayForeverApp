import { React } from 'react';
import { Image, SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../Colors';

const AboutUs = ({ navigation }) => {
  return(
    <SafeAreaView style={{height: '100%', backgroundColor: COLORS.navy_blue}}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.back.text}>Back</Text>
      </TouchableOpacity>
      <ScrollView style={{padding: 10, backgroundColor: 'lightgray', height: '100%'}} bounces='false'>
      </ScrollView>

      <View style={{height: '100%', backgroundColor: 'lightgray'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 22, fontFamily: 'Futura-Medium'}}>
            About us
          </Text>
        </View>

        <Text style={{fontFamily: 'Futura-Medium', fontSize: 17, textAlign: 'justify', padding: 20}}>
          Play Forever, is a non-profit organization providing structured and accessible recreation, education & mental health services to the youth of Toronto, Ontario. Play Forever currently serves youth ages 8-29 with weekly programs, primarily focused on helping youth from marginalized communities and low-income families.
        </Text>

        <View style={{alignItems: 'center', borderColor:'#404040', borderWidth: 2}}>
          <Image
            style={{width: 415}}
            source={require('../assets/founder.jpeg')}
          />
        </View>

        <Text style={{fontFamily: 'Futura-Medium', fontSize: 17, textAlign: 'justify', padding: 20}}>
          "PlayForever would not be possible without the work of our incredible board of directors, as well as our phenomenal group of volunteers and mentors"
        </Text>

        <View style={{paddingHorizontal: 20, flexDirection: 'row', paddingLeft: 228}}>
          <Text style={{fontSize: 20}}>-</Text>
          <Text style={{fontFamily: 'Futura-Medium', fontSize: 17}}>
            Mohammed Al-Salem
          </Text>
        </View>
        <Text style={{color: 'gray', fontFamily: 'Futura-Medium', fontSize: 17, paddingLeft: 74}}>
          Founder and Lead Director of Play Forever
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    borderColor: 'black',
    borderWidth: 1.2,
    backgroundColor: 'white',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    text: {
      fontFamily: 'Futura-Medium',
      fontSize: 16,
    }
  },
});


export default AboutUs;
