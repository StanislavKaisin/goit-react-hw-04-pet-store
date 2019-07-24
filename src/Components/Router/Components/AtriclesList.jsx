import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const AtriclesList = ({ items = [], match, location }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {/* <Link to={`${match.path}/${item.id}`}>{item.title}</Link> */}
            <Link
              to={{
                pathname: `${match.path}/${item.id}`,
                state: { x: 5, from: location },
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

AtriclesList.propTypes = {};

export default withRouter(AtriclesList);
