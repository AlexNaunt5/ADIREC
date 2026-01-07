import Button from '@/components/Button';
import OptionButton from '@/components/OptionButton';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function SurveyScreen() {
  const router = useRouter();
  const [priceVsQuality, setPriceVsQuality] = useState<'price' | 'quality' | null>(null);
  const [consumerQuestion, setConsumerQuestion] = useState<'yes' | 'no' | null>(null);

  const handleContinue = () => {
    if (priceVsQuality && consumerQuestion) {
      router.push('/profile');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Sign In</Text>

        {/* First Question */}
        <View style={styles.questionSection}>
          <Text style={styles.questionTitle}>Which is more important for you?</Text>
          
          <View style={styles.optionsContainer}>
            <OptionButton
              label="Price"
              selected={priceVsQuality === 'price'}
              onPress={() => setPriceVsQuality('price')}
              type="circle"
            />
            <OptionButton
              label="Quality"
              selected={priceVsQuality === 'quality'}
              onPress={() => setPriceVsQuality('quality')}
              type="circle"
            />
          </View>
        </View>

        {/* Second Question */}
        <View style={styles.questionSection}>
          <Text style={styles.questionTitle}>Question about consumer</Text>
          
          <View style={styles.optionsContainer}>
            <OptionButton
              label="Yes"
              selected={consumerQuestion === 'yes'}
              onPress={() => setConsumerQuestion('yes')}
              type="circle"
            />
            <OptionButton
              label="No"
              selected={consumerQuestion === 'no'}
              onPress={() => setConsumerQuestion('no')}
              type="circle"
            />
          </View>
        </View>

        {/* Continue Button */}
        <Button
          title="Continue"
          onPress={handleContinue}
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 32,
  },
  questionSection: {
    marginBottom: 36,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  optionsContainer: {
    gap: 12,
  },
  spacer: {
    height: 20,
  },
});
