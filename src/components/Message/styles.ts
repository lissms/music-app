import { typography } from '$/styles/themes/typography';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.color.grayscale900};
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;
`;
export const Text = styled.p`
  ${typography.body};
  color: ${({ theme }) => theme.color.geraldine900};
  font-weight: ${({ theme }) => theme.weight.bold};
`;
