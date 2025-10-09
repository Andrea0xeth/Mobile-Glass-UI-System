import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Ionicons } from '@expo/vector-icons';

// Import components
import { TabBar } from './src/components/GlassTabBar';
import { HomePage } from './src/pages/HomePage';
import { ExplorePage } from './src/pages/ExplorePage';
import { FavoritesPage } from './src/pages/FavoritesPage';
import { ProfilePage } from './src/pages/ProfilePage';
import { SettingsPage } from './src/pages/SettingsPage';
import { DesignSystemPage } from './src/pages/DesignSystemPage';
import { Tab } from './src/types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [internalPage, setInternalPage] = useState<string | null>(null);

  const tabs: Tab[] = [
    {
      key: 'home',
      label: 'Home',
      icon: <Ionicons name="home" size={24} color="#FFFFFF" />,
    },
    {
      key: 'explore',
      label: 'Explore',
      icon: <Ionicons name="compass" size={24} color="#FFFFFF" />,
      badge: 3,
    },
    {
      key: 'favorites',
      label: 'Favorites',
      icon: <Ionicons name="heart" size={24} color="#FFFFFF" />,
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: <Ionicons name="person" size={24} color="#FFFFFF" />,
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <Ionicons name="settings" size={24} color="#FFFFFF" />,
    },
  ];

  const handleTabChange = (tabKey: string) => {
    if (tabKey === 'settings') {
      // Keep settings active when navigating to design system
      setActiveTab('settings');
    } else {
      setActiveTab(tabKey);
      setInternalPage(null);
    }
  };

  const handleDesignSystemPress = () => {
    setInternalPage('designSystem');
  };

  const renderContent = () => {
    if (internalPage === 'designSystem') {
      return <DesignSystemPage />;
    }

    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage onDesignSystemPress={handleDesignSystemPress} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <LinearGradient
      colors={['#0A0A0A', '#1A1A1A', '#2A2A2A']}
      style={styles.background}
    >
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>

      {/* Glass TabBar */}
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 120,
  },
});