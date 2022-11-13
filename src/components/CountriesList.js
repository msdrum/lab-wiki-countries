import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function CountriesList({ countryList }) {
  return (
    <Container>
      {countryList.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <Link to={`/${country.alpha3Code}`} className="flag-link">
              <div className="card-flag">
                <img
                  src={
                    'https://flagpedia.net/data/flags/emoji/twitter/256x256/' +
                    country.alpha2Code.toLowerCase() +
                    '.png'
                  }
                  alt={`${country.name.common} flag`}
                  className="img-fluid"
                  width="100"
                />
                <h4>{country.name.common}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}

export default CountriesList;
