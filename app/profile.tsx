import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Profile</Text>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/120' }}
            style={styles.profileImage}
          />
        </View>

        {/* Name */}
        <Text style={styles.nameText}>Nancy P. Anderson</Text>

        {/* My Profile Link */}
        <TouchableOpacity style={styles.myProfileLink}>
          <Text style={styles.myProfileText}>My Profile</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        {/* Category Buttons */}
        <View style={styles.categoryContainer}>
          <CategoryButton icon="compass" label="Explore" />
          <CategoryButton icon="food" label="Food" />
          <CategoryButton icon="airplane" label="Travel" />
          <CategoryButton icon="tag-discount" label="Discounts" />
        </View>

        {/* Recommendations Section */}
        <View style={styles.recommendationsSection}>
          <TouchableOpacity style={styles.recommendationsHeader}>
            <Text style={styles.recommendationsTitle}>Recommendations</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          {/* Recommendation Card */}
          <View style={styles.recommendationCard}>
            {/* Header with icon and title */}
            <View style={styles.cardHeader}>
              <View style={styles.cardIconContainer}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/40' }}
                  style={styles.cardIcon}
                />
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>Tacos de Pato</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>4</Text>
                  <View style={styles.starsContainer}>
                    {[1, 2, 3, 4].map((i) => (
                      <MaterialCommunityIcons key={i} name="star" size={12} color="#FFB800" />
                    ))}
                    <MaterialCommunityIcons name="star-outline" size={12} color="#FFB800" />
                  </View>
                  <Text style={styles.timeAgoText}>2 days ago</Text>
                </View>
              </View>
              <MaterialCommunityIcons name="dots-vertical" size={20} color="#999" />
            </View>

            {/* Description */}
            <Text style={styles.cardDescription}>
              Body for comments exclusively for services and Professional boards. Add a short
              summary of experience had.
            </Text>

            {/* Image */}
            <Image
              source={{ uri: 'https://via.placeholder.com/300x200' }}
              style={styles.cardImage}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryButton({ icon, label }: { icon: string; label: string }) {
  return (
    <TouchableOpacity style={styles.categoryButton}>
      <View style={styles.categoryIconContainer}>
        <MaterialCommunityIcons name={icon as any} size={28} color="#000" />
      </View>
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
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
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  myProfileLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginBottom: 24,
  },
  myProfileText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  categoryButton: {
    alignItems: 'center',
    gap: 8,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  recommendationsSection: {
    marginBottom: 32,
  },
  recommendationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  recommendationCard: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  cardIconContainer: {
    marginRight: 4,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  timeAgoText: {
    fontSize: 11,
    color: '#999',
    marginLeft: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
});
