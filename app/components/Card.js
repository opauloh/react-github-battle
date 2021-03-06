import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/theme';

export default function Card({ header, subheader, avatar, href, name, children }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4>{header}</h4>
          <img alt={`Avatar for ${name}`} className="avatar" src={avatar} />
          {subheader && <h4 className="center-text">{subheader}</h4>}
          <h2 className="center-text">
            <a className="link" href={href}>
              {name}
            </a>
          </h2>
          {children}
        </div>
      )}
    </ThemeConsumer>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
