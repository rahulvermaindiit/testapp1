import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';

const featuredClasses = [
  {
    title: 'Yoga Group',
    subtitle: 'Create space pose',
    description: 'Shake loose any tension, stretch, breathe deep, and reset.',
    level: 'Balance',
    duration: '40 min',
    image:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=800&q=70',
  },
  {
    title: 'Meditation Circle',
    subtitle: 'Calm focus',
    description: 'Ease into meditation with guided affirmations and breath.',
    level: 'Calm',
    duration: '25 min',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=70',
  },
];

const recommended = [
  { title: 'Sunrise Flow', coach: 'Anya Morgan', time: '07:00 · 35 min' },
  { title: 'Deep Stretch', coach: 'Sofia Lee', time: '12:15 · 25 min' },
  { title: 'Wind Down', coach: 'Marcel Jung', time: '20:00 · 30 min' },
];

const ExploreScreen = () => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F3F2FF',
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 32,
    },
    heading: {
      fontSize: 24,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    subheading: {
      color: '#7A7C93',
      marginTop: 4,
    },
    card: {
      borderRadius: 32,
      backgroundColor: '#FFFFFF',
      marginTop: 24,
      overflow: 'hidden',
      shadowColor: '#DAD4FF',
      shadowOpacity: 0.4,
      shadowRadius: 24,
      shadowOffset: { width: 0, height: 12 },
    },
    cardImage: {
      height: 220,
      width: '100%',
    },
    cardBody: {
      padding: 22,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    cardSubtitle: {
      marginTop: 4,
      color: '#7A7C93',
    },
    cardDescription: {
      marginTop: 10,
      color: '#4B4D63',
      lineHeight: 20,
    },
    badgeRow: {
      flexDirection: 'row',
      marginTop: 16,
    },
    badge: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 16,
      backgroundColor: '#F3F2FF',
      marginRight: 10,
      color: '#645CFF',
      fontWeight: '600',
    },
    recommendationCard: {
      marginTop: 24,
      borderRadius: 26,
      padding: 22,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#ECEAFD',
    },
    recommendationRow: {
      marginBottom: 16,
    },
    recommendationTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    recommendationMeta: {
      color: '#7A7C93',
      marginTop: 4,
    },
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Explore classes</Text>
        <Text style={styles.subheading}>Fresh sessions curated for you</Text>

        {featuredClasses.map((item) => (
          <View key={item.title} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <View style={styles.badgeRow}>
                <Text style={styles.badge}>{item.level}</Text>
                <Text style={styles.badge}>{item.duration}</Text>
              </View>
              <Spacer size="lg" />
              <Button title="Join session" onPress={() => {}} />
            </View>
          </View>
        ))}

        <View style={styles.recommendationCard}>
          {recommended.map((rec) => (
            <View key={rec.title} style={styles.recommendationRow}>
              <Text style={styles.recommendationTitle}>{rec.title}</Text>
              <Text style={styles.recommendationMeta}>
                {rec.coach} · {rec.time}
              </Text>
            </View>
          ))}
          <Button title="View all classes" onPress={() => {}} variant="secondary" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

