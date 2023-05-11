
import './App.css';

const City = (props) => {
  const { cityName, temperature, variant } = props
  const className = `city ${variant}`
  return (
    <a href='#' className={className}>
      <p>{cityName}</p>
      <p>{temperature}</p>
    </a>
  )
}


function App() {
  return (
    <div className="App">

      <h1>CSS Weather Forecast </h1>

      <div className='weather-box'>
        <City cityName="Lisbon" temperature="21°C" variant="lisbon" />
        <City cityName="Paris" temperature="11°C" variant="paris" />
        <City cityName="Belgrade" temperature="15°C" variant="belgrade" />
        <City cityName="Venice" temperature="21°C" variant="venice" />
        <City cityName="Tel-Avive" temperature="32°C" variant="tel-avive" />
        <City cityName="Cair" temperature="21°C" variant="cair" />
        <City cityName="New-York" temperature="17°C" variant="new-york" />
        <City cityName="New-Delhi" temperature="17°C" variant="new-delhi" />
        <City cityName="SanFrancisco" temperature="15°C" variant="san-francisco" />
        <City cityName="Tokyo" temperature="8°C" variant="tokyo" />
        <City cityName="Sydney" temperature="25°C" variant="sydney" />
      </div>

      <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
    </div>
  );
}

export default App;
