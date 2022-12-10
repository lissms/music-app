import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({
  songName,
  setSongName,
  placeholder,
  className,
}: SearchInputProps) => (
  <Container className={className}>
    <SearchLineIcon />
    <Input
      name="search"
      label="search"
      hideLabel={true}
      placeholder={placeholder}
      value={songName}
      onChange={(e) => setSongName(e.target.value)}
    />
  </Container>
);
