import { CardSong as DefaultCardSong } from '$/components/CardSong';
import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import styled from 'styled-components';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
`;
