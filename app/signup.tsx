import Button from '@/components/Button';
import OptionButton from '@/components/OptionButton';
import TextInputField from '@/components/TextInputField';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

const INTERESTS = [
  'Healthy Food',
  'Tacos',
  'Ecology',
  'Italian Food',
  'Theme parks',
  'Parks',
  'Shopping',
  'Saving Money',
  'Cars',
  'Small Business',
  'Local Business',
  'Sushi',
  'Travel',
  'Big money savings',
  'Sports',
  'Gym',
  'Burgers',
  'Beers',
  'Race Cars',
  'Music Festivals',
];

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    if (name && lastName && gender && age) {
      router.push('/survey');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Sign In</Text>

        {/* Name Field */}
        <View style={styles.section}>
          <Text style={styles.label}>Name</Text>
          <TextInputField
            placeholder="First name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Last Name Field */}
        <View style={styles.section}>
          <Text style={styles.label}>Last Name</Text>
          <TextInputField
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        {/* Gender and Age Row */}
        <View style={styles.rowContainer}>
          <View style={[styles.section, styles.halfWidth]}>
            <Text style={styles.label}>Gender</Text>
            <TextInputField
              placeholder="Select"
              value={gender}
              onChangeText={setGender}
            />
          </View>
          <View style={[styles.section, styles.halfWidth]}>
            <Text style={styles.label}>Age</Text>
            <TextInputField
              placeholder="Select"
              value={age}
              onChangeText={setAge}
            />
          </View>
        </View>

        {/* Interests Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Interest</Text>
          <View style={styles.interestsGrid}>
            {INTERESTS.map((interest) => (
              <OptionButton
                key={interest}
                label={interest}
                selected={selectedInterests.includes(interest)}
                onPress={() => toggleInterest(interest)}
                type="tag"
              />
            ))}
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
    marginBottom: 24,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },
  spacer: {
    height: 20,
  },
});
