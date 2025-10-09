# 🌊 LiquidUI - The Most Fluid UI Library

**LiquidUI** is the most fluid and revolutionary UI component library ever created! Every component is designed with liquid glass effects, smooth animations, and haptic feedback for an extraordinary user experience.

## ✨ Features

- 🌊 **Liquid Glass Effects** - Native iOS liquid glass effects
- ✨ **Shimmer Animations** - Smooth shimmer animations
- 💫 **Glow Effects** - Dynamic glow effects
- 🎭 **Haptic Feedback** - Tactile feedback for every interaction
- 🌈 **Dynamic Themes** - Dynamic colored themes
- 📱 **Native iOS Glass** - Using native UIVisualEffectView
- 🚀 **Optimized Performance** - Guaranteed 60fps
- ♿ **Accessibility** - Complete accessibility support

## 🎨 Available Themes

- **Ocean** - Ocean blue with turquoise shades
- **Aurora** - Pink and magenta with aurora effects
- **Cosmic** - Purple and violet with cosmic effects
- **Forest** - Emerald green with natural effects

## 🧩 Components

### LiquidButton
Buttons with liquid glass effects, smooth animations, and haptic feedback.

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
Cards with liquid glass effects, floating animations, and shimmer.

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
Input with liquid glass effects, focus animations, and validation.

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
Tab bar with liquid glass effects, bubble animations, and floating.

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
Modal with liquid glass effects, entrance animations, and backdrop blur.

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

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start the app
npm start
```

## 🎯 Usage

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

The **Liquid Engine** is the beating heart of LiquidUI. It provides:

- **Liquid Wave Effects** - Liquid wave effects
- **Shimmer Animations** - Shimmer animations
- **Glow Effects** - Glow effects
- **Haptic Feedback** - Tactile feedback
- **Theme Management** - Dynamic theme management

## 🎨 Customization

Every component can be customized with:

- **Themes** - Ocean, Aurora, Cosmic, Forest
- **Variants** - Primary, Secondary, Ghost, Liquid
- **Sizes** - Small, Medium, Large
- **Effects** - Wave, Shimmer, Glow, Haptic
- **Animations** - Scale, Rotate, Float, Ripple

## 📱 Compatibility

- **iOS** - Full support for UIVisualEffectView
- **Android** - Fallback with BlurView
- **Expo** - Compatible with Expo SDK 54+
- **React Native** - Compatible with RN 0.81+

## 🚀 Performance

- **60fps** - Guaranteed smooth animations
- **Native Glass** - Using native iOS APIs
- **Optimized** - Optimized for performance
- **Memory Efficient** - Optimized memory management

## 🎯 Best Practices

1. **Use LiquidEngineProvider** to manage global state
2. **Choose the right theme** for your app
3. **Enable effects** for a fluid experience
4. **Test on real devices** to verify performance
5. **Use haptic feedback** to improve UX

## 🌊 Examples

See the `examples/` folder for complete usage examples.

## 📄 License

MIT License - Use freely in your projects!

---

**LiquidUI** - Where UI meets fluidity! 🌊✨

---

Created with ♥ by [Andrea0x.eth](https://andrea0x.me)