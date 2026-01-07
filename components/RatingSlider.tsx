import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface RatingSliderProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
}

export default function RatingSlider({ label, value, onValueChange }: RatingSliderProps) {
  const getRatingLabel = (val: number) => {
    if (val < 1.5) return 'Poor';
    if (val < 2.5) return 'Fair';
    if (val < 3.5) return 'Good';
    return 'Excellent';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.ratingLabel}>{getRatingLabel(value)}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={0.1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#d32f2f"
        maximumTrackTintColor="#e0e0e0"
        thumbTintColor="#d32f2f"
      />
      <View style={styles.labelsContainer}>
        <Text style={styles.stepLabel}>Poor</Text>
        <Text style={styles.stepLabel}>Fair</Text>
        <Text style={styles.stepLabel}>Good</Text>
        <Text style={styles.stepLabel}>Excellent</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  ratingLabel: {
    fontSize: 12,
    color: '#666',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  stepLabel: {
    fontSize: 12,
    color: '#666',
  },
});
