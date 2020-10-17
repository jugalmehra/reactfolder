import React from 'react';
import Folderlist from './components/Folderlist';
import Folderinput from './components/Folderinput';
import {Folderprovider} from './FolderContext';
import './App.css';

function App() {
  return (
    <Folderprovider>
      <div className="App">
        <Folderinput />
        <Folderlist />
      </div>
    </Folderprovider>
  );
}

export default App;
