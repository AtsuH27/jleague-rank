import { Select } from '@mantine/core';

function Data() {
  return (
    <Select
      label="順位表"
      placeholder="2022"
      searchable
      nothingFound="No options"
      data={['2022', '2021', '2020', '2019']}
    />
  );
}

export default Data;