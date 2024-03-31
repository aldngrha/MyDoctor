import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Abelchiasan" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Airlangga, 2019" />
      <ProfileItem
        label="Tempat Praktik"
        value="Rumah Sakit Umum Daerah Abdoel Moeloek, Bandar Lampung"
      />
      <ProfileItem label="No. STR" value="000988177172" />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
