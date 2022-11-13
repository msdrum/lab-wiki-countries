import { useParams } from 'react-router-dom';

function CountryDetails({ countryList }) {
  const { countryAlpha3 } = useParams();

  const countrySelected = countryList.find((country) => {
    return country.alpha3Code === countryAlpha3;
  });
  return (
    <div>
      <p>details page</p>
    </div>
  );
}

export default CountryDetails;
