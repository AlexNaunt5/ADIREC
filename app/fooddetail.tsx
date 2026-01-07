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

export default function FoodDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('info');

  const handleOrderBefore = () => {
    router.push('/foodservicesurvey');
  };

  const handleReview = () => {
    router.push('/reviewscreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tacos de Pato</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="heart-outline" size={24} color="#d32f2f" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Food Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/400x250' }}
          style={styles.foodImage}
        />

        {/* Food Title and Rating */}
        <View style={styles.titleSection}>
          <View>
            <Text style={styles.foodName}>Tacos de Pato</Text>
            <View style={styles.tagContainer}>
              {['Green', 'FG', 'A', 'Yellow'].map((tag, i) => (
                <View key={i} style={[styles.tag, { backgroundColor: ['#52c41a', '#1890ff', '#d32f2f', '#faad14'][i] }]}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.tabActive]}
            onPress={() => setActiveTab('info')}
          >
            <Text style={[styles.tabText, activeTab === 'info' && styles.tabTextActive]}>
              Order Before
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'menu' && styles.tabActive]}
            onPress={() => setActiveTab('menu')}
          >
            <Text style={[styles.tabText, activeTab === 'menu' && styles.tabTextActive]}>
              Mi Perfil
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'info' && (
          <View style={styles.tabContent}>
            {/* Quick Options */}
            <View style={styles.optionsGrid}>
              <OptionBox icon="cart" label="Order Before" />
              <OptionBox icon="account-multiple" label="Friends Favourites" />
              <OptionBox icon="comment-multiple-outline" label="Opinions" />
              <OptionBox icon="ticket-percent" label="Coupon" />
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.primaryButton} onPress={handleOrderBefore}>
                <Text style={styles.primaryButtonText}>Order Before</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={handleReview}>
                <Text style={styles.secondaryButtonText}>Leave Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === 'menu' && (
          <View style={styles.tabContent}>
            <Text style={styles.menuText}>Menu items coming soon...</Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" label="" />
        <NavItem icon="circle-outline" label="" />
        <NavItem icon="shopping-bag-outline" label="" />
        <NavItem icon="heart-outline" label="" />
        <NavItem icon="account-outline" label="" />
      </View>
    </SafeAreaView>
  );
}

function OptionBox({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={styles.optionBox}>
      <MaterialCommunityIcons name={icon as any} size={24} color="#000" />
      <Text style={styles.optionLabel} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

function NavItem({ icon, label }: { icon: string; label: string }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <MaterialCommunityIcons name={icon as any} size={24} color="#666" />
      {label && <Text style={styles.navLabel}>{label}</Text>}
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
    color: '#999',
    flex: 1,
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 60,
  },
  foodImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  foodName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  tag: {
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
  },
  tabActive: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999',
    textAlign: 'center',
  },
  tabTextActive: {
    color: '#000',
  },
  tabContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  optionBox: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  optionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  buttonsContainer: {
    gap: 12,
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
  menuText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingVertical: 20,
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
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navLabel: {
    fontSize: 10,
    color: '#666',
  },
});
