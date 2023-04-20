import { useState } from 'react';
import './App.scss';
import ListGroup from './components/ListGroup';
import { Summary } from './components/Summary';
import { UseRefTest } from './components/UseRefTest';

function App() {
  const items: { id: number; name: string }[] = [
    { id: 0, name: 'pizza' },
    { id: 1, name: 'falafel' },
    { id: 2, name: 'lazania' },
    { id: 3, name: 'steak' },
  ];

  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleSelectItem = (id: number) => {
    let itemName = items.find((i) => i.id === id)?.name;
    if (itemName != null) {
      if (!selectedList.includes(itemName)) {
        let templist = [...selectedList];
        templist.push(itemName);
        setSelectedList(templist);
      } else setSelectedList(selectedList.filter((i) => i !== itemName));
    }
    console.log(selectedList);
  };

  // return (
  //   <div>
  //     <ListGroup items={items} title="Menu" onSelectItem={handleSelectItem} />
  //     {/* {selectedList.map((item) => (
  //       <p>{item}</p>
  //     ))} */}
  //     <Summary items={selectedList as string[]} />
  //   </div>
  // );
  return (
    <div>
      <UseRefTest />
    </div>
  );
}

export default App;
