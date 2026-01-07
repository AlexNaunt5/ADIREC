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

const SERVICE_DATA = {
  '1': {
    name: 'Home Bros Supply',
    rating: 4.7,
    tags: ['FG', 'B'],
    image: 'https://via.placeholder.com/400x200',
  },
};

export default function ServiceDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('info');

  const service = SERVICE_DATA['1'];

  const SERVICES_OFFERED = [
    { name: 'Plumber', price: '$50 - $300' },
    { name: 'Electric', price: '$20 - $100' },
    { name: 'CCTV', price: '$15 per camera' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{service.name}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="heart-outline" size={24} color="#d32f2f" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Image source={{ uri: service.image }} style={styles.serviceImage} />

        {/* Title and Rating */}
        <View style={styles.titleSection}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={16} color="#FFB800" />
            <Text style={styles.ratingText}>{service.rating}</Text>
          </View>
          <View style={styles.tagsContainer}>
            {service.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.tabActive]}
            onPress={() => setActiveTab('info')}
          >
            <Text style={[styles.tabText, activeTab === 'info' && styles.tabTextActive]}>
              Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'contact' && styles.tabActive]}
            onPress={() => setActiveTab('contact')}
          >
            <Text style={[styles.tabText, activeTab === 'contact' && styles.tabTextActive]}>
              Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'opinions' && styles.tabActive]}
            onPress={() => setActiveTab('opinions')}
          >
            <Text style={[styles.tabText, activeTab === 'opinions' && styles.tabTextActive]}>
              Opinions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'coupon' && styles.tabActive]}
            onPress={() => setActiveTab('coupon')}
          >
            <Text style={[styles.tabText, activeTab === 'coupon' && styles.tabTextActive]}>
              Coupon
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'info' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Services</Text>
            {SERVICES_OFFERED.map((svc, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={styles.serviceName}>{svc.name}</Text>
                <Text style={styles.servicePrice}>{svc.price}</Text>
              </View>
            ))}

            {/* Quick Actions */}
            <View style={styles.actionsGrid}>
              <ActionBox icon="cog" label="Services" />
              <ActionBox icon="map-marker" label="Contact" />
              <ActionBox icon="comment-multiple-outline" label="Opinions" />
              <ActionBox icon="ticket-percent" label="Coupon" />
            </View>

            {/* Scan Code Button */}
            <TouchableOpacity style={styles.scanButton}>
              <Text style={styles.scanButtonText}>Scan Code</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'contact' && (
          <View style={styles.tabContent}>
            <TouchableOpacity style={styles.contactRow} onPress={() => router.push('/servicecontact')}>
              <Text style={styles.contactLabel}>View Contact Details</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'coupon' && (
          <View style={styles.tabContent}>
            <TouchableOpacity style={styles.contactRow} onPress={() => router.push('/servicecoupons')}>
              <Text style={styles.contactLabel}>View Coupons</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
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

function ActionBox({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={styles.actionBox}>
      <MaterialCommunityIcons name={icon as any} size={24} color="#000" />
      <Text style={styles.actionLabel}>{label}</Text>
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
    paddingBottom: 60,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#1890ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  serviceItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  servicePrice: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  actionBox: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  scanButton: {
    backgroundColor: '#999',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  scanButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
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
