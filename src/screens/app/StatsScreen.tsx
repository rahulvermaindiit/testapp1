import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import BottomMenu from '../../components/BottomMenu';

const highlightStats = [
  { label: 'Sessions', value: '18', sub: 'This month', color: '#FEE4CB' },
  { label: 'Minutes', value: '620', sub: 'Focused time', color: '#E7EDFF' },
  { label: 'Calories', value: '3.1k', sub: 'Estimated', color: '#FFD9EC' },
];

const progressTimeline = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 45 },
  { day: 'Wed', value: 70 },
  { day: 'Thu', value: 30 },
  { day: 'Fri', value: 80 },
  { day: 'Sat', value: 55 },
  { day: 'Sun', value: 40 },
];

const StatsScreen = () => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F3F2FF',
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 40,
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
    highlightRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
    },
    highlightCard: (color: string) => ({
      width: '32%',
      backgroundColor: color,
      borderRadius: 24,
      padding: 16,
    }),
    highlightLabel: {
      color: '#4B4D63',
      fontSize: 12,
      textTransform: 'uppercase',
    },
    highlightValue: {
      marginTop: 10,
      fontSize: 24,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    highlightSub: {
      marginTop: 4,
      color: '#4B4D63',
    },
    timelineCard: {
      marginTop: 32,
      borderRadius: 28,
      backgroundColor: '#FFFFFF',
      padding: 20,
      shadowColor: '#DAD4FF',
      shadowOpacity: 0.4,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 12 },
    },
    timelineTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1E1F2E',
    },
    barRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 28,
    },
    barWrapper: {
      alignItems: 'center',
      width: 30,
    },
    bar: (value: number) => ({
      width: 26,
      borderRadius: 12,
      height: value,
      backgroundColor: '#645CFF',
    }),
    barLabel: {
      marginTop: 8,
      color: '#7A7C93',
    },
    historyCard: {
      marginTop: 32,
      borderRadius: 26,
      padding: 22,
      backgroundColor: '#FCFCFF',
      borderWidth: 1,
      borderColor: '#ECEAFD',
    },
    historyRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 14,
    },
    historyLabel: {
      color: '#7A7C93',
    },
    historyValue: {
      color: '#1E1F2E',
      fontWeight: '700',
    },
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Performance</Text>
        <Text style={styles.subheading}>Track your wellness journey</Text>

        <View style={styles.highlightRow}>
          {highlightStats.map((stat) => (
            <View key={stat.label} style={styles.highlightCard(stat.color)}>
              <Text style={styles.highlightLabel}>{stat.label}</Text>
              <Text style={styles.highlightValue}>{stat.value}</Text>
              <Text style={styles.highlightSub}>{stat.sub}</Text>
            </View>
          ))}
        </View>

        <View style={styles.timelineCard}>
          <Text style={styles.timelineTitle}>Focus time (min)</Text>
          <View style={styles.barRow}>
            {progressTimeline.map((entry) => (
              <View key={entry.day} style={styles.barWrapper}>
                <View style={styles.bar(entry.value)} />
                <Text style={styles.barLabel}>{entry.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.historyCard}>
          <View style={styles.historyRow}>
            <Text style={styles.historyLabel}>Streak</Text>
            <Text style={styles.historyValue}>11 days</Text>
          </View>
          <View style={styles.historyRow}>
            <Text style={styles.historyLabel}>Favorite style</Text>
            <Text style={styles.historyValue}>Balance flow</Text>
          </View>
          <View style={styles.historyRow}>
            <Text style={styles.historyLabel}>Meditation time</Text>
            <Text style={styles.historyValue}>185 min</Text>
          </View>
          <Spacer size="lg" />
          <Button title="Download report" onPress={() => {}} variant="primary" />
        </View>
      </ScrollView>
      <BottomMenu active="Stats" />
    </View>
  );
};

export default StatsScreen;

