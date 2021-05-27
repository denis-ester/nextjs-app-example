import styled from 'styled-components';

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.5s;
`;

export { Accordion, AccordionContent };
