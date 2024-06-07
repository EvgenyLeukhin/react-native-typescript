# react-native-typescript

Doesn't work hot-reload in a web mode.

## Идеи для проета

- Relax screen with music and animations
- Random animations, анти стресс экран, залипашки
- Курсы валют
- Info about your device
- Коллекция эмоджи символов - копирование при таче

## Packages

- `nativewind` и `tailwindcss` - TailwindCss, удобная стилизация
- `@react-navigation/native` - Навигация
- `npx expo install react-native-screens react-native-safe-area-context` - Для навигации

- `npx expo install @react-navigation/native-stack` - native-stack
- `npx expo install expo-splash-screen` - splash screen

## Component template

```tsx
import { FC } from 'react';
import { Text, View } from 'react-native';

const Navigation: React.FC = () => {
  return (
    <View>
      <Text>Navigation</Text>
    </View>
  );
};

export default Navigation;
```
