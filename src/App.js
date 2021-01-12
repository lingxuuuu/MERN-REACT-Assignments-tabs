import logo from './logo.svg';
import './App.css';
import DisplayTabs from './components/DisplayTabs';
import React, {useState} from 'react';


function App() {

//const {idx, name, isSelected, toggleTab} = props;

  const [tabs, setTabs] = useState([
    {name: 'Tab 1', isSeleted: true},
    {name: 'Tab 2', isSeleted: false},
    {name: 'Tab 3', isSeleted: false},
  ])

  const toggleTab = (idx) => {
    tabs.forEach((tab, i) => {
      let updateTab = tab;

      if (idx === i) {
        updateTab.isSeleted = true;
      } else {
        tab.isSeleted = false;
      }
      setTabs(
        [...tabs.slice(0,i), updateTab].concat(tabs.slice(i+1))
      );

    })
  
  }

  return (
    <div className="App">

      {tabs.map( (tab, i) => {
        return <DisplayTabs key={i} idx={i} name={tab.name} isSeleted={tab.isSeleted} toggleTab={toggleTab} />
      }
      )}

      {tabs.map( (tab, i)=> {
        return tab.isSeleted ? <h3>{tab.name} content is showing here.</h3> : null
      }
      )}
    
    </div>
  );
}

export default App;
