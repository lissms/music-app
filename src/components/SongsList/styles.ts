import { typography } from '$/styles/themes/typography';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  ${typography.title2};
  color: ${({ theme }) => theme.color.grayscale900};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;
export const List = styled.ul`
  display: inline-block;
  width: 100%;
  list-style: none;
  padding: 0;
`;
