import React from 'react';
import faqData from '../fixtures/faqs.json';
import { Faq } from '../components';

export default function FaqContainer() {
  return (
    <Faq>
      <Faq.Title>Frequently Asked Questions</Faq.Title>
      {faqData.map((item) => (
        <Faq.Item key={item.id}>
          <Faq.Header>{item.header}</Faq.Header>
          <Faq.Body>{item.body}</Faq.Body>
        </Faq.Item>
      ))}
    </Faq>
  );
}
