import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { Ionicons } from '@expo/vector-icons';

export const FeaturesList: React.FC = () => {
  const features = [
    { icon: 'sparkles', title: 'Glass Effects', description: 'Native iOS 26 liquid glass' },
    { icon: 'palette', title: 'Design System', description: 'Complete component library' },
    { icon: 'phone-portrait', title: 'Responsive', description: 'Adapts to all screen sizes' },
    { icon: 'flash', title: 'Performance', description: 'Optimized for smooth animations' },
  ];

  return (
    <GlassView
      style={styles.featuresList}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>✨ Features</Text>
      
      {features.map((feature, index) => (
        <GlassView
          key={index}
          style={styles.featureItem}
          glassEffectStyle="clear"
          isInteractive={true}
          tintColor="rgba(255, 255, 255, 0.05)"
        >
          <View style={styles.featureIcon}>
            <Ionicons name={feature.icon as any} size={24} color="#FFFFFF" />
          </View>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        </GlassView>
      ))}
    </GlassView>
  );
};

const styles = StyleSheet.create({
  featuresList: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});
