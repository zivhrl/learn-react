import { useRef } from 'react';

export const UseRefTest = () => {
  const inputRef = useRef(null);
  console.log(inputRef);
  const onClick = () => {
    console.log(inputRef?.current?.value);
    console.log(inputRef);
  };
  return (
    <>
      <h1>
        {inputRef?.current?.value != null || inputRef?.current?.value == ''
          ? inputRef?.current?.value
          : 'Name'}
      </h1>
      <input type="text" placeholder="Enter Name" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </>
  );
};
