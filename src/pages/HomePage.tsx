import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Card } from '../components/SimpleCard';

export const HomePage: React.FC = () => {
  const handlePressLink = () => {
    Linking.openURL('https://andrea0x.me');
  };

  return (
    <View style={styles.container}>
      <Card 
        title="Welcome to LiquidUI" 
        subtitle="A modern iOS 26-style design system with glass effects"
      >
        <Text style={styles.description}>
          Explore the beautiful glass components and experience the future of mobile design.
        </Text>
        <Text style={styles.attribution}>
          Created with <Text style={styles.heart}>♥</Text> by{' '}
          <Text style={styles.link} onPress={handlePressLink}>
            Andrea0x.eth
          </Text>
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
    marginBottom: 16,
  },
  attribution: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    marginTop: 8,
  },
  heart: {
    color: '#ff6b6b',
    fontSize: 16,
  },
  link: {
    color: '#4ecdc4',
    textDecorationLine: 'underline',
  },
});