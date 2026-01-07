import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface OptionProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
  type?: 'circle' | 'tag';
}

export default function OptionButton({ label, selected = false, onPress, type = 'tag' }: OptionProps) {
  if (type === 'circle') {
    return (
      <TouchableOpacity
        style={styles.circleContainer}
        onPress={onPress}
      >
        <View style={[styles.circle, selected && styles.circleSelected]}>
          {selected && <View style={styles.circleDot} />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.tagButton,
        selected && styles.tagButtonSelected,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.tagText, selected && styles.tagTextSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 8,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSelected: {
    borderColor: '#000',
  },
  circleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  tagButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    margin: 6,
  },
  tagButtonSelected: {
    backgroundColor: '#f0f0f0',
    borderColor: '#000',
  },
  tagText: {
    fontSize: 14,
    color: '#666',
  },
  tagTextSelected: {
    color: '#000',
    fontWeight: '500',
  },
  label: {
    fontSize: 14,
    color: '#000',
  },
});
