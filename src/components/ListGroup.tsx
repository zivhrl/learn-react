import { useState } from 'react';

interface Props {
  items: { id: number; name: string }[];
  title: string;
  onSelectItem: (id: number) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  let selected: number[] = [];
  //hook
  const [selectedIndexs, setSelectedIndexs] = useState(selected);

  return (
    <>
      <h1>{title} List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={
              selectedIndexs.includes(index)
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              if (selectedIndexs.includes(index))
                setSelectedIndexs(selectedIndexs.filter((i) => i !== index));
              else {
                let newselectedIndexs = [...selectedIndexs];
                newselectedIndexs.push(index);
                setSelectedIndexs(newselectedIndexs);
              }
              onSelectItem(item.id);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
