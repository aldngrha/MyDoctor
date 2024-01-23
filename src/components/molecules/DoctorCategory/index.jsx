import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ILGeneralDoctor,
  ILMedicineDoctor,
  ILPediatrician,
  ILPsychiatrist,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILGeneralDoctor style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <ILPsychiatrist style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <ILMedicineDoctor style={styles.illustration} />;
    }
    if (category === 'dokter anak') {
      return <ILPediatrician style={styles.illustration} />;
    }
    return <ILGeneralDoctor style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
