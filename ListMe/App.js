import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navs';
import { AppContext } from './utils/context';


export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  );
}
