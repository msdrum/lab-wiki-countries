import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function CountryDetails({ countryList }) {
  const { countryAlpha3 } = useParams();

  const countrySelected = (countryAlpha3) =>
    countryList.find((country) => {
      return country.alpha3Code === countryAlpha3;
    });
  const country = countrySelected(countryAlpha3);

  return (
    <Container>
      <div className="details-page" key={country.name.common}>
        <div className="flag-name">
          <img
            src={
              'https://flagpedia.net/data/flags/emoji/twitter/256x256/' +
              country.alpha2Code.toLowerCase() +
              '.png'
            }
            alt={`${country.name.common} flag`}
            className="img-fluid"
          />
          <h2>{country.name.common}</h2>
        </div>
        <div>
          <Row className="border-line">
            <Col>
              <p>Capital</p>
            </Col>
            <Col>{country.capital}</Col>
          </Row>

          <Row className="border-line">
            <Col>
              <p>Area</p>
            </Col>
            <Col>{country.area} Km2 </Col>
          </Row>

          <Row className="border-line">
            <Col>
              <p>Borders</p>
            </Col>
            <Col>
              <ul className="border-list">
                {country.borders?.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {countrySelected(border).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      );
    </Container>
  );
}

export default CountryDetails;
