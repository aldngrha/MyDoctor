import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {IconSend, IconSendDisable} from '../../../assets';

const ButtonIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDisable />}
      {!disable && <IconSend />}
    </View>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiaty,
    width: 43,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 8,
    paddingRight: 3,
    paddingLeft: 8,
  }),
});
