import React from 'react';
import { sayHello } from './sayHello';

interface HelloProps {}

const Hello: React.FC<HelloProps> = () => {
  return <div className="my-div">{sayHello()}</div>;
};

export default Hello;
