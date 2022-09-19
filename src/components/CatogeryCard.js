import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../constants';

const CatogeryCard = ({CatogeryName, active, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
     style={{...styles.container, backgroundColor: active ? '#9007FC': '#C8F2FF'}}
     onPress={() => onPress(CatogeryName)}>
      <Text style={{...styles.txt , color: active ? Colors.DEFAULT_WHITE : '#9007FC'}}>
        {CatogeryName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9007FC',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 2,
    elevation: 3,
    marginRight: 10,
  },
  txt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13
  }
});

export default CatogeryCard;