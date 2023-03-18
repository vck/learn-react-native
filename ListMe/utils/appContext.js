import { createContext } from "react";

const AppContext = createContext({
    task: [],
    setTask: (task) => {}
});

export default AppContext;