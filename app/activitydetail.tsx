import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
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

export default function ActivityDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('info');
  const [guests, setGuests] = useState({
    adults: 1,
    kids: 0,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Helicopter Tour</Text>
        <TouchableOpacity onPress={() => router.push('/travelcontact')}>
          <MaterialCommunityIcons name="information-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Title and Rating */}
        <View style={styles.titleSection}>
          <View style={styles.titleRow}>
            <Text style={styles.activityName}>Helicopter Tour</Text>
            <View style={styles.tagBadge}>
              <Text style={styles.tagBadgeText}>G+</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={16} color="#FFB800" />
            <Text style={styles.ratingText}>4.3 / 5</Text>
            <Text style={styles.reviewsText}>(750 reviews) 25% overall happy)</Text>
          </View>
        </View>

        {/* Images */}
        <View style={styles.imagesContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/200x150' }}
            style={styles.mainImage}
          />
          <Image
            source={{ uri: 'https://via.placeholder.com/200x150' }}
            style={styles.secondImage}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.tabActive]}
            onPress={() => setActiveTab('info')}
          >
            <Text style={[styles.tabText, activeTab === 'info' && styles.tabTextActive]}>
              Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'about' && styles.tabActive]}
            onPress={() => setActiveTab('about')}
          >
            <Text style={[styles.tabText, activeTab === 'about' && styles.tabTextActive]}>
              About
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'info' && (
          <View style={styles.tabContent}>
            {/* Price */}
            <View style={styles.priceSection}>
              <Text style={styles.priceValue}>$150.00</Text>
              <Text style={styles.priceLabel}>per person</Text>
            </View>

            {/* Guest Selection */}
            <View style={styles.guestSection}>
              <Text style={styles.sectionTitle}>Guest</Text>
              <GuestCounter
                label="Adult"
                value={guests.adults}
                onIncrement={() => setGuests({ ...guests, adults: guests.adults + 1 })}
                onDecrement={() => guests.adults > 0 && setGuests({ ...guests, adults: guests.adults - 1 })}
              />
              <GuestCounter
                label="Kids"
                value={guests.kids}
                onIncrement={() => setGuests({ ...guests, kids: guests.kids + 1 })}
                onDecrement={() => guests.kids > 0 && setGuests({ ...guests, kids: guests.kids - 1 })}
              />
            </View>

            {/* Time Slots */}
            <View style={styles.timeSection}>
              <Text style={styles.sectionTitle}>Available Times</Text>
              <View style={styles.timeSlotsContainer}>
                {['10:00am', '10:30am', '11:00am', '11:30am'].map((time) => (
                  <TouchableOpacity key={time} style={styles.timeSlot}>
                    <Text style={styles.timeText}>{time}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Book Button */}
            <TouchableOpacity style={styles.bookButton} onPress={() => router.push('/travelbooking')}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'about' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.aboutText}>
              Discover New York's must-see sites from above this helicopter.
            </Text>

            {/* Details */}
            <View style={styles.detailsContainer}>
              <DetailRow icon="baby-carriage" label="Ages 1 - 99" />
              <DetailRow icon="translate" label="Guide in English" />
              <DetailRow icon="clock" label="25 - 30 minutes" />
              <DetailRow icon="wheelchair-accessibility" label="Accessibility" />
            </View>

            {/* Calendar */}
            <TouchableOpacity style={styles.calendarButton} onPress={() => router.push('/travelbooking')}>
              <Text style={styles.calendarButtonText}>Calendar</Text>
            </TouchableOpacity>
          </View>
        )}
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

function GuestCounter({
  label,
  value,
  onIncrement,
  onDecrement,
}: {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <View style={styles.guestRow}>
      <Text style={styles.guestLabel}>{label}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={onDecrement}>
          <Text style={styles.counterText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.counterValue}>{value}</Text>
        <TouchableOpacity style={styles.counterButton} onPress={onIncrement}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailRow({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={styles.detailRow}>
      <MaterialCommunityIcons name={icon as any} size={20} color="#000" />
      <Text style={styles.detailText}>{label}</Text>
    </View>
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
    paddingBottom: 80,
  },
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  tagBadge: {
    backgroundColor: '#ffeb3b',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  reviewsText: {
    fontSize: 11,
    color: '#666',
  },
  imagesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  mainImage: {
    flex: 1,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  secondImage: {
    flex: 1,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  tabActive: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#999',
  },
  tabTextActive: {
    color: '#000',
    fontWeight: '600',
  },
  tabContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  priceSection: {
    alignItems: 'center',
    marginBottom: 12,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  priceLabel: {
    fontSize: 12,
    color: '#666',
  },
  guestSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    paddingVertical: 12,
    gap: 12,
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  guestLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  counterButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  counterValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    minWidth: 20,
    textAlign: 'center',
  },
  timeSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timeSlot: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  bookButton: {
    backgroundColor: '#52c41a',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  aboutText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 12,
  },
  detailsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailText: {
    fontSize: 13,
    color: '#000',
  },
  calendarButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  calendarButtonText: {
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
