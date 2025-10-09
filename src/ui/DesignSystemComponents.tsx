import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SimpleCard } from '../components/SimpleCard';
import { SimpleButton } from '../components/SimpleButton';
import { GlassToggle } from '../components/GlassToggle';

// Glass Button Variants
export const GlassButtonsSection = () => {
  return (
    <SimpleCard title="🔘 Glass Buttons">
      <View style={styles.buttonGrid}>
        <GlassButton variant="default" title="Default" />
        <GlassButton variant="bordered" title="Bordered" />
        <GlassButton variant="glass" title="Glass" />
        <GlassButton variant="prominent" title="Prominent" />
      </View>
    </SimpleCard>
  );
};

// Glass Gauge Component
export const GlassGauge = ({ 
  value, 
  label, 
  color = 'blue',
  size = 100 
}: {
  value: number;
  label: string;
  color?: string;
  size?: number;
}) => {
  return (
    <GlassView
      style={[styles.gauge, { width: size, height: size }]}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <View style={styles.gaugeContent}>
        <Text style={styles.gaugeValue}>{Math.round(value * 100)}%</Text>
        <Text style={styles.gaugeLabel}>{label}</Text>
      </View>
    </GlassView>
  );
};

// Glass Slider Component
export const GlassSlider = ({ 
  value, 
  onValueChange, 
  label 
}: {
  value: number;
  onValueChange: (value: number) => void;
  label: string;
}) => {
  return (
    <GlassView
      style={styles.sliderContainer}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sliderLabel}>{label}: {Math.round(value * 100)}%</Text>
      <TouchableOpacity
        style={[styles.sliderTrack, { backgroundColor: `rgba(0, 122, 255, ${value})` }]}
        onPress={(e) => {
          const x = e.nativeEvent.locationX;
          const width = e.currentTarget.offsetWidth;
          onValueChange(Math.max(0, Math.min(1, x / width)));
        }}
      >
        <View style={[styles.sliderThumb, { left: `${value * 100}%` }]} />
      </TouchableOpacity>
    </GlassView>
  );
};

// Glass Card Component
export const GlassCard = ({ 
  title, 
  children, 
  style 
}: {
  title?: string;
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <GlassView
      style={[styles.glassCard, style]}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      {title && <Text style={styles.glassCardTitle}>{title}</Text>}
      {children}
    </GlassView>
  );
};

// Glass Input Component
export const GlassInput = ({ 
  placeholder, 
  value, 
  onChangeText 
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <GlassView
      style={styles.glassInput}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.inputText}>{value || placeholder}</Text>
    </GlassView>
  );
};

// Glass Progress Bar
export const GlassProgressBar = ({ 
  progress, 
  color = '#007AFF' 
}: {
  progress: number;
  color?: string;
}) => {
  return (
    <GlassView
      style={styles.progressContainer}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <View style={styles.progressTrack}>
        <View 
          style={[
            styles.progressFill, 
            { 
              width: `${Math.min(100, Math.max(0, progress * 100))}%`,
              backgroundColor: color
            }
          ]} 
        />
      </View>
    </GlassView>
  );
};

// Glass Switch Component
export const GlassSwitch = ({ 
  value, 
  onValueChange 
}: {
  value: boolean;
  onValueChange: (value: boolean) => void;
}) => {
  return (
    <GlassView
      style={styles.switchContainer}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <TouchableOpacity
        style={[styles.switchTrack, { backgroundColor: value ? '#007AFF' : 'rgba(255,255,255,0.2)' }]}
        onPress={() => onValueChange(!value)}
      >
        <View style={[styles.switchThumb, { left: value ? 20 : 2 }]} />
      </TouchableOpacity>
    </GlassView>
  );
};

// Glass Button Component
const GlassButton = ({ 
  variant, 
  title, 
  onPress 
}: {
  variant: 'default' | 'bordered' | 'glass' | 'prominent';
  title: string;
  onPress?: () => void;
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'bordered':
        return styles.borderedButton;
      case 'glass':
        return styles.glassButton;
      case 'prominent':
        return styles.prominentButton;
      default:
        return styles.defaultButton;
    }
  };

  if (variant === 'glass') {
    return (
      <TouchableOpacity onPress={onPress} style={[getButtonStyle(), styles.button]}>
        <GlassView
          style={StyleSheet.absoluteFillObject}
          glassEffectStyle="clear"
          isInteractive={true}
          tintColor="rgba(255, 255, 255, 0.15)"
        />
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[getButtonStyle(), styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Dashboard Section with Glass Components
export const GlassDashboardSection = () => {
  const [productivityScore, setProductivityScore] = useState(0.75);
  const [focusLevel, setFocusLevel] = useState(0.6);
  const [tasksCompleted, setTasksCompleted] = useState(0.4);

  return (
    <SimpleCard title="📊 Glass Dashboard">
      <ScrollView style={styles.dashboardContent}>
        {/* Gauges Row */}
        <View style={styles.gaugesRow}>
          <GlassGauge value={productivityScore} label="Productivity" color="blue" size={80} />
          <GlassGauge value={focusLevel} label="Focus" color="purple" size={80} />
          <GlassGauge value={tasksCompleted} label="Tasks" color="green" size={80} />
        </View>

        {/* Progress Bars */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Progress Tracking</Text>
          <GlassProgressBar progress={productivityScore} color="#007AFF" />
          <GlassProgressBar progress={focusLevel} color="#5856D6" />
          <GlassProgressBar progress={tasksCompleted} color="#34C759" />
        </View>

        {/* Interactive Controls */}
        <View style={styles.controlsSection}>
          <Text style={styles.sectionTitle}>Interactive Controls</Text>
          <GlassSlider
            value={productivityScore}
            onValueChange={setProductivityScore}
            label="Productivity Score"
          />
          <GlassSlider
            value={focusLevel}
            onValueChange={setFocusLevel}
            label="Focus Level"
          />
        </View>

        {/* Glass Cards Grid */}
        <View style={styles.cardsGrid}>
          <GlassCard title="Quick Stats" style={styles.gridCard}>
            <Text style={styles.cardText}>Tasks: 12/20</Text>
            <Text style={styles.cardText}>Focus: 85%</Text>
          </GlassCard>
          <GlassCard title="Today's Goal" style={styles.gridCard}>
            <Text style={styles.cardText}>Complete 5 tasks</Text>
          </GlassCard>
        </View>
      </ScrollView>
    </SimpleCard>
  );
};

const styles = StyleSheet.create({
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flexBasis: '48%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  defaultButton: {
    backgroundColor: '#007AFF',
  },
  borderedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  glassButton: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  prominentButton: {
    backgroundColor: '#FF2D92',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  gauge: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  gaugeContent: {
    alignItems: 'center',
  },
  gaugeValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  gaugeLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  sliderContainer: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  sliderLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  sliderTrack: {
    height: 8,
    borderRadius: 4,
    position: 'relative',
  },
  sliderThumb: {
    position: 'absolute',
    top: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    transform: [{ translateX: -8 }],
  },
  glassCard: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  glassCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  glassInput: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  inputText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  progressContainer: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  progressTrack: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  switchContainer: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  switchTrack: {
    width: 50,
    height: 30,
    borderRadius: 15,
    position: 'relative',
  },
  switchThumb: {
    position: 'absolute',
    top: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
  dashboardContent: {
    maxHeight: 400,
  },
  gaugesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  progressSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  controlsSection: {
    marginBottom: 20,
  },
  cardsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridCard: {
    flex: 1,
    marginHorizontal: 4,
  },
  cardText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 4,
  },
});
