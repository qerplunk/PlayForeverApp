import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from './Colors';

const MemberPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: COLORS.navy_blue}}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.back.text}>Go back</Text>
        </TouchableOpacity>
      <ScrollView style={{padding: 10, backgroundColor: 'lightgray', height: '100%'}} bounces='false'>

        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <View>
            <Text style={{left: 10, fontFamily: 'Futura-Medium', fontSize: 24}}>Hello, Edgar!</Text>
          </View>

          <View>
            <Image
              style={{left: 170, width: 70, height: 70}}
              source={require('./assets/member_default_icon.png')}
            />
          </View>
        </View>

        <View>
            <Text style={{left: -50, top: -38, marginHorizontal: 60, fontFamily: 'Futura-Medium', fontSize: 18, color: 'gray'}}>
              Here you can see your volunteering history
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

export default MemberPage;
