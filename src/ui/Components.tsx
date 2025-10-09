import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Input Component
export const Input = ({ 
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
      style={styles.input}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.inputText}>{value || placeholder}</Text>
    </GlassView>
  );
};

// Progress Bar Component
export const ProgressBar = ({ 
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

// Switch Component
export const Switch = ({ 
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

// Gauge Component
export const Gauge = ({ 
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

// Slider Component
export const Slider = ({ 
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

// Card Component
export const Card = ({ 
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
      style={[styles.card, style]}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      {title && <Text style={styles.cardTitle}>{title}</Text>}
      {children}
    </GlassView>
  );
};

// Badge Component
export const Badge = ({ 
  count, 
  color = '#FF3B30' 
}: {
  count: number;
  color?: string;
}) => {
  return (
    <GlassView
      style={[styles.badge, { backgroundColor: color }]}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.2)"
    >
      <Text style={styles.badgeText}>{count}</Text>
    </GlassView>
  );
};

// List Item Component
export const ListItem = ({ 
  title, 
  subtitle, 
  icon, 
  onPress,
  rightElement 
}: {
  title: string;
  subtitle?: string;
  icon?: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItem}>
      <GlassView
        style={styles.listItemGlass}
        glassEffectStyle="clear"
        isInteractive={true}
        tintColor="rgba(255, 255, 255, 0.1)"
      >
        <View style={styles.listItemContent}>
          {icon && (
            <View style={styles.listItemIcon}>
              <Ionicons name={icon as any} size={24} color="#FFFFFF" />
            </View>
          )}
          <View style={styles.listItemText}>
            <Text style={styles.listItemTitle}>{title}</Text>
            {subtitle && <Text style={styles.listItemSubtitle}>{subtitle}</Text>}
          </View>
          {rightElement}
        </View>
      </GlassView>
    </TouchableOpacity>
  );
};

// Modal Component
export const Modal = ({ 
  visible, 
  onClose, 
  title, 
  children 
}: {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) => {
  if (!visible) return null;

  return (
    <View style={styles.modalOverlay}>
      <GlassView
        style={styles.modal}
        glassEffectStyle="clear"
        isInteractive={true}
        tintColor="rgba(255, 255, 255, 0.15)"
      >
        {title && <Text style={styles.modalTitle}>{title}</Text>}
        {children}
        <TouchableOpacity onPress={onClose} style={styles.modalClose}>
          <Ionicons name="close" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </GlassView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
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
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  listItem: {
    marginVertical: 4,
  },
  listItemGlass: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  listItemIcon: {
    marginRight: 12,
  },
  listItemText: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  listItemSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    width: '90%',
    maxHeight: '80%',
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  modalClose: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
