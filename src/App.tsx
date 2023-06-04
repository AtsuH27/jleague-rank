import { Group } from '@mantine/core';
import Data from './Data';
import RankTable from './RankTable';

function App() {
  return (
    <div className="App">
  <Group>
    <Data/>
    </Group>
    <Group>
      <RankTable/>
    </Group>
    </div>
  );
}

export default App;
