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

const SAVED_LISTS = [
  { id: '1', name: 'Trip 1', count: '245 saved', image: 'https://via.placeholder.com/60' },
  { id: '2', name: 'List 2', count: '2 saved', image: 'https://via.placeholder.com/60' },
  { id: '3', name: 'Shared List', count: '3 friends', image: 'https://via.placeholder.com/60' },
];

export default function TravelSavedListsScreen() {
  const router = useRouter();
  const [notifyAds, setNotifyAds] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New York</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Saved Section */}
        <View style={styles.savedSection}>
          <View style={styles.savedHeader}>
            <Text style={styles.savedLabel}>Saved</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="plus" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.savedDescription}>Add to your list.</Text>
        </View>

        {/* My Lists */}
        <View style={styles.listsSection}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>My List</Text>
            <TouchableOpacity>
              <Text style={styles.addNewText}>Add new list</Text>
            </TouchableOpacity>
          </View>

          {SAVED_LISTS.map((list) => (
            <TouchableOpacity key={list.id} style={styles.listItem}>
              <Image source={{ uri: list.image }} style={styles.listImage} />
              <View style={styles.listInfo}>
                <Text style={styles.listName}>{list.name}</Text>
                <Text style={styles.listCount}>{list.count}</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Notifications */}
        <View style={styles.notificationSection}>
          <TouchableOpacity style={styles.notificationRow}>
            <Text style={styles.notificationLabel}>Notify me about ads / discounts</Text>
            <View style={[styles.toggle, notifyAds && styles.toggleActive]}>
              <View
                style={[
                  styles.toggleDot,
                  notifyAds && styles.toggleDotActive,
                ]}
              />
            </View>
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
  savedSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  savedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  savedLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  savedDescription: {
    fontSize: 12,
    color: '#666',
  },
  listsSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  addNewText: {
    fontSize: 12,
    color: '#666',
    textDecorationLine: 'underline',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  listImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
  },
  listInfo: {
    flex: 1,
  },
  listName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  listCount: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  notificationSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationLabel: {
    fontSize: 13,
    color: '#000',
  },
  toggle: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleActive: {
    backgroundColor: '#52c41a',
  },
  toggleDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  toggleDotActive: {
    alignSelf: 'flex-end',
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
