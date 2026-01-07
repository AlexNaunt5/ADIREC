import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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

export default function TravelSummaryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Travel Summary</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Location Title */}
        <View style={styles.locationHeader}>
          <Text style={styles.locationName}>New York</Text>
        </View>

        {/* Featured Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/400x250' }}
          style={styles.featuredImage}
        />

        {/* Map */}
        <Image
          source={{ uri: 'https://via.placeholder.com/400x250' }}
          style={styles.mapImage}
        />

        {/* Trip Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <MaterialCommunityIcons name="map-marker" size={24} color="#000" />
            <Text style={styles.statValue}>8/12</Text>
            <Text style={styles.statLabel}>visited</Text>
          </View>
          <View style={styles.statBox}>
            <MaterialCommunityIcons name="currency-usd" size={24} color="#000" />
            <Text style={styles.statValue}>$540.20</Text>
            <Text style={styles.statLabel}>saved</Text>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Trip Details</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Duration:</Text>
            <Text style={styles.infoValue}>5 days</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Hotels:</Text>
            <Text style={styles.infoValue}>3 booked</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Activities:</Text>
            <Text style={styles.infoValue}>8 scheduled</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/travelexplore')}>
            <Text style={styles.primaryButtonText}>Edit Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Share Trip</Text>
          </TouchableOpacity>
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
    paddingBottom: 80,
  },
  locationHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#999',
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  featuredImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  mapImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  infoSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 13,
    color: '#666',
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  buttonsContainer: {
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  secondaryButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
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
