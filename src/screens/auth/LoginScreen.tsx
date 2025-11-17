import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ILLUSTRATION =
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const onLogin = () => {
    Alert.alert('Login', `Email: ${email || 'Not provided'}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image source={{ uri: ILLUSTRATION }} style={styles.hero} />

        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue exploring the app.
          </Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="you@example.com"
              placeholderTextColor="#9AA0B4"
              style={styles.input}
              textContentType="emailAddress"
            />
          </View>

          <View style={styles.fieldGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Password</Text>
              <Pressable onPress={() => setSecureEntry((prev) => !prev)}>
                <Text style={styles.toggle}>
                  {secureEntry ? 'Show' : 'Hide'}
                </Text>
              </Pressable>
            </View>

            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureEntry}
              autoCapitalize="none"
              placeholder="••••••••"
              placeholderTextColor="#9AA0B4"
              style={styles.input}
              textContentType="password"
            />
          </View>

          <Pressable style={styles.rememberRow}>
            <View style={styles.checkbox} />
            <Text style={styles.rememberText}>Remember me</Text>
          </Pressable>

          <Pressable style={styles.primaryButton} onPress={onLogin}>
            <Text style={styles.primaryText}>Log In</Text>
          </Pressable>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Forgot password?</Text>
            <Pressable>
              <Text style={styles.link}>Reset</Text>
            </Pressable>
          </View>

          {/* <View style={styles.footerRow}>
            <Text style={styles.footerText}>New here?</Text>
            <Pressable>
              <Text style={styles.link}>Create account</Text>
            </Pressable>
          </View> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  hero: {
    width: '100%',
    height: 280,
  },
  card: {
    marginHorizontal: 24,
    marginTop: -48,
    borderRadius: 24,
    padding: 24,
    backgroundColor: '#111827',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 24,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 15,
    color: '#CBD5F5',
  },
  fieldGroup: {
    marginTop: 20,
  },
  label: {
    color: '#CBD5F5',
    fontSize: 14,
    fontWeight: '600',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggle: {
    color: '#60A5FA',
    fontWeight: '600',
    fontSize: 13,
  },
  input: {
    marginTop: 8,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#F8FAFC',
    fontSize: 16,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#64748B',
    marginRight: 8,
  },
  rememberText: {
    color: '#CBD5F5',
    fontSize: 13,
  },
  primaryButton: {
    marginTop: 24,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryText: {
    color: '#F8FAFC',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    color: '#94A3B8',
    fontSize: 14,
    marginRight: 4,
  },
  link: {
    color: '#60A5FA',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;


