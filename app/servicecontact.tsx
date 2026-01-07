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
    View
} from 'react-native';

export default function ServiceContactScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('map');

  const businessHours = [
    { day: 'Monday', hours: '8:00am - 5:00pm' },
    { day: 'Tuesday', hours: '8:00am - 5:00pm' },
    { day: 'Wednesday', hours: '8:00am - 5:00pm' },
    { day: 'Thursday', hours: '8:00am - 5:00pm' },
    { day: 'Friday', hours: '8:00am - 5:00pm' },
    { day: 'Saturday', hours: '8:00am - 1:00pm' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'map' && styles.tabActive]}
            onPress={() => setActiveTab('map')}
          >
            <Text style={[styles.tabText, activeTab === 'map' && styles.tabTextActive]}>
              Map
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'quick' && styles.tabActive]}
            onPress={() => setActiveTab('quick')}
          >
            <Text style={[styles.tabText, activeTab === 'quick' && styles.tabTextActive]}>
              Quick Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'hours' && styles.tabActive]}
            onPress={() => setActiveTab('hours')}
          >
            <Text style={[styles.tabText, activeTab === 'hours' && styles.tabTextActive]}>
              Hours
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'map' && (
          <View style={styles.tabContent}>
            {/* Open Status */}
            <Text style={styles.openStatus}>Open until 5:00pm</Text>

            {/* Map */}
            <Image source={{ uri: 'https://via.placeholder.com/400x300' }} style={styles.mapImage} />

            {/* Business Info */}
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="phone" size={20} color="#000" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Phone</Text>
                  <Text style={styles.infoValue}>+1 210 9557-2354</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="map-marker" size={20} color="#000" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Address</Text>
                  <Text style={styles.infoValue}>7325 Centergate St, San Antonio, Tx, 78217, United States</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="earth" size={20} color="#000" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Web</Text>
                  <Text style={styles.infoValue}>homebrossupply.com</Text>
                </View>
              </View>
            </View>

            {/* Contact Button */}
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'quick' && (
          <View style={styles.tabContent}>
            <View style={styles.quickContactContainer}>
              <QuickContactButton icon="phone" label="Call" phone="+1 210 9557-2354" />
              <QuickContactButton icon="whatsapp" label="Whatsapp" phone="+1 210 9557-2354" />
              <QuickContactButton icon="email" label="E-mail" email="hello@homebrossupply.com" />
            </View>
          </View>
        )}

        {activeTab === 'hours' && (
          <View style={styles.tabContent}>
            {/* Open Status */}
            <Text style={styles.openStatus}>Open until 5:00pm</Text>

            {/* Map */}
            <Image source={{ uri: 'https://via.placeholder.com/400x200' }} style={styles.mapImageSmall} />

            {/* Hours */}
            <View style={styles.hoursSection}>
              {businessHours.map((item, index) => (
                <View key={index} style={styles.hourRow}>
                  <Text style={styles.dayText}>{item.day}</Text>
                  <Text style={styles.timeText}>{item.hours}</Text>
                </View>
              ))}
            </View>

            {/* Business Info */}
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="phone" size={20} color="#000" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Phone</Text>
                  <Text style={styles.infoValue}>+1 210 9557-2354</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="map-marker" size={20} color="#000" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Address</Text>
                  <Text style={styles.infoValue}>7325 Centergate St, San Antonio, Tx, 78217, United States</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="earth" size={20} color="#000" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Web</Text>
                  <Text style={styles.infoValue}>homebrossupply.com</Text>
                </View>
              </View>
            </View>

            {/* Contact Button */}
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" />
        <NavItem icon="calendar" />
        <NavItem icon="shopping-bag-outline" />
        <NavItem icon="heart-outline" />
        <NavItem icon="account-outline" />
      </View>
    </SafeAreaView>
  );
}

function QuickContactButton({
  icon,
  label,
  phone,
  email,
}: {
  icon: string;
  label: string;
  phone?: string;
  email?: string;
}) {
  return (
    <TouchableOpacity style={styles.quickContactButton}>
      <View style={styles.quickContactContent}>
        <Text style={styles.quickContactLabel}>{label}</Text>
        <Text style={styles.quickContactValue}>{phone || email}</Text>
      </View>
      <View style={styles.quickContactIcon}>
        <MaterialCommunityIcons name={icon as any} size={20} color="#fff" />
      </View>
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
    fontSize: 12,
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
  openStatus: {
    fontSize: 13,
    fontWeight: '600',
    color: '#52c41a',
    textAlign: 'center',
    marginBottom: 8,
  },
  mapImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
  mapImageSmall: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
  infoSection: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  infoValue: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  contactButton: {
    backgroundColor: '#52c41a',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  quickContactContainer: {
    gap: 12,
  },
  quickContactButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  quickContactContent: {
    flex: 1,
  },
  quickContactLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  quickContactValue: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  quickContactIcon: {
    backgroundColor: '#52c41a',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hoursSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    gap: 8,
    marginBottom: 12,
  },
  hourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
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
