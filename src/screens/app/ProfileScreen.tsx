import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';
import BottomMenu from '../../components/BottomMenu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/slices/authSlice';
import { formatEmailName } from '../../utils/helpers';

const preferences = [
  { label: 'Experience', value: 'Intermediate' },
  { label: 'Focus', value: 'Mind & Balance' },
  { label: 'Availability', value: 'Mornings' },
];

const achievements = [
  { title: 'Balance Master', description: 'Completed 12 balance flows' },
  { title: 'Calm Mind', description: '7-day meditation streak' },
  { title: 'Consistency Star', description: '30 sessions in 2 months' },
];

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

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
    heroCard: {
      borderRadius: 30,
      backgroundColor: '#FFFFFF',
      padding: 24,
      shadowColor: '#D7D3FF',
      shadowOpacity: 0.4,
      shadowRadius: 24,
      shadowOffset: { width: 0, height: 12 },
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: 24,
      backgroundColor: '#FFE3F3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontSize: 30,
      fontWeight: '700',
      color: '#BF4EFF',
    },
    name: {
      fontSize: 24,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    email: {
      color: '#7A7C93',
      marginTop: 4,
    },
    badge: {
      marginTop: 12,
      alignSelf: 'flex-start',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      backgroundColor: '#F5F1FF',
      color: '#645CFF',
      fontWeight: '600',
    },
    sectionTitle: {
      marginTop: 32,
      fontSize: 18,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    preferenceCard: {
      marginTop: 16,
      borderRadius: 24,
      padding: 20,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#ECEAFD',
    },
    preferenceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    preferenceLabel: {
      color: '#7A7C93',
    },
    preferenceValue: {
      color: '#1E1F2E',
      fontWeight: '600',
    },
    achievementsCard: {
      marginTop: 16,
      borderRadius: 28,
      backgroundColor: '#645CFF',
      padding: 22,
    },
    achievementTitle: {
      color: '#FDFBFF',
      fontWeight: '700',
      fontSize: 16,
    },
    achievementDesc: {
      color: '#E5E2FF',
      marginTop: 4,
    },
    achievementRow: {
      marginTop: 16,
    },
    inspirationCard: {
      marginTop: 24,
      borderRadius: 26,
      overflow: 'hidden',
    },
    inspirationImage: {
      height: 180,
      width: '100%',
    },
    inspirationOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.35)',
    },
    inspirationText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '700',
    },
    inspirationSub: {
      color: '#E5E2FF',
      marginTop: 4,
    },
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <View style={styles.headerRow}>
            <View>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {formatEmailName(user?.email).charAt(0)}
                </Text>
              </View>
              <Spacer size="sm" />
              <Text style={styles.name}>
                {formatEmailName(user?.email ?? 'Guest Explorer')}
              </Text>
              <Text style={styles.email}>{user?.email}</Text>
              <Text style={styles.badge}>Premium member</Text>
            </View>
            <Button title="Edit" onPress={() => {}} variant="ghost" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.preferenceCard}>
          {preferences.map((item) => (
            <View key={item.label} style={styles.preferenceRow}>
              <Text style={styles.preferenceLabel}>{item.label}</Text>
              <Text style={styles.preferenceValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsCard}>
          {achievements.map((achievement) => (
            <View key={achievement.title} style={styles.achievementRow}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDesc}>
                {achievement.description}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.inspirationCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=70',
            }}
            style={styles.inspirationImage}
          />
          <View style={styles.inspirationOverlay}>
            <Text style={styles.inspirationText}>Yoga Group</Text>
            <Text style={styles.inspirationSub}>
              Follow the next live session today at 4 PM.
            </Text>
          </View>
        </View>

        <Spacer size="xl" />
        <Button
          title="Log Out"
          onPress={() => dispatch(logoutUser())}
          variant="secondary"
        />
      </ScrollView>
      <BottomMenu active="Profile" />
    </View>
  );
};

export default ProfileScreen;

