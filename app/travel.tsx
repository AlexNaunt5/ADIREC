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
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const DESTINATIONS = [
  { id: '1', name: 'New York', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Paris', image: 'https://via.placeholder.com/150' },
];

export default function TravelScreen() {
  const router = useRouter();
  const [destination, setDestination] = useState('New York');

  const handleExplore = () => {
    router.push('/travelexplore');
  };

  const handleSummary = () => {
    router.push('/travelsummary');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Travel</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name="map-marker" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Where you want to go?"
            value={destination}
            onChangeText={setDestination}
            placeholderTextColor="#999"
          />
        </View>

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

        {/* Schedule Visit */}
        <TouchableOpacity style={styles.scheduleVisit} onPress={handleSummary}>
          <Text style={styles.scheduleVisitLabel}>Schedule visit</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <CategoryButton icon="compass" label="Activities" />
          <CategoryButton icon="food" label="Restaurant" />
          <CategoryButton icon="image" label="Experiences" />
          <CategoryButton icon="ticket-percent" label="Coupon" />
        </View>

        {/* Featured Cards */}
        <View style={styles.cardsContainer}>
          {DESTINATIONS.map((dest) => (
            <TouchableOpacity
              key={dest.id}
              style={styles.cardImage}
              onPress={handleExplore}
            >
              <Image source={{ uri: dest.image }} style={{ width: '100%', height: '100%' }} />
              <Text style={styles.cardOverlay}>ADS</Text>
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
    paddingVertical: 16,
    paddingBottom: 80,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#999',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 12,
    height: 44,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
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
  scheduleVisit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  scheduleVisitLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
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
  cardsContainer: {
    gap: 16,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 16,
  },
  cardOverlay: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    position: 'absolute',
    top: 12,
    left: 12,
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
