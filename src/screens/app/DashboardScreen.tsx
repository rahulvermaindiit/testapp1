import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/slices/authSlice';
import { formatEmailName } from '../../utils/helpers';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';
import BottomMenu from '../../components/BottomMenu';
import type { AppStackParamList } from '../../navigation/AppStack';

const planCards = [
  {
    title: 'Yoga Group',
    level: 'Balance',
    time: '08:30 AM',
    color: '#FEE4CB',
  },
  {
    title: 'Meditation',
    level: 'Calm',
    time: '10:45 AM',
    color: '#E7EDFF',
  },
];

const quickStats = [
  { label: 'Focus', value: '5.3h', sub: 'Deep work' },
  { label: 'Energy', value: '80%', sub: 'Good' },
  { label: 'Calories', value: '540', sub: 'Burned' },
];

const DashboardScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F3F2FF',
    },
    screen: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingBottom: 32,
      paddingTop: 12,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerText: {
      fontSize: 18,
      color: '#37394A',
      fontWeight: '600',
    },
    notificationDot: {
      width: 48,
      height: 48,
      borderRadius: 16,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#9F9BC6',
      shadowOpacity: 0.3,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
    },
    heroCard: {
      backgroundColor: '#645CFF',
      borderRadius: 28,
      padding: 24,
      marginBottom: 20,
      flexDirection: 'row',
    },
    heroText: {
      flex: 1,
    },
    heroTitle: {
      color: '#FDFBFF',
      fontSize: 20,
      fontWeight: '700',
    },
    heroSubtitle: {
      color: '#E5E2FF',
      marginTop: 6,
      lineHeight: 20,
    },
    heroIllustration: {
      width: 90,
      height: 90,
      borderRadius: 24,
      marginLeft: 12,
    },
    planTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1E1F2E',
      marginBottom: 12,
    },
    planRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    planCard: {
      flex: 1,
      borderRadius: 24,
      padding: 18,
    },
    planText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1E1F2E',
    },
    planMeta: {
      marginTop: 8,
      color: '#5A5C6D',
    },
    planTime: {
      marginTop: 16,
      fontSize: 22,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    profileCard: {
      marginTop: 24,
      padding: 22,
      borderRadius: 28,
      backgroundColor: '#FFFFFF',
      shadowColor: '#D7D3FF',
      shadowOpacity: 0.4,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 10 },
    },
    profileRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 20,
      backgroundColor: '#FFE3F3',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    avatarInitial: {
      fontSize: 24,
      fontWeight: '700',
      color: '#BF4EFF',
    },
    nameText: {
      fontSize: 20,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    emailText: {
      color: '#7A7C93',
      marginTop: 4,
    },
    statsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    statBubble: {
      flex: 1,
      borderRadius: 22,
      padding: 16,
      backgroundColor: '#F7F6FF',
      marginHorizontal: 6,
    },
    statLabel: {
      color: '#7A7C93',
    },
    statValue: {
      marginTop: 6,
      fontSize: 22,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    statSub: {
      marginTop: 2,
      color: '#7A7C93',
    },
  });

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerText}>Today</Text>
            <Text style={{ color: '#7A7C93' }}>
              Hey {formatEmailName(user?.email)}
            </Text>
          </View>
          <View style={styles.notificationDot}>
            <Text>🔔</Text>
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroText}>
            <Text style={styles.heroTitle}>Daily challenge</Text>
            <Text style={styles.heroSubtitle}>
              Stay consistent with quick balance and breathing drills.
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=300&q=60',
            }}
            style={styles.heroIllustration}
          />
        </View>

        <Text style={styles.planTitle}>Your plan</Text>
        <View style={styles.planRow}>
          {planCards.map((plan, index) => (
            <View
              key={plan.title}
              style={[
                styles.planCard,
                {
                  backgroundColor: plan.color,
                  marginRight: index === 0 ? 8 : 0,
                  marginLeft: index === planCards.length - 1 ? 8 : 0,
                },
              ]}
            >
              <Text style={styles.planText}>{plan.title}</Text>
              <Text style={styles.planMeta}>{plan.level}</Text>
              <Text style={styles.planTime}>{plan.time}</Text>
            </View>
          ))}
        </View>

        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitial}>
                {formatEmailName(user?.email).charAt(0)}
              </Text>
            </View>
            <View>
              <Text style={styles.nameText}>
                {formatEmailName(user?.email ?? 'Explorer')}
              </Text>
              <Text style={styles.emailText}>{user?.email}</Text>
            </View>
          </View>

          <View style={styles.statsWrapper}>
            {quickStats.map((stat) => (
              <View key={stat.label} style={styles.statBubble}>
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statSub}>{stat.sub}</Text>
              </View>
            ))}
          </View>
        </View>

        <Spacer size="xl" />
        <Button
          title="Explore classes"
          onPress={() => navigation.navigate('Explore')}
          variant="primary"
        />
        <Spacer size="lg" />
        <Button
          title="Log Out"
          onPress={() => dispatch(logoutUser())}
          variant="ghost"
        />
      </ScrollView>

      <BottomMenu active="Dashboard" />
    </View>
  );
};

export default DashboardScreen;

