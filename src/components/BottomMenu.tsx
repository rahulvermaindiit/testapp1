import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AppStackParamList } from '../navigation/AppStack';

type BottomMenuProps = {
  active: keyof AppStackParamList;
};

const menuItems: Array<{
  label: string;
  icon: string;
  route: keyof AppStackParamList;
  primary?: boolean;
}> = [
  { label: 'Home', icon: '🏠', route: 'Dashboard' },
  { label: 'Plan', icon: '🗓️', route: 'Plan' },
  { label: 'Add', icon: '+', route: 'Plan', primary: true },
  { label: 'Stats', icon: '📊', route: 'Stats' },
  { label: 'Profile', icon: '😊', route: 'Profile' },
];

const BottomMenu = ({ active }: BottomMenuProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {menuItems.map((item) => {
          const isActive = item.route === active;
          return (
            <Pressable
              key={item.label}
              style={styles.item}
              onPress={() => navigation.navigate(item.route)}
            >
              <View
                style={[
                  styles.iconBase,
                  isActive && styles.iconActive,
                  item.primary && styles.iconPrimary,
                ]}
              >
                <Text
                  style={[
                    styles.iconText,
                    (isActive || item.primary) && styles.iconTextActive,
                    item.primary && styles.iconTextPrimary,
                  ]}
                >
                  {item.icon}
                </Text>
              </View>
              <Text
                style={[
                  styles.label,
                  isActive && styles.labelActive,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 12,
    backgroundColor: '#F3F2FF',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECEAFD',
    shadowColor: '#C5C1EA',
    shadowOpacity: 0.35,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 14 },
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  iconBase: {
    width: 46,
    height: 46,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E0DEFF',
    backgroundColor: '#F3F2FF',
  },
  iconActive: {
    backgroundColor: '#645CFF',
    borderColor: '#645CFF',
  },
  iconPrimary: {
    width: 60,
    height: 60,
    borderRadius: 24,
    backgroundColor: '#1E1F2E',
    borderWidth: 0,
  },
  iconText: {
    fontSize: 20,
    color: '#8F90A6',
  },
  iconTextActive: {
    color: '#FFFFFF',
  },
  iconTextPrimary: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A0A1B3',
  },
  labelActive: {
    color: '#1E1F2E',
  },
});

export default BottomMenu;

