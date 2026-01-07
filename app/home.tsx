import ProductCard from '@/components/ProductCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Tacos de Pato', rating: 4.5, price: 12.99, discount: '10% Off' },
  { id: '2', name: 'Enchiladas', rating: 4.2, price: 13.99 },
  { id: '3', name: 'Burrito', rating: 4.0, price: 11.99 },
  { id: '4', name: 'Quesadilla', rating: 4.8, price: 10.99, discount: '15% Off' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('ecommerce');

  const handleProductPress = (productId: string) => {
    router.push({
      pathname: '/fooddetail',
      params: { productId, from: 'home' },
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
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="heart" size={20} color="#d32f2f" />
            <Text style={styles.quickActionLabel}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="history" size={20} color="#666" />
            <Text style={styles.quickActionLabel}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="account-multiple" size={20} color="#666" />
            <Text style={styles.quickActionLabel}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <MaterialCommunityIcons name="dots-horizontal" size={20} color="#666" />
            <Text style={styles.quickActionLabel}>More</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Banner */}
        <TouchableOpacity
          style={styles.featuredBanner}
          onPress={() => router.push('/fooddetail')}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.bannerLabel}>Featured</Text>
            <Text style={styles.bannerTitle}>ABS Restaurant</Text>
          </View>
        </TouchableOpacity>

        {/* My Profile Section */}
        <TouchableOpacity
          style={styles.myProfileSection}
          onPress={() => router.push('/profile')}
        >
          <Text style={styles.sectionTitle}>My Profile</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <CategoryButton icon="compass" label="Explore" />
          <CategoryButton icon="food" label="Food" />
          <CategoryButton icon="airplane" label="Travel" />
          <CategoryButton icon="tag-discount" label="Discount" />
        </View>

        {/* Recommendations Section */}
        <View style={styles.recommendationsSection}>
          <TouchableOpacity style={styles.recommendationsHeader}>
            <Text style={styles.recommendationsTitle}>Recommendations</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <View style={styles.productsGrid}>
            {PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onPress={() => handleProductPress(product.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryButton({ icon, label }: { icon: string; label: string }) {
  const router = useRouter();

  const handlePress = () => {
    if (label === 'Explore') {
      router.push('/explore');
    }
  };

  return (
    <TouchableOpacity style={styles.categoryButton} onPress={handlePress}>
      <View style={styles.categoryIconContainer}>
        <MaterialCommunityIcons name={icon as any} size={28} color="#000" />
      </View>
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
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
    marginBottom: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  quickAction: {
    alignItems: 'center',
    gap: 6,
  },
  quickActionLabel: {
    fontSize: 11,
    color: '#666',
  },
  featuredBanner: {
    height: 120,
    backgroundColor: '#a855f7',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  bannerContent: {
    gap: 4,
  },
  bannerLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  myProfileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
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
  recommendationsSection: {
    marginBottom: 32,
  },
  recommendationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
