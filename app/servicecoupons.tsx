import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Coupon {
  id: string;
  discount: string;
  description: string;
  bgColor: string;
}

const COUPONS: Coupon[] = [
  {
    id: '1',
    discount: '$50 OFF',
    description: 'Discount apply after $800 spend',
    bgColor: '#52c41a',
  },
  {
    id: '2',
    discount: 'FREE',
    description: 'Electric supervision for CCTV installation',
    bgColor: '#52c41a',
  },
  {
    id: '3',
    discount: '$20 OFF',
    description: 'Discount apply after $300 spend',
    bgColor: '#52c41a',
  },
];

export default function ServiceCouponsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Coupons</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.couponsContainer}>
          {COUPONS.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </View>
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

function CouponCard({ coupon }: { coupon: Coupon }) {
  return (
    <TouchableOpacity style={[styles.couponCard, { backgroundColor: coupon.bgColor }]}>
      <View style={styles.couponContent}>
        <Text style={styles.discountText}>{coupon.discount}</Text>
        <Text style={styles.descriptionText}>{coupon.description}</Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" />
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 80,
  },
  couponsContainer: {
    gap: 16,
  },
  couponCard: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  couponContent: {
    flex: 1,
    gap: 6,
  },
  discountText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  descriptionText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 16,
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
