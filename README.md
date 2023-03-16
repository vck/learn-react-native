1. create the project

```
npx create-expo-app ListMe
```

2. run the android server

```
npm run android
```

3. add navigator package

```
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

```

4. wrap the components inside `NavigatorContainer` component

```
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```


### TODO

1. add how to install expo
2. add how to setup android studio and emulator
3. add common app pattern