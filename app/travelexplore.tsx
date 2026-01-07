import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
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

const ACTIVITIES = [
  {
    id: '1',
    name: 'Helicopter Tour',
    rating: 4.8,
    reviews: 750,
    tag: 'G+',
    image: 'https://via.placeholder.com/280x150',
  },
  {
    id: '2',
    name: 'Le Veau d\'Or',
    rating: 4.6,
    category: 'Restaurant',
    type: 'Lunch or Dinner',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Park Stroll',
    rating: 4.5,
    category: 'Experience',
    image: 'https://via.placeholder.com/150',
  },
];

export default function TravelExploreScreen() {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const TAGS = ['G+', 'F', 'AW', 'FO'];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleActivityPress = (activityId: string) => {
    router.push({
      pathname: '/activitydetail',
      params: { activityId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New York</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Filter and Sort */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>Filter</Text>
            <MaterialCommunityIcons name="chevron-down" size={16} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>Sort</Text>
            <MaterialCommunityIcons name="chevron-down" size={16} color="#000" />
          </TouchableOpacity>
          <Text style={styles.resultsText}>99 results</Text>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {TAGS.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[
                styles.tagButton,
                selectedTags.includes(tag) && styles.tagButtonActive,
              ]}
              onPress={() => toggleTag(tag)}
            >
              <Text style={[styles.tagText, selectedTags.includes(tag) && styles.tagTextActive]}>
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/400x200' }}
            style={styles.mapImage}
          />
        </View>

        {/* Activities List */}
        <View style={styles.activitiesContainer}>
          {ACTIVITIES.map((activity) => (
            <TouchableOpacity
              key={activity.id}
              style={styles.activityCard}
              onPress={() => handleActivityPress(activity.id)}
            >
              <Image source={{ uri: activity.image }} style={styles.activityImage} />
              <View style={styles.activityInfo}>
                <View style={styles.activityHeader}>
                  <Text style={styles.activityName}>{activity.name}</Text>
                  {activity.tag && (
                    <View style={styles.tagBadge}>
                      <Text style={styles.tagBadgeText}>{activity.tag}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.ratingContainer}>
                  <MaterialCommunityIcons name="star" size={14} color="#FFB800" />
                  <Text style={styles.ratingText}>
                    {activity.rating} ({activity.reviews} reviews)
                  </Text>
                </View>
                {activity.category && (
                  <Text style={styles.categoryText}>{activity.category}</Text>
                )}
                {activity.type && <Text style={styles.typeText}>{activity.type}</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" />
        <NavItem icon="compass" />
        <NavItem icon="shopping-bag-outline" />
        <NavItem icon="heart-outline" />
        <NavItem icon="account-outline" />
      </View>
    </SafeAreaView>
  );
}

function NavItem({ icon }: { icon: string }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <MaterialCommunityIcons name={icon as any} size={24} color="#666" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 80,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  controlText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  resultsText: {
    fontSize: 12,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  tagButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#ffeb3b',
  },
  tagButtonActive: {
    backgroundColor: '#ffeb3b',
    borderWidth: 2,
    borderColor: '#000',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  tagTextActive: {
    color: '#000',
  },
  mapContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  activitiesContainer: {
    gap: 12,
  },
  activityCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  activityImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#e0e0e0',
  },
  activityInfo: {
    padding: 12,
    gap: 8,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  activityName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  tagBadge: {
    backgroundColor: '#ffeb3b',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  tagBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
  categoryText: {
    fontSize: 11,
    color: '#999',
  },
  typeText: {
    fontSize: 11,
    color: '#999',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
});
