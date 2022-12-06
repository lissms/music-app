import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <SongsList />
    </Container>
  );
}

export default HomeView;
