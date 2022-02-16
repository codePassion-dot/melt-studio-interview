import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return <h1 className="text-3xl font-bold underline"> Hello world! </h1>;
};

export default App;
