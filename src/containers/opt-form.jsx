import React from 'react';
import { OptForm } from '../components';

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Break />
      <OptForm.Input placeholder="Email address" />
      <OptForm.Button>Try 30 days free</OptForm.Button>
    </OptForm>
  );
}
