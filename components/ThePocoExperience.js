import styled from 'styled-components';
import Image from 'next/image';
import theme from '../styles/theme';
const { color } = theme;

const ThePocoExperienceStyle = styled.section`
  background-color: ${color.background};

  .wrap {
    max-width: 40em;
    text-align: left;
  }

  h3 {
    // color: ${color.background};
  }

  p {
    color: ${color.foreground};
  }
`;

const ThePocoExperience = () => {
  return (
    <ThePocoExperienceStyle>
      <div className="wrap">
        <h3>The Poco Experience</h3>
        <p>Poco Piatti means "small plates." Here, you have the opportunity to experience the many flavors of the mediterranean! We strive to create dishes that are unique and healthy using only the most fresh and best quality ingredients. So share the small, or large, plates with your table and enjoy!</p>
      </div>
    </ThePocoExperienceStyle>
  );
}

export default ThePocoExperience;
