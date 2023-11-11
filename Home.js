import { React } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import HomeBanner from './HomeBanner'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:'red'}}>

      { /* Home banner */ }
      <HomeBanner/>

      { /* Scrollable area */ }
     <View style={{backgroundColor: 'red'}}>
        <ScrollView
          style={{backgroundColor: 'blue'}}
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
      </View>
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
