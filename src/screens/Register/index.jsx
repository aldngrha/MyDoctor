import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onContinue = () => {
    console.log(fullName, profession, email, password);
    // navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.screen}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profession}
            onChangeText={value => setProfession(value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
