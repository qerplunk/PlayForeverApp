import { React } from 'react';
import { Image, SafeAreaView, ScrollView, View, Text } from 'react-native';

import BackButton from '../components/BackButton';
import { COLORS } from '../Colors';

const AboutUs = ({navigation}) => {
  return(
    <SafeAreaView style={{backgroundColor: COLORS.navy_blue}}>

      <BackButton
        navigation={navigation}
        destination={'Home'}
      />

      <ScrollView style={{backgroundColor: COLORS.off_white, height: '100%'}} bounces='false'>
        <View style={{height: '100%', backgroundColor: COLORS.off_white}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 22, fontFamily: 'Futura-Medium'}}>
              About us
            </Text>
          </View>

          <Text style={{fontFamily: 'Futura-Medium', fontSize: 17, textAlign: 'justify', padding: 20}}>
            Play Forever, is a non-profit organization providing structured and accessible recreation, education & mental health services to the youth of Toronto, Ontario. Play Forever currently serves youth ages 8-29 with weekly programs, primarily focused on helping youth from marginalized communities and low-income families.
          </Text>

          <View style={{alignItems: 'center', borderColor:'#404040', borderWidth: 1}}>
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
      </ScrollView>

    </SafeAreaView>
  );
}

export default AboutUs;
