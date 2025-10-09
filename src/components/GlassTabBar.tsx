import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { GlassView } from 'expo-glass-effect';
import { Tab } from '../types';

interface GlassTabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabKey: string) => void;
}

export const TabBar: React.FC<GlassTabBarProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange 
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const bubbleX = useRef(new Animated.Value(0)).current;
  
  // When on Design System page, keep Settings highlighted in nav
  const displayActiveKey = activeTab === 'designSystem' ? 'settings' : activeTab;
  const activeIndex = tabs.findIndex((t) => t.key === displayActiveKey);
  const H_PADDING = 8; // Match the tabBar paddingHorizontal
  
  const tabSlot = containerWidth > 0 ? (containerWidth - H_PADDING * 2) / tabs.length : 0;
  const bubbleWidth = 60; // Fixed width for square selector
  const bubbleLeft = tabSlot > 0 ? H_PADDING + activeIndex * tabSlot + (tabSlot - bubbleWidth) / 2 : 0;

  React.useEffect(() => {
    if (tabSlot > 0 && activeIndex >= 0) {
      Animated.spring(bubbleX, {
        toValue: bubbleLeft,
        useNativeDriver: false,
        tension: 140,
        friction: 16,
      }).start();
    }
  }, [tabSlot, activeIndex, bubbleLeft, bubbleX]);

  return (
    <View style={styles.tabBarContainer}>
      <GlassView
        style={styles.tabBar}
        glassEffectStyle="clear"
        isInteractive={true}
        tintColor="rgba(255, 255, 255, 0.08)"
        onLayout={(e: any) => setContainerWidth(e.nativeEvent.layout.width)}
      >
        {/* Moving Glass Bubble for active tab */}
        {containerWidth > 0 && activeIndex >= 0 && (
          <Animated.View
            style={[
              styles.activeBubble,
              { left: bubbleX, width: bubbleWidth },
            ]}
          >
            <GlassView
              style={[StyleSheet.absoluteFillObject, { borderRadius: 15 }]}
              glassEffectStyle="clear"
              isInteractive={true}
              tintColor="rgba(255,255,255,0.2)"
            />
          </Animated.View>
        )}

        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => onTabChange(tab.key)}
          >
            <View style={styles.tabIcon}>
              {tab.icon}
              {tab.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{tab.badge}</Text>
                </View>
              )}
            </View>
            <Text
              style={[
                styles.tabLabel,
                { color: activeIndex === index ? '#FFFFFF' : 'rgba(255,255,255,0.6)' },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </GlassView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingBottom: 34,
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    borderRadius: 18,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activeBubble: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 15,
    top: 5,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    zIndex: 2,
  },
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#FF3B30',
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
});
