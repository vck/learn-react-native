import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './navs/auth';
import MainNav from './navs/main';
import AuthContext from './utils/authContext';
import AppContext from './utils/appContext';

export default function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [task, setTask] = useState([])
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value = {{authenticated, setAuthenticated, user, setUser}}>
      <AppContext.Provider value = {{task, setTask}}>
        <NavigationContainer>
            {authenticated ? <MainNav/> : <AuthNav/>}
        </NavigationContainer>
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}
