import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../components/SimpleCard';

interface SettingsPageProps {
  onDesignSystemPress: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onDesignSystemPress }) => {
  return (
    <View style={styles.container}>
      <Card title="⚙️ Settings" subtitle="App configuration and preferences">
        <Text style={styles.description}>
          Customize your experience and access advanced features.
        </Text>
      </Card>

      <TouchableOpacity onPress={onDesignSystemPress}>
        <Card title="🎨 Design System" subtitle="Explore all components">
          <Text style={styles.cardText}>
            Browse our complete collection of glass-effect components
          </Text>
        </Card>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  cardText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 20,
  },
});
