import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const LegacyComponents: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(0.5);

  return (
    <GlassView
      style={styles.legacyComponents}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>🔧 Legacy Components</Text>
      <Text style={styles.sectionSubtitle}>Classic components with modern glass effects</Text>
      
      {/* Legacy Buttons */}
      <View style={styles.componentGroup}>
        <Text style={styles.groupTitle}>Legacy Buttons</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.legacyButton}>
            <LinearGradient
              colors={['#007AFF', '#0051D5']}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Primary</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.legacyButton}>
            <GlassView
              style={styles.glassButton}
              glassEffectStyle="clear"
              isInteractive={true}
              tintColor="rgba(255, 255, 255, 0.2)"
            >
              <Text style={styles.buttonText}>Glass</Text>
            </GlassView>
          </TouchableOpacity>
        </View>
      </View>

      {/* Legacy Cards */}
      <View style={styles.componentGroup}>
        <Text style={styles.groupTitle}>Legacy Cards</Text>
        <View style={styles.cardRow}>
          <GlassView
            style={styles.legacyCard}
            glassEffectStyle="clear"
            isInteractive={true}
            tintColor="rgba(255, 255, 255, 0.1)"
          >
            <Ionicons name="star" size={24} color="#FFD700" />
            <Text style={styles.cardTitle}>Premium</Text>
            <Text style={styles.cardSubtitle}>Unlock all features</Text>
          </GlassView>
          
          <GlassView
            style={styles.legacyCard}
            glassEffectStyle="clear"
            isInteractive={true}
            tintColor="rgba(255, 255, 255, 0.1)"
          >
            <Ionicons name="shield-checkmark" size={24} color="#34C759" />
            <Text style={styles.cardTitle}>Secure</Text>
            <Text style={styles.cardSubtitle}>End-to-end encryption</Text>
          </GlassView>
        </View>
      </View>

      {/* Legacy Toggle */}
      <View style={styles.componentGroup}>
        <Text style={styles.groupTitle}>Legacy Toggle</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Enable Notifications</Text>
          <TouchableOpacity 
            style={styles.legacyToggle}
            onPress={() => setToggleValue(!toggleValue)}
          >
            <View style={[styles.toggleTrack, toggleValue && styles.toggleTrackActive]}>
              <View style={[styles.toggleKnob, toggleValue && styles.toggleKnobActive]} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Legacy Slider */}
      <View style={styles.componentGroup}>
        <Text style={styles.groupTitle}>Legacy Slider</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Volume: {Math.round(sliderValue * 100)}%</Text>
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: `${sliderValue * 100}%` }]} />
            <View style={[styles.sliderThumb, { left: `${sliderValue * 100}%` }]} />
          </View>
        </View>
      </View>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  legacyComponents: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
  },
  componentGroup: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legacyButton: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  glassButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legacyCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  legacyToggle: {
    padding: 4,
  },
  toggleTrack: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    padding: 2,
  },
  toggleTrackActive: {
    backgroundColor: '#007AFF',
  },
  toggleKnob: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  toggleKnobActive: {
    alignSelf: 'flex-end',
  },
  sliderContainer: {
    marginTop: 8,
  },
  sliderLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  sliderTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    position: 'relative',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  sliderThumb: {
    position: 'absolute',
    top: -6,
    width: 18,
    height: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    marginLeft: -9,
  },
});
