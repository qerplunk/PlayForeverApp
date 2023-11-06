import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MemberPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    borderColor: 'black',
    borderWidth: 1.2,
    backgroundColor: 'white',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MemberPage;
