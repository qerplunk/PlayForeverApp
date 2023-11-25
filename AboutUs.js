import { React } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from './Colors';

const AboutUs = ({ navigation }) => {
  return(
    <SafeAreaView style={{height: '100%', backgroundColor: COLORS.navy_blue}}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.back.text}>Go back</Text>
      </TouchableOpacity>
      <ScrollView style={{padding: 10, backgroundColor: 'lightgray', height: '100%'}} bounces='false'>
      </ScrollView>

      <View style={{height: '100%', backgroundColor: 'lightgray'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 22, fontFamily: 'Futura-Medium'}}>
            About our mission
          </Text>
        </View>
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
