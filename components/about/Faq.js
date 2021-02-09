import styled from 'styled-components';
import theme from '../../styles/theme';

const { color, space } = theme;

const FaqStyle = styled.section`
  background-color: ${color.foreground};

  .wrap {
    max-width: 44em;
  }

  h4 {
    margin-bottom: 4rem;
  }

  .faq-question {
    margin-bottom: ${space.quarterSpace};
    font-weight: bold;
    font-size: 1.25em;
  }

  .faq-answer {
    margin-bottom: ${space.space};
    line-height: 160%;
  }
`;

const faqData = [
  {
    question: 'Dietary Restrictions',
    answer: 'We accommodate most dietary needs like gluten free, vegetarian, and vegan. Ask for our gluten free menu. Our meat is Halal.',
  },
  {
    question: 'Locations',
    answer: 'We have three locations: Levis Commons in Perrysburg, Central Avenue in Sylvania, and Downtown Toledo on Huron near Adams.',
  },
  {
    question: 'Reservations and Carryout',
    answer: 'For reservations at Perrysburg location call: 419-931-0281For reservations at Sylvania location call: 419-931-0281For reservations at Downtown location call: 419-931-0281Automatic gratuity may be applied to groups of 5 or more.',
  },
  {
    question: 'Bar Options',
    answer: 'We serve beer, wine, cocktails, and our famous sangria!',
  },
  {
    question: 'Kids Menu',
    answer: 'Ask for a cheese or pepperoni pizza.',
  },
  {
    question: 'Wifi',
    answer: 'Complimentary wifi is available.',
  },
  {
    question: 'Gift Certificates',
    answer: 'We offer gift certificates in-store at all our locations.',
  },
];

const Faq = () => (
  <FaqStyle>
    <div className="wrap">
      <h4>Frequently Asked Questions</h4>
      {faqData.map((faq) => (
        <>
          <div className="faq-question">
            {faq.question}
            ?
          </div>
          <div className="faq-answer">{faq.answer}</div>
        </>
      ))}
    </div>
  </FaqStyle>
);

export default Faq;
