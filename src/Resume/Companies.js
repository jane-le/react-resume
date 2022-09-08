import React, { PropTypes } from 'react';
import Company from './Company';

const Companies = ({ data: companies }) => (
  <div>
    {companies.map((company, key) => (
      <Company
        key={key}
        name={company.name}
        title={company.title}
        date={company.date}
        achievements={company.achievements} />
    ))}
  </div>
);

Companies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Companies;
