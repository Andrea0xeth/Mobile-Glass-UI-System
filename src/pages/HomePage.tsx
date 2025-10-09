import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../components/SimpleCard';

export const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card 
        title="Welcome to LiquidUI" 
        subtitle="A modern iOS 26-style design system with glass effects"
      >
        <Text style={styles.description}>
          Explore the beautiful glass components and experience the future of mobile design.
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