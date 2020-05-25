import React from 'react';

import Page from '../layouts/page';
import { Roadmap } from '../components/roadmap';

export default () => {
  return (
    <Page title="Feuille de route">
      <div className="text-wrapper text-style">
        <h1>
          La feuille de route des APIs du service public{' '}
          <span role="img" aria-label="emoji travaux">
            🏗
          </span>
        </h1>
        <p>
          Depuis 2016, nous référençons les APIs de toutes les administrations
          qui ouvrent leur données
        </p>
        <Roadmap />
      </div>
    </Page>
  );
};
