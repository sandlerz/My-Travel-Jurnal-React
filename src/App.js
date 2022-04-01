import './App.css';
import Header from "./components/Header"
import List from './components/List'

import data from './data'

function App() {
  const listMap = data.map((item, index) => {
    return (
      <List 
        key={index}
        line={data[index + 1]}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className="list-container">
        {listMap}
      </div>
    </div>
  );
}

export default App;
