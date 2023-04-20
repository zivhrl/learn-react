interface Props {
  items: string[];
}
// setItems: (items: string[]) => void;
export const Summary = ({ items }: Props) => {
  console.log('in: ', items);
  // const [stateItems, setStateItems] = useState(items);
  return (
    <>{items.length > 0 && items.map((item) => <p key={item}>{item}</p>)}</>
  );
};
