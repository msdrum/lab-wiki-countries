import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  const [countryList, setCountryList] = useState(countries);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countryList={countryList} />
      <Routes>
        <Route path="/" />
        <Route
          path="/:countryAlpha3"
          element={<CountryDetails countryList={countryList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
