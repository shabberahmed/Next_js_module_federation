import React from 'react';

const Button = () => {
  const [data, setData] = React.useState(0);

  function handleClick() {
    setData(prevData => prevData + 1);
  }

  return (
    <div>
      <h3>{data}</h3>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default Button;
