import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Toggle } from '../components/Toggle';
import { Input } from '../components/Input';
import { ProgressBar } from '../components/ProgressBar';
import { Badge } from '../components/Badge';
import { ListItem } from '../components/ListItem';
import { Modal } from '../components/Modal';

// Design System Components
import { HeroCard } from '../components/DesignSystem/HeroCard';
import { ButtonDemo } from '../components/DesignSystem/ButtonDemo';
import { CardDemo } from '../components/DesignSystem/CardDemo';
import { InteractiveDemo } from '../components/DesignSystem/InteractiveDemo';
import { ThemeSelector } from '../components/DesignSystem/ThemeSelector';
import { FeaturesList } from '../components/DesignSystem/FeaturesList';
import { TypographySection } from '../components/DesignSystem/TypographySection';
import { ColorSystem } from '../components/DesignSystem/ColorSystem';
import { SpacingRadius } from '../components/DesignSystem/SpacingRadius';

export const DesignSystemPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(0.6);
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(0.75);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <HeroCard />

      {/* Buttons Demo */}
      <ButtonDemo />

      {/* Cards Demo */}
      <CardDemo />

      {/* Interactive Demo */}
      <InteractiveDemo />

      {/* Theme Selector */}
      <ThemeSelector />

      {/* Toggle Section */}
      <Card title="🔄 Toggle Components">
        <View style={styles.toggleSection}>
          <Text style={styles.sectionLabel}>Native Toggle</Text>
          <Toggle 
            value={switchValue} 
            onValueChange={setSwitchValue} 
          />
        </View>
      </Card>

      {/* Form Controls */}
      <Card title="📝 Form Controls">
        <Input 
          placeholder="Enter text here..." 
          value={inputValue} 
          onChangeText={setInputValue} 
        />
      </Card>

      {/* Progress & Metrics */}
      <Card title="📊 Progress & Metrics">
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Download Progress</Text>
            <Text style={styles.progressPercentage}>60%</Text>
          </View>
          <ProgressBar progress={0.6} color="#007AFF" />
        </View>
        
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Storage Used</Text>
            <Text style={styles.progressPercentage}>80%</Text>
          </View>
          <ProgressBar progress={0.8} color="#34C759" />
        </View>
        
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Battery Level</Text>
            <Text style={styles.progressPercentage}>40%</Text>
          </View>
          <ProgressBar progress={0.4} color="#FF9500" />
        </View>
        
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Memory Usage</Text>
            <Text style={styles.progressPercentage}>90%</Text>
          </View>
          <ProgressBar progress={0.9} color="#FF3B30" />
        </View>
      </Card>

      {/* List Items */}
      <Card title="📋 List Components">
        <ListItem 
          title="Settings" 
          subtitle="App preferences and configuration" 
          accessory={<Badge count={3} />}
        />
        <ListItem 
          title="Notifications" 
          subtitle="Manage your alerts" 
        />
        <ListItem 
          title="Privacy" 
          subtitle="Control your data" 
        />
      </Card>

      {/* Modals */}
      <Card title="🪟 Modals">
        <Button 
          variant="tertiary" 
          onPress={() => setModalVisible(true)}
        >
          Open Modal
        </Button>
        <Modal visible={modalVisible} onClose={() => setModalVisible(false)} title="Glass Modal">
          <Text style={styles.modalText}>
            This is a beautiful glass modal with blur effects!
          </Text>
        </Modal>
      </Card>

      {/* Typography Section */}
      <TypographySection />

      {/* Color System */}
      <ColorSystem />

      {/* Spacing & Radius */}
      <SpacingRadius />

      {/* Features List */}
      <FeaturesList />

      {/* Spacer for TabBar */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  toggleSection: {
    marginVertical: 12,
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 8,
  },
  // Progress
  progressSection: {
    marginBottom: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  progressPercentage: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  gaugesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
});
