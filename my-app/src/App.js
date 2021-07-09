import './App.css';
import Button from './components/button/button';

const cars = ["Ferrari", "Mercedes", "BMW", "Aston Martin", "Porsche"]

function App() {

  return (
    <>
    
    <div>Hello from state_practice branch</div>
   
    {cars.map(car => (
      
      <Button text={car} />
    ))}
    </>
  );
}

export default App;