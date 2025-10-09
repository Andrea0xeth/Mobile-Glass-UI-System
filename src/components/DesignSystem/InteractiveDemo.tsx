import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const InteractiveDemo: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <GlassView
      style={styles.interactiveDemo}
      glassEffectStyle="clear"
      isInteractive={true}
      tintColor="rgba(255, 255, 255, 0.1)"
    >
      <Text style={styles.sectionTitle}>🎮 Interactive Demo</Text>
      
      <GlassView
        style={styles.demoCard}
        glassEffectStyle="clear"
        isInteractive={true}
        tintColor="rgba(255, 255, 255, 0.1)"
      >
        <Text style={styles.demoTitle}>Interactive Glass Card</Text>
        <Text style={styles.demoSubtitle}>Tap the buttons to see glass effects</Text>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setIsLiked(!isLiked)}
          >
            <GlassView
              style={styles.buttonGlass}
              glassEffectStyle="clear"
              isInteractive={true}
              tintColor={isLiked ? "rgba(255, 59, 48, 0.3)" : "rgba(255, 255, 255, 0.1)"}
            >
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={20} 
                color={isLiked ? "#FF3B30" : "#FFFFFF"} 
              />
            </GlassView>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setIsBookmarked(!isBookmarked)}
          >
            <GlassView
              style={styles.buttonGlass}
              glassEffectStyle="clear"
              isInteractive={true}
              tintColor={isBookmarked ? "rgba(255, 204, 0, 0.3)" : "rgba(255, 255, 255, 0.1)"}
            >
              <Ionicons 
                name={isBookmarked ? "bookmark" : "bookmark-outline"} 
                size={20} 
                color={isBookmarked ? "#FFCC00" : "#FFFFFF"} 
              />
            </GlassView>
          </TouchableOpacity>
        </View>
      </GlassView>
    </GlassView>
  );
};

const styles = StyleSheet.create({
  interactiveDemo: {
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
  demoCard: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  demoSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  buttonGlass: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
