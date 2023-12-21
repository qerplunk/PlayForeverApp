import { React } from 'react';
import { View } from 'react-native';

const LineBreak = ({color, thickness, marginY}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          width: 360,
          backgroundColor: color != undefined ? color : 'black',
          height: thickness != undefined ? thickness : 2,
          marginVertical: marginY != undefined ? marginY : 30}}>
      </View>
    </View>
  );
};

export default LineBreak;
