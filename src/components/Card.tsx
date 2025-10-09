import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { GlassView } from 'expo-glass-effect';

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  subtitle, 
  children, 
  style,
  variant = 'default'
}) => {
  const getCardStyle = () => {
    switch (variant) {
      case 'elevated':
        return [styles.card, styles.elevated];
      case 'outlined':
        return [styles.card, styles.outlined];
      default:
        return [styles.card, styles.default];
    }
  };

  return (
    <GlassView
      style={[getCardStyle(), style]}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </GlassView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 8,
    shadowOpacity: 0,
    elevation: 0,
  },
  default: {
    backgroundColor: 'transparent',
  },
  elevated: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 12,
  },
});