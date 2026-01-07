import Button from '@/components/Button';
import OptionButton from '@/components/OptionButton';
import RatingSlider from '@/components/RatingSlider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ReviewScreen() {
  const router = useRouter();
  const [qualityRating, setQualityRating] = useState(2);
  const [serviceRating, setServiceRating] = useState(2);
  const [priceRating, setPriceRating] = useState(2);
  const [pointsRating, setPointsRating] = useState(1);
  const [isDesignMatter, setIsDesignMatter] = useState<boolean | null>(null);
  const [isPriceFair, setIsPriceFair] = useState<boolean | null>(null);
  const [comment, setComment] = useState('');

  const handleContinue = () => {
    router.push('/confirmationsurvey');
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
        <Text style={styles.pageTitle}>Review</Text>

        {/* Rating Sliders */}
        <RatingSlider
          label="Quality"
          value={qualityRating}
          onValueChange={setQualityRating}
        />

        <RatingSlider
          label="Service"
          value={serviceRating}
          onValueChange={setServiceRating}
        />

        <RatingSlider
          label="Prices"
          value={priceRating}
          onValueChange={setPriceRating}
        />

        {/* Points Rating */}
        <View style={styles.pointsSection}>
          <Text style={styles.sectionLabel}>Points</Text>
          <View style={styles.pointsContainer}>
            {[1, 2, 3, 4, 5].map((num) => (
              <TouchableOpacity
                key={num}
                style={[styles.pointButton, pointsRating === num && styles.pointButtonActive]}
                onPress={() => setPointsRating(num)}
              >
                <Text style={[styles.pointText, pointsRating === num && styles.pointTextActive]}>
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Design Question */}
        <View style={styles.questionSection}>
          <Text style={styles.questionText}>Is design matter for your purchase?</Text>
          <View style={styles.optionsRow}>
            <OptionButton
              label="Yes"
              selected={isDesignMatter === true}
              onPress={() => setIsDesignMatter(true)}
              type="circle"
            />
            <OptionButton
              label="No"
              selected={isDesignMatter === false}
              onPress={() => setIsDesignMatter(false)}
              type="circle"
            />
          </View>
        </View>

        {/* Price Fair Question */}
        <View style={styles.questionSection}>
          <Text style={styles.questionText}>Is Price fair?</Text>
          <View style={styles.optionsRow}>
            <OptionButton
              label="Yes"
              selected={isPriceFair === true}
              onPress={() => setIsPriceFair(true)}
              type="circle"
            />
            <OptionButton
              label="No"
              selected={isPriceFair === false}
              onPress={() => setIsPriceFair(false)}
              type="circle"
            />
          </View>
        </View>

        {/* Comment Section */}
        <View style={styles.commentSection}>
          <Text style={styles.sectionLabel}>Leave a comment</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Share your experience..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={3}
            value={comment}
            onChangeText={setComment}
          />
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
    paddingVertical: 16,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  pointsSection: {
    marginVertical: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
  },
  pointButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  pointButtonActive: {
    borderColor: '#000',
    backgroundColor: '#000',
  },
  pointText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  pointTextActive: {
    color: '#fff',
  },
  questionSection: {
    marginVertical: 16,
  },
  questionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 24,
  },
  commentSection: {
    marginVertical: 16,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
    textAlignVertical: 'top',
  },
  spacer: {
    height: 20,
  },
});
