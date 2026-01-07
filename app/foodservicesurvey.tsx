import Button from '@/components/Button';
import EmojiRating from '@/components/EmojiRating';
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

export default function FoodServiceSurveyScreen() {
  const router = useRouter();
  const [timeResponse, setTimeResponse] = useState<number>(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const QUALITY_TAGS = [
    'Clean',
    'Friendly',
    'Fresh',
    'Good Taste',
    'Fit meal',
    'Need to try',
  ];

  const SERVICE_TAGS = [
    'Bad experience',
    'Not great',
    'Need to improve',
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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
        {/* Time Response Rating */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Time response</Text>
          <EmojiRating value={timeResponse} onValueChange={setTimeResponse} />
        </View>

        {/* Quality Tags */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quality Tags</Text>
          <View style={styles.tagsContainer}>
            {QUALITY_TAGS.map((tag) => (
              <OptionButton
                key={tag}
                label={tag}
                selected={selectedTags.includes(tag)}
                onPress={() => toggleTag(tag)}
                type="tag"
              />
            ))}
          </View>
        </View>

        {/* Service Tags */}
        <View style={styles.section}>
          <View style={styles.tagsContainer}>
            {SERVICE_TAGS.map((tag) => (
              <OptionButton
                key={tag}
                label={tag}
                selected={selectedTags.includes(tag)}
                onPress={() => toggleTag(tag)}
                type="tag"
              />
            ))}
          </View>
        </View>

        {/* Comment Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leave a comment</Text>
          <View style={styles.commentInputContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Share your experience..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              value={comment}
              onChangeText={setComment}
            />
          </View>

          <TouchableOpacity style={styles.addPhotosButton}>
            <Text style={styles.addPhotosText}>Add Photos</Text>
          </TouchableOpacity>
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

// TextInput component
import { TextInput } from 'react-native';

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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  commentInputContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 0,
    overflow: 'hidden',
    marginBottom: 12,
  },
  commentInput: {
    padding: 12,
    fontSize: 14,
    color: '#000',
    textAlignVertical: 'top',
  },
  addPhotosButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  addPhotosText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  spacer: {
    height: 20,
  },
});
