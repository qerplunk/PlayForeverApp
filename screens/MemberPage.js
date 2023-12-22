import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import BackButton from '../components/BackButton';
import { COLORS } from '../Colors';

const MemberPage = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.navy_blue}}>

      <BackButton
        navigation={navigation}
        destination={'Home'}
      />

      <ScrollView style={{padding: 10, backgroundColor: COLORS.off_white, height: '100%'}} bounces='false'>

        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <View>
            <Text style={{left: 10, fontFamily: 'Futura-Medium', fontSize: 24}}>Hello, Edgar!</Text>
          </View>

          <View>
            <Image
              style={{left: 170, width: 70, height: 70}}
              source={require('../assets/member_default_icon.png')}
            />
          </View>
        </View>

        <View>
            <Text style={{left: -80, top: -38, marginHorizontal: 90, fontFamily: 'Futura-Medium', fontSize: 18, color: 'gray'}}>
              Here you can see your volunteering and program history with PlayForever
            </Text>
        </View>

        <View>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 18, color: 'black'}}>
              FOOD DRIVE
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Description: Food drive
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Organizer: ...
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Date: 12/12/12
            </Text>
        </View>
        <View style={{padding: 20}}>
        </View>
        <View>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 18, color: 'black'}}>
              KIDS BASKETBALL TOURNAMENT
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Description: Kids basketball tournament
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Organizer: ...
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Date: 12/12/12
            </Text>
        </View>
        <View style={{padding: 20}}>
        </View>
        <View>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 18, color: 'black'}}>
              TUTORING
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Description: Tutoring
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Organizer: ...
            </Text>
            <Text style={{fontFamily: 'Futura-Medium', fontSize: 16, color: 'gray'}}>
              Date: 12/12/12
            </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default MemberPage;
