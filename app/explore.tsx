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

const RESTAURANTS = [
  {
    id: '1',
    name: 'Tacos de Pato',
    rating: 4.5,
    reviews: '(500 reviews)',
    time: '15 min. dist',
    price: 150,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: '2',
    name: 'Candlelight',
    rating: 4.8,
    reviews: '(200 reviews)',
    time: '20 min. dist',
    price: 180,
    lat: 40.758,
    lng: -73.9855,
  },
  {
    id: '3',
    name: 'Travel Cafe',
    rating: 4.2,
    reviews: '(150 reviews)',
    time: '10 min. dist',
    price: 120,
    lat: 40.7489,
    lng: -73.9680,
  },
];

export default function ExploreScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('Tacos');

  const handleRestaurantPress = (restaurantId: string) => {
    router.push({
      pathname: '/fooddetail',
      params: { restaurantId, from: 'explore' },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name="magnify" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder={searchText}
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <MaterialCommunityIcons name="pencil" size={18} color="#666" />
          </TouchableOpacity>
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

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Map View</Text>
            {RESTAURANTS.map((restaurant, index) => (
              <View key={restaurant.id} style={[styles.pricePin, { top: 30 + index * 60, left: 30 + index * 40 }]}>
                <Text style={styles.priceText}>${restaurant.price}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Restaurant Listings */}
        <View style={styles.listingsContainer}>
          {RESTAURANTS.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              style={styles.restaurantCard}
              onPress={() => handleRestaurantPress(restaurant.id)}
            >
              <Image
                source={{ uri: 'https://via.placeholder.com/80' }}
                style={styles.restaurantImage}
              />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.ratingContainer}>
                  <MaterialCommunityIcons name="star" size={14} color="#FFB800" />
                  <Text style={styles.ratingText}>
                    {restaurant.rating} {restaurant.reviews}
                  </Text>
                  <Text style={styles.timeText}>{restaurant.time}</Text>
                </View>
                <Text style={styles.priceRangeText}>${restaurant.price} per person</Text>
              </View>
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    height: 44,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  mapContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapText: {
    fontSize: 14,
    color: '#999',
  },
  pricePin: {
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  priceText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
  },
  listingsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    gap: 12,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  restaurantInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: 14,
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
  timeText: {
    fontSize: 11,
    color: '#999',
  },
  priceRangeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  selectButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  selectButtonText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
  },
});
