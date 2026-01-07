import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProductCardProps {
  id: string;
  name: string;
  rating?: number;
  discount?: string;
  price: number;
  image?: string;
  onPress: () => void;
}

export default function ProductCard({
  id,
  name,
  rating,
  discount,
  price,
  image,
  onPress,
}: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image || 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        {discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{discount}</Text>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        {rating && (
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={12} color="#FFB800" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        )}
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginHorizontal: '1%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#e0e0e0',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    padding: 12,
    gap: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 11,
    color: '#666',
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000',
  },
});
