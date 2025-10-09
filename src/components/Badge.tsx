import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { GlassView } from 'expo-glass-effect';

interface BadgeProps {
  count: number;
  maxCount?: number;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  maxCount = 99,
  color = '#FF3B30',
  size = 'medium',
  style
}) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <GlassView
      style={[styles.container, getSizeStyle(), style]}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor={`${color}30`} // Add transparency
    >
      <Text style={[styles.text, styles[`${size}Text`]]}>
        {displayCount}
      </Text>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
    shadowOpacity: 0,
    elevation: 0,
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    minHeight: 16,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minHeight: 20,
  },
  large: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 24,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 10,
  },
  mediumText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 14,
  },
});
