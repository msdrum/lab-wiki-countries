import { Link } from 'react-router-dom';

function CountriesList({ countryList }) {
  return (
    <div>
      {countryList.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <Link to={`/${country.alpha3Code}`}>link</Link>
          </div>
        );
      })}

      {/* {console.log(countryList.alpha3Code)} */}
    </div>
  );
}

export default CountriesList;
