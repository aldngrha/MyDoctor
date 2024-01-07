import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';
import Gap from '../../components/atoms/Gap';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.screen}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah dan fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
