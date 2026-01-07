import React from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

interface TextInputFieldProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle;
  multiline?: boolean;
}

export default function TextInputField({
  placeholder,
  value,
  onChangeText,
  style,
  multiline = false,
}: TextInputFieldProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
});
