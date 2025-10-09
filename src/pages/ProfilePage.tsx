import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../components/SimpleCard';

export const ProfilePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card title="👤 Profile" subtitle="Your account and preferences">
        <Text style={styles.description}>
          Manage your account settings, preferences, and personalize your experience.
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
  },
});
