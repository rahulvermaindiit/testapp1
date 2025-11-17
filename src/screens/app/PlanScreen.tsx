import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import BottomMenu from '../../components/BottomMenu';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const upcomingSessions = [
  {
    title: 'Sunrise Flow',
    time: '07:00 AM',
    duration: '45 min',
    coach: 'Anya Morgan',
    color: '#FEE4CB',
  },
  {
    title: 'Balance Basics',
    time: '11:45 AM',
    duration: '30 min',
    coach: 'Luke Ray',
    color: '#E7EDFF',
  },
  {
    title: 'Deep Stretch',
    time: '06:15 PM',
    duration: '40 min',
    coach: 'Sofia Lee',
    color: '#FFD9EC',
  },
];

const PlanScreen = () => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F3F2FF',
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingVertical: 24,
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
    weekRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
    },
    dayChip: (active: boolean) => ({
      flex: 1,
      marginHorizontal: 4,
      borderRadius: 18,
      backgroundColor: active ? '#645CFF' : '#FFFFFF',
      paddingVertical: 12,
      alignItems: 'center',
      shadowColor: '#BDB7FF',
      shadowOpacity: active ? 0.4 : 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
    }),
    dayText: (active: boolean) => ({
      color: active ? '#FFFFFF' : '#7A7C93',
      fontWeight: '600',
    }),
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1E1F2E',
      marginTop: 32,
      marginBottom: 16,
    },
    sessionCard: (color: string) => ({
      backgroundColor: color,
      borderRadius: 24,
      padding: 20,
      marginBottom: 16,
    }),
    sessionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    sessionMeta: {
      color: '#4B4D63',
      marginTop: 6,
    },
    coachText: {
      marginTop: 12,
      fontWeight: '600',
      color: '#4B4D63',
    },
    routineCard: {
      borderRadius: 24,
      padding: 22,
      backgroundColor: '#FFFFFF',
      shadowColor: '#DAD4FF',
      shadowOpacity: 0.4,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 12 },
      marginTop: 16,
    },
    routineLabel: {
      fontSize: 16,
      color: '#7A7C93',
    },
    routineValue: {
      marginTop: 6,
      fontSize: 20,
      fontWeight: '700',
      color: '#1E1F2E',
    },
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Weekly Plan</Text>
        <Text style={styles.subheading}>All your sessions in one place</Text>

        <View style={styles.weekRow}>
          {weekDays.map((day, index) => (
            <View key={day} style={styles.dayChip(index === 1)}>
              <Text style={styles.dayText(index === 1)}>{day}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Upcoming sessions</Text>
        {upcomingSessions.map((session) => (
          <View
            key={session.title}
            style={styles.sessionCard(session.color)}
          >
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <Text style={styles.sessionMeta}>
              {session.time} · {session.duration}
            </Text>
            <Text style={styles.coachText}>Coach: {session.coach}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Daily routine</Text>
        <View style={styles.routineCard}>
          <Text style={styles.routineLabel}>Focus</Text>
          <Text style={styles.routineValue}>Balance & Breath</Text>
          <Spacer />
          <Text style={styles.routineLabel}>Equipment</Text>
          <Text style={styles.routineValue}>Mat, Strap, Blocks</Text>
          <Spacer size="lg" />
          <Button title="Adjust schedule" onPress={() => {}} variant="secondary" />
        </View>
      </ScrollView>
      <BottomMenu active="Plan" />
    </View>
  );
};

export default PlanScreen;

