import './App.css';
import Button from './Button';
import { buttonSizes, buttonTypes } from './buttonInfo';

function App() {
  return (
    <div className="app">
      <Button label="Click Me!" />
      <Button label="Click Me!" type={buttonTypes.SECONDARY} size="medium" />
      <Button label="Click Me!" type="tertiary" size="large" />
      <Button label="Click Me!" type="tertiary" />
      <Button />
    </div>
  );
}

export default App;
