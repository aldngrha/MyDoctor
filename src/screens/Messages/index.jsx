import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor, DummyDoctor1, DummyDoctor2} from '../../assets';

const Messages = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terimakasih atas wakt ...',
    },
    {
      id: 2,
      profile: DummyDoctor1,
      name: 'Nayrobi Putri Hayza',
      desc: 'Oh tentu saja tidak, karena jeruk it ...',
    },
    {
      id: 3,
      profile: DummyDoctor2,
      name: 'John McParker Steve',
      desc: 'Akan saya resepkan obat ya, unt ...',
    },
  ]);
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
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
