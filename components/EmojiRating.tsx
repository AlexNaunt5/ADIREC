import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface EmojiRatingProps {
  value?: number;
  onValueChange?: (value: number) => void;
  readonly?: boolean;
}

const EMOJIS = ['😢', '😟', '😐', '🙂', '😄'];
const LABELS = ['Poor', 'Fair', 'Good', 'Excellent'];

export default function EmojiRating({ value, onValueChange, readonly = false }: EmojiRatingProps) {
  return (
    <View style={styles.container}>
      <View style={styles.emojiRow}>
        {EMOJIS.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.emojiButton,
              value === index + 1 && styles.emojiButtonActive,
            ]}
            onPress={() => !readonly && onValueChange?.(index + 1)}
            disabled={readonly}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.labelsRow}>
        <Text style={styles.label}>Poor</Text>
        <Text style={styles.label}>Fair</Text>
        <Text style={styles.label}>Good</Text>
        <Text style={styles.label}></Text>
        <Text style={styles.label}>Excellent</Text>
      </View>
      {value && (
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              { width: `${((value - 1) / 4) * 100}%` },
            ]}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginVertical: 16,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emojiButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiButtonActive: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
  emoji: {
    fontSize: 24,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#52c41a',
    borderRadius: 2,
  },
});
