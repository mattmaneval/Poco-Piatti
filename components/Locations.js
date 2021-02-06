import styled from 'styled-components';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, space } = theme;

const LocationsStyle = styled.section`
  text-align: center;

  .locations-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${space.space};

    @media ${media.primary} {
      grid-template-columns: 1fr;
      text-align: left;
    }
  }

  .address {
    margin-bottom: ${space.space};
  }

  .hours {
    @media ${media.primary} {
      margin-bottom: ${space.space};
    }
  }

  p {
    color: ${color.foregroundDim};
  }
`;

const Locations = () => (
  <LocationsStyle>
    <div className="wrap">
      <div className="locations-container">
        <div className="location-container">
          <h3>Perrysburg</h3>
          <div className="address">
            <p>3155 Chappel Dr.</p>
            <p>Perrysburg, Ohio</p>
          </div>
          <div className="hours">
            <p>Mon, 11:30 am - 9 pm</p>
            <p>Tue - Thu, 11:30 - 9:30 pm</p>
            <p>Fri - Sat, 11:30 - 10:30 pm</p>
            <p>Sun, 12 am - 9 pm</p>
          </div>
        </div>
        <div className="location-container">
          <h3>Sylvania</h3>
          <div className="address">
            <p>6710 W. Central Ave #1</p>
            <p>Toledo, Ohio</p>
          </div>
          <div className="hours">
            <p>Mon - Fri, 11:30 am - Close</p>
            <p>Sat, 11:30 - Close</p>
            <p>Sun, 12 am - 9 pm</p>
          </div>
        </div>
        <div className="location-container">
          <h3>Downtown</h3>
          <div className="address">
            <p>329 N Huron</p>
            <p>Toledo, Ohio</p>
          </div>
          <div className="hours">
            <p>Open for private events.</p>
          </div>
        </div>
      </div>
    </div>
  </LocationsStyle>
);

export default Locations;
