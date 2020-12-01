import React from 'react';
import Selector from '../Selector';
import Input from '../Input';

const Filter = (props) => {
  const { setFilters, filters, selectors, setPage } = props;

  return (
    <>
      {Object.keys(filters).map((item, key) => {
        return filters[item].type === 'selector' ? (
          <Selector
            key={item + key}
            filter={item}
            filters={filters}
            selectors={selectors}
            setFilters={setFilters}
            setPage={setPage}
          />
        ) : (
          <Input
            key={item + key}
            filter={item}
            filters={filters}
            setFilters={setFilters}
            setPage={setPage}
          />
        );
      })}
    </>
  );
};

export default Filter;
