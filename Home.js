import { React } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import HomeBanner from './HomeBanner'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#fefefe'}}>

      { /* Home banner */ }
      <HomeBanner/>

      { /* Scrollable area */ }
      <ScrollView
        style={{backgroundColor: '#992323', paddingTop: '3%'}}
        scrollEventThrottle={4}
      >
        { /* Annual Report Button */ }
        <View style={{alignItems:'center'}}>
          <TouchableOpacity
            style={styles.annual_report}
            onPress={() => console.log("Annual Report page not implemented")}
          >
            <Text>
              2022 annual report
            </Text>
          </TouchableOpacity>
        </View>

        { /* Content */ }

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  annual_report: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.5,
    width: 170,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
});

export default Home;
