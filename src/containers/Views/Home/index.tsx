import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';
import { useState } from 'react';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const [songName, setSongName] = useState<
    string | number | readonly string[] | undefined
  >('');
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        songName={songName}
        setSongName={setSongName}
        placeholder="Search by title, genre..."
      />
      <SongsList songName={songName} />
    </Container>
  );
}

export default HomeView;
