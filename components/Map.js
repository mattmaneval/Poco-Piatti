import styled from 'styled-components';

const MapStyle = styled.div`
  iframe {
    width: 100vw;
  }
`;

const Map = () => (
  <MapStyle>
    <iframe
      title="Poco Piatti"
      width="600"
      height="450"
      src="https://www.google.com/maps/embed/v1/search?q=Poco%20Piatti&key=AIzaSyBNJCEAj0tFOx14yJN20KE79gXO2_P2TDI"
      allowFullScreen
    />
  </MapStyle>
);

export default Map;
