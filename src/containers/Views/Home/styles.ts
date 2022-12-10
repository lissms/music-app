import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
  margin-top: 4.688rem;

  ${from['mobile']} {
    margin-top: 0;
  }
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
`;
