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

interface Comment {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  daysAgo: number;
  text: string;
  image?: string;
  likes: number;
}

const COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'Helena',
    avatar: 'https://via.placeholder.com/40',
    rating: 4,
    daysAgo: 2,
    text: 'Body for comments exclusively for services and Professional boards. Add a short summary of experience had.',
    image: 'https://via.placeholder.com/280x150',
    likes: 21,
  },
  {
    id: '2',
    author: 'Mr. Robert Anderson',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
    daysAgo: 7,
    text: 'Body for comments exclusively for services and Professional boards. Add a short summary of experience had.',
    likes: 45,
  },
];

export default function OpinionsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {COMMENTS.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" label="" />
        <NavItem icon="magnify" label="" />
        <NavItem icon="plus-circle-outline" label="" />
        <NavItem icon="bell-outline" label="" />
        <NavItem icon="account-circle-outline" label="" />
      </View>
    </SafeAreaView>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <View style={styles.commentCard}>
      <View style={styles.commentHeader}>
        <View style={styles.authorInfo}>
          <Image source={{ uri: comment.avatar }} style={styles.avatar} />
          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>{comment.author}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingNumber}>{comment.rating}</Text>
              <View style={styles.starsContainer}>
                {[...Array(comment.rating)].map((_, i) => (
                  <MaterialCommunityIcons key={i} name="star" size={12} color="#FFB800" />
                ))}
                {[...Array(5 - comment.rating)].map((_, i) => (
                  <MaterialCommunityIcons
                    key={`empty-${i}`}
                    name="star-outline"
                    size={12}
                    color="#FFB800"
                  />
                ))}
              </View>
              <Text style={styles.timeText}>{comment.daysAgo} days ago</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-vertical" size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <Text style={styles.commentText}>{comment.text}</Text>

      {comment.image && (
        <Image source={{ uri: comment.image }} style={styles.commentImage} />
      )}

      <View style={styles.commentFooter}>
        <MaterialCommunityIcons name="heart" size={16} color="#d32f2f" />
        <Text style={styles.likesText}>{comment.likes} likes</Text>
        {comment.id === '1' && (
          <Text style={styles.questionText}>Space left for coupon?</Text>
        )}
      </View>
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
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 80,
  },
  commentCard: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 16,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  authorInfo: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingNumber: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 1,
  },
  timeText: {
    fontSize: 11,
    color: '#999',
    marginLeft: 4,
  },
  commentText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 12,
  },
  commentImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  likesText: {
    fontSize: 11,
    color: '#666',
  },
  questionText: {
    fontSize: 11,
    color: '#666',
    marginLeft: 8,
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
  navLabel: {
    fontSize: 10,
    color: '#666',
  },
});
