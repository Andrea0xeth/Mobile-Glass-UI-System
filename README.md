# 🌊 LiquidUI - The Most Fluid UI Library

**LiquidUI** è la libreria di componenti UI più fluida e rivoluzionaria mai creata! Ogni componente è progettato con effetti liquid glass, animazioni fluide e feedback aptico per un'esperienza utente straordinaria.

## ✨ Caratteristiche

- 🌊 **Liquid Glass Effects** - Effetti vetro liquido nativi iOS
- ✨ **Shimmer Animations** - Animazioni scintillanti fluide
- 💫 **Glow Effects** - Effetti luminosi dinamici
- 🎭 **Haptic Feedback** - Feedback tattile per ogni interazione
- 🌈 **Dynamic Themes** - Temi colorati dinamici
- 📱 **Native iOS Glass** - Utilizzo di UIVisualEffectView nativo
- 🚀 **Performance Ottimizzate** - 60fps garantiti
- ♿ **Accessibility** - Supporto completo per accessibilità

## 🎨 Temi Disponibili

- **Ocean** - Blu oceano con sfumature turchesi
- **Aurora** - Rosa e magenta con effetti aurora
- **Cosmic** - Viola e viola con effetti cosmici
- **Forest** - Verde smeraldo con effetti naturali

## 🧩 Componenti

### LiquidButton
Pulsanti con effetti liquid glass, animazioni fluide e feedback aptico.

```tsx
<LiquidButton
  title="Click Me"
  onPress={() => {}}
  variant="liquid"
  theme="ocean"
  waveEffect={true}
  shimmerEffect={true}
/>
```

### LiquidCard
Carte con effetti liquid glass, animazioni floating e shimmer.

```tsx
<LiquidCard
  title="Liquid Card"
  theme="aurora"
  variant="floating"
  glowEffect={true}
>
  <Text>Your content here</Text>
</LiquidCard>
```

### LiquidInput
Input con effetti liquid glass, animazioni focus e validazione.

```tsx
<LiquidInput
  value={value}
  onChangeText={setValue}
  placeholder="Type something..."
  theme="cosmic"
  focusEffect={true}
  waveEffect={true}
/>
```

### LiquidTabBar
Tab bar con effetti liquid glass, animazioni bubble e floating.

```tsx
<LiquidTabBar
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  theme="forest"
  bubbleEffect={true}
  floating={true}
/>
```

### LiquidModal
Modal con effetti liquid glass, animazioni entrance e backdrop blur.

```tsx
<LiquidModal
  visible={visible}
  onClose={() => setVisible(false)}
  title="Liquid Modal"
  theme="ocean"
  variant="floating"
  backdropBlur={true}
>
  <Text>Modal content</Text>
</LiquidModal>
```

## 🚀 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia l'app
npm start
```

## 🎯 Utilizzo

```tsx
import { 
  LiquidEngineProvider,
  LiquidButton,
  LiquidCard,
  LiquidInput,
  LiquidTabBar,
  LiquidModal 
} from './src/liquid-ui';

export default function App() {
  return (
    <LiquidEngineProvider initialIntensity={100}>
      <LiquidButton
        title="Hello Liquid UI"
        onPress={() => {}}
        variant="liquid"
        theme="ocean"
      />
    </LiquidEngineProvider>
  );
}
```

## 🌊 Liquid Engine

Il **Liquid Engine** è il cuore pulsante di LiquidUI. Fornisce:

- **Liquid Wave Effects** - Effetti onda liquida
- **Shimmer Animations** - Animazioni scintillanti
- **Glow Effects** - Effetti luminosi
- **Haptic Feedback** - Feedback tattile
- **Theme Management** - Gestione temi dinamici

## 🎨 Personalizzazione

Ogni componente può essere personalizzato con:

- **Temi** - Ocean, Aurora, Cosmic, Forest
- **Varianti** - Primary, Secondary, Ghost, Liquid
- **Dimensioni** - Small, Medium, Large
- **Effetti** - Wave, Shimmer, Glow, Haptic
- **Animazioni** - Scale, Rotate, Float, Ripple

## 📱 Compatibilità

- **iOS** - Supporto completo per UIVisualEffectView
- **Android** - Fallback con BlurView
- **Expo** - Compatibile con Expo SDK 54+
- **React Native** - Compatibile con RN 0.81+

## 🚀 Performance

- **60fps** - Animazioni fluide garantite
- **Native Glass** - Utilizzo di API native iOS
- **Optimized** - Ottimizzato per performance
- **Memory Efficient** - Gestione memoria ottimizzata

## 🎯 Best Practices

1. **Usa LiquidEngineProvider** per gestire lo stato globale
2. **Scegli il tema giusto** per la tua app
3. **Abilita gli effetti** per un'esperienza fluida
4. **Testa su dispositivi reali** per verificare le performance
5. **Usa haptic feedback** per migliorare l'UX

## 🌊 Esempi

Vedi la cartella `examples/` per esempi completi di utilizzo.

## 📄 Licenza

MIT License - Usa liberamente nei tuoi progetti!

---

**LiquidUI** - Dove l'UI incontra la fluidità! 🌊✨


