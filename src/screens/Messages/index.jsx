import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListDoctors} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctors />
        <ListDoctors />
        <ListDoctors />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
