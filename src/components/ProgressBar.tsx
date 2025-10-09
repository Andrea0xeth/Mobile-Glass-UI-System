import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { LinearGradient } from 'expo-linear-gradient';

interface ProgressBarProps {
  progress: number; // 0 to 1
  color?: string;
  showPercentage?: boolean;
  height?: number;
  style?: ViewStyle;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = '#007AFF',
  showPercentage = false,
  height = 12,
  style
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animatedWidth, {
      toValue: Math.max(0, Math.min(1, progress)),
      useNativeDriver: false,
      tension: 100,
      friction: 8,
    }).start();
  }, [progress]);

  const widthInterpolate = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const getGradientColors = () => {
    switch (color) {
      case '#34C759':
        return ['#34C759', '#30B04A', '#2A9D42'];
      case '#FF9500':
        return ['#FF9500', '#E6850E', '#D17A0C'];
      case '#FF3B30':
        return ['#FF3B30', '#E6342A', '#D12E25'];
      default:
        return ['#007AFF', '#0051D5', '#003D99'];
    }
  };

  return (
    <View style={[styles.container, { height }, style]}>
      <GlassView
        style={styles.track}
        glassEffectStyle="clear"
        isInteractive={true}
        tintColor="rgba(255, 255, 255, 0.1)"
      />
      <Animated.View 
        style={[
          styles.progressContainer,
          { width: widthInterpolate }
        ]} 
      >
        <LinearGradient
          colors={getGradientColors()}
          style={styles.progress}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  track: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
  progressContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 20,
    overflow: 'hidden',
  },
  progress: {
    flex: 1,
    borderRadius: 20,
  },
});
