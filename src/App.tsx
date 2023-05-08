import './App.scss';
import Home from './containers/Home/Home.container';
import TaskProvider from './context/TaskContext';
import './icons/icons';

const App = () => {
  return (
    <TaskProvider>
      <Home/>
    </TaskProvider>
  );
}

export default App;
