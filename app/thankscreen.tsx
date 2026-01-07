import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function ThankScreen() {
  const router = useRouter();

  const handleMoreQuestions = () => {
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Celebration Icon */}
        <View style={styles.celebrationContainer}>
          <Text style={styles.celebrationIcon}>🥳</Text>
        </View>

        {/* Thank You Message */}
        <Text style={styles.thankYouText}>Thank You</Text>

        {/* Score Display */}
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreValue}>5.0</Text>
        </View>

        {/* Discount Badge */}
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>+ 5% OFF</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Your feedback helps us improve
        </Text>

        {/* More Questions Button */}
        <Button
          title="Few more business questions"
          onPress={handleMoreQuestions}
          variant="secondary"
        />

        {/* Home Button */}
        <Button
          title="Back to Home"
          onPress={() => router.push('/home')}
          variant="primary"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  celebrationContainer: {
    marginBottom: 24,
  },
  celebrationIcon: {
    fontSize: 64,
  },
  thankYouText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  scoreContainer: {
    marginBottom: 16,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000',
  },
  discountContainer: {
    marginBottom: 32,
  },
  discountText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#52c41a',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
});
