import { React } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor:'#fefefe'}}>

      { /* MEMBER LOGO */ }
      <TouchableOpacity
        style={styles.member_logo}
        onPress={() => navigation.navigate('MemberPage')}
      >
        <Text>Member Page</Text>
      </TouchableOpacity>

      {/* Scrollable area */}
      <ScrollView
        style={{marginTop: 50, marginBottom: 0, backgroundColor: '#fefefe'}}
        scrollEventThrottle={4}
      >

        {/* Annual Report Button */}
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

        {/* Content */}

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
  member_logo: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: '100%',
    backgroundColor: 'red'
  }
});

export default Home;
