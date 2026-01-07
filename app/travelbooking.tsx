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
    View
} from 'react-native';

export default function TravelBookingScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(17);
  const [selectedMonth] = useState('February 2021');

  const DATES = Array.from({ length: 28 }, (_, i) => i + 1);
  const TIME_SLOTS = [
    { time: '9:00am', available: true, slot: 'Good' },
    { time: '9:30am', available: true, slot: 'Good' },
    { time: '10:00am', available: false, slot: 'Limited' },
    { time: '1:30pm', available: false, slot: 'Sold' },
    { time: '10:00am', available: true, slot: 'Good' },
    { time: '2:00pm', available: false, slot: 'Sold' },
    { time: '11:00am', available: true, slot: 'Good' },
    { time: '3:30pm', available: false, slot: 'Sold' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Helicopter Tour</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Month Selector */}
        <View style={styles.monthHeader}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.monthText}>{selectedMonth}</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Calendar Grid */}
        <View style={styles.calendarContainer}>
          {/* Days of week */}
          <View style={styles.weekDays}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <Text key={day} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>

          {/* Dates */}
          <View style={styles.datesGrid}>
            {DATES.map((date) => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateButton,
                  selectedDate === date && styles.dateButtonSelected,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.dateTextSelected,
                  ]}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Time Slots Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#52c41a' }]} />
            <Text style={styles.legendText}>Good</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#ffeb3b' }]} />
            <Text style={styles.legendText}>Limited</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#d32f2f' }]} />
            <Text style={styles.legendText}>Sold</Text>
          </View>
        </View>

        {/* Time Slots */}
        <View style={styles.timeSlotsContainer}>
          {TIME_SLOTS.map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlotButton,
                !slot.available && styles.timeSlotButtonDisabled,
                slot.slot === 'Good' && styles.timeSlotGood,
                slot.slot === 'Limited' && styles.timeSlotLimited,
                slot.slot === 'Sold' && styles.timeSlotSold,
              ]}
              disabled={!slot.available}
            >
              <Text
                style={[
                  styles.timeSlotText,
                  !slot.available && styles.timeSlotTextDisabled,
                ]}
              >
                {slot.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Book Button */}
        <TouchableOpacity style={styles.bookButton} onPress={() => router.push('/thankscreen')}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
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
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  monthText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  calendarContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    width: 35,
    textAlign: 'center',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  dateButton: {
    width: '13.33%',
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
  },
  dateButtonSelected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  dateTextSelected: {
    color: '#fff',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  legendText: {
    fontSize: 11,
    color: '#666',
  },
  timeSlotsContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  timeSlotButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  timeSlotGood: {
    backgroundColor: '#52c41a',
  },
  timeSlotLimited: {
    backgroundColor: '#ffeb3b',
  },
  timeSlotSold: {
    backgroundColor: '#d32f2f',
  },
  timeSlotButtonDisabled: {
    opacity: 0.6,
  },
  timeSlotText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  timeSlotTextDisabled: {
    color: '#fff',
  },
  bookButton: {
    marginHorizontal: 16,
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
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
