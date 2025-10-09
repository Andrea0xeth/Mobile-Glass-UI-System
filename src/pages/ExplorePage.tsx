import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../components/SimpleCard';

export const ExplorePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card title="🔍 Explore" subtitle="Discover new features and components">
        <Text style={styles.description}>
          Browse through our extensive collection of glass-effect components and find the perfect ones for your project.
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
