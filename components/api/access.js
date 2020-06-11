import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../service/analytics';

const SIGNUP_URL = process.env.SIGNUP_URL;

const Access = ({ is_open, link, description, condition, clients }) => {
  const signup_url_parts =
    link.match(/^https:\/\/signup.api.gouv.fr(.*)/) || [];
  const signup_path =
    signup_url_parts.length === 2 ? signup_url_parts[1] : null;
  const fixed_link =
    SIGNUP_URL && signup_path ? `${SIGNUP_URL}${signup_path}` : link;

  return (
    <Section id="access" title="Conditions d’accès">
      {is_open ? (
        <>
          <p>L'API est ouverte à tous.</p>
          <p>
            Pour accéder aux données, consultez la{' '}
            <a href="#doc_tech">documentation </a>
            {link ? (
              <>
                ou le <a href={fixed_link}>site internet</a>
              </>
            ) : (
              ''
            )}
          </p>
        </>
      ) : fixed_link ? (
        <div className="highlight-info">
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}

          {condition && condition === 'OUVERT sous contrat' ? (
            <div>
              <p>
                L’API nécessite une habilitation, son accès est restreint aux
                entités suivantes :
              </p>
              <ul>
                {clients.map(client => (
                  <li
                    key={client}
                    dangerouslySetInnerHTML={{ __html: client }}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <p>{condition}</p>
          )}
          <ButtonLink href={fixed_link} onClick={logDemanderAcces} large>
            <i className="icon key"></i>Demandez l'accès
          </ButtonLink>
        </div>
      ) : (
        <p>Accès à l'API non documenté</p>
      )}
    </Section>
  );
};

Access.defaultProps = {
  is_open: false,
  link: null,
  description: null,
  condition: null,
  clients: [],
};

Access.propTypes = {
  is_open: PropTypes.bool,
  link: PropTypes.string,
  description: PropTypes.string,
  condition: PropTypes.string,
  clients: PropTypes.array,
};

export default Access;
