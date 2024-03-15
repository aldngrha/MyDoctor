import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Gap, Header, List} from '../../components';
import {
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor3,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terimakasih atas wakt ...',
    },
    {
      id: 2,
      profile: DummyDoctor4,
      name: 'Nayrobi Putri Hayza',
      desc: 'Oh tentu saja tidak, karena jeruk it ...',
    },
    {
      id: 3,
      profile: DummyDoctor5,
      name: 'John McParker Steve',
      desc: 'Akan saya resepkan obat ya, unt ...',
    },
    {
      id: 4,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Akan saya resepkan obat ya, unt ...',
    },
    {
      id: 5,
      profile: DummyDoctor7,
      name: 'John McParker Steve',
      desc: 'Akan saya resepkan obat ya, unt ...',
    },
  ]);
  return (
    <View style={styles.screen}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <Gap height={4} />
      {doctors.map(doctor => {
        return (
          <List
            key={doctor.id}
            type="next"
            profile={doctor.profile}
            name={doctor.name}
            desc={doctor.desc}
            onPress={() => navigation.navigate('Chatting')}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
