import Button from '@/components/Button';
import OptionButton from '@/components/OptionButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ConfirmationSurveyScreen() {
  const router = useRouter();
  const [isSure, setIsSure] = useState<boolean | null>(null);
  const [needReview, setNeedReview] = useState<boolean | null>(null);

  const handleConfirm = () => {
    if (isSure !== null && needReview !== null) {
      router.push('/thankscreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tacos de Pato</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Warning Icon */}
        <View style={styles.warningContainer}>
          <Text style={styles.warningIcon}>⚠️</Text>
        </View>

        {/* Main Question */}
        <Text style={styles.mainQuestion}>Are you sure?</Text>

        {/* Description */}
        <Text style={styles.description}>
          Bad comments affect business is this review impartial?
        </Text>

        {/* First Question */}
        <View style={styles.questionSection}>
          <View style={styles.optionsRow}>
            <OptionButton
              label="Yes"
              selected={isSure === true}
              onPress={() => setIsSure(true)}
              type="circle"
            />
            <OptionButton
              label="No"
              selected={isSure === false}
              onPress={() => setIsSure(false)}
              type="circle"
            />
          </View>
        </View>

        {/* Leave Comment Section */}
        <View style={styles.commentSection}>
          <Text style={styles.commentLabel}>Leave a comment</Text>
          <Text style={styles.commentQuestion}>
            Do we need to review the business?
          </Text>
          <View style={styles.optionsRow}>
            <OptionButton
              label="Yes"
              selected={needReview === true}
              onPress={() => setNeedReview(true)}
              type="circle"
            />
            <OptionButton
              label="No"
              selected={needReview === false}
              onPress={() => setNeedReview(false)}
              type="circle"
            />
          </View>
        </View>

        {/* Confirm Button */}
        <Button
          title="Confirm"
          onPress={handleConfirm}
          variant="primary"
        />

        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: 'center',
  },
  warningContainer: {
    marginBottom: 24,
  },
  warningIcon: {
    fontSize: 48,
  },
  mainQuestion: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
  },
  questionSection: {
    width: '100%',
    marginBottom: 24,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 32,
  },
  commentSection: {
    width: '100%',
    marginBottom: 24,
  },
  commentLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  commentQuestion: {
    fontSize: 13,
    color: '#666',
    marginBottom: 16,
  },
  spacer: {
    height: 20,
  },
});
