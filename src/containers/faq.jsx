import React from 'react';
import faqData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import OptFormContainer from './opt-form';

export default function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptFormContainer />
    </Accordion>
  );
}
