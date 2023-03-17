import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './navs/auth';
import MainNav from './navs/main';
import AuthContext from './utils/authContext';

export default function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value = {{authenticated, setAuthenticated, user, setUser}}>
      <NavigationContainer>
          {authenticated ? <MainNav/> : <AuthNav/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
