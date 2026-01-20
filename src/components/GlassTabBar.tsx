import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
  const TAB_BAR_HEIGHT = 72;
  const TAB_BAR_PADDING = 10;
  const BUBBLE_HEIGHT = 52;
  const MIN_BUBBLE_WIDTH = 74;
  const [containerWidth, setContainerWidth] = useState(0);
  const bubbleX = useRef(new Animated.Value(0)).current;
  
  // When on Design System page, keep Settings highlighted in nav
  const displayActiveKey = activeTab === 'designSystem' ? 'settings' : activeTab;
  const activeIndex = tabs.findIndex((t) => t.key === displayActiveKey);
  const H_PADDING = TAB_BAR_PADDING; // Match the tabBar paddingHorizontal
  
  const tabSlot = containerWidth > 0 ? (containerWidth - H_PADDING * 2) / tabs.length : 0;
  const bubbleWidth = tabSlot > 0
    ? Math.max(MIN_BUBBLE_WIDTH, tabSlot - 10)
    : MIN_BUBBLE_WIDTH;
  const bubbleLeft = tabSlot > 0 ? H_PADDING + activeIndex * tabSlot + (tabSlot - bubbleWidth) / 2 : 0;
  const bubbleTop = (TAB_BAR_HEIGHT - BUBBLE_HEIGHT) / 2;

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
            pointerEvents="none"
            style={[
              styles.activeBubble,
              { left: bubbleX, width: bubbleWidth, height: BUBBLE_HEIGHT, top: bubbleTop, borderRadius: BUBBLE_HEIGHT / 2 },
            ]}
          >
            <GlassView
              style={[StyleSheet.absoluteFillObject, { borderRadius: BUBBLE_HEIGHT / 2 }]}
              glassEffectStyle="clear"
              isInteractive={false}
              tintColor="rgba(255,255,255,0.14)"
            />
            <LinearGradient
              pointerEvents="none"
              colors={[
                'rgba(255,255,255,0.5)',
                'rgba(255,255,255,0.18)',
                'rgba(255,255,255,0.04)',
              ]}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 0.9, y: 1 }}
              style={[StyleSheet.absoluteFillObject, { borderRadius: BUBBLE_HEIGHT / 2 }]}
            />
            <LinearGradient
              pointerEvents="none"
              colors={[
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.08)',
                'rgba(0,0,0,0.16)',
              ]}
              start={{ x: 0.5, y: 0.6 }}
              end={{ x: 0.5, y: 1 }}
              style={[StyleSheet.absoluteFillObject, { borderRadius: BUBBLE_HEIGHT / 2 }]}
            />
            <View
              style={[
                styles.activeBubbleInnerStroke,
                { borderRadius: BUBBLE_HEIGHT / 2 - 2 },
              ]}
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
    paddingHorizontal: 10,
    paddingBottom: 34,
  },
  tabBar: {
    flexDirection: 'row',
    height: 72,
    borderRadius: 32,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  activeBubble: {
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden',
    borderWidth: 0.75,
    borderColor: 'rgba(255,255,255,0.22)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  activeBubbleInnerStroke: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 0.6,
    borderColor: 'rgba(255,255,255,0.18)',
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
