import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../components/SimpleCard';

export const FavoritesPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card title="❤️ Favorites" subtitle="Your saved components and preferences">
        <Text style={styles.description}>
          Keep track of your favorite components and create custom collections for easy access.
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
