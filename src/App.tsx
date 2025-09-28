import { memo } from 'react';
import AppRouter from "./Pages/index"

const App = () => {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
};

export default memo(App);