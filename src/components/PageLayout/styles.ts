import { SideMenu as DefaultSideMenu } from '$/components/SideMenu';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SideMenu = styled(DefaultSideMenu)`
  flex-shrink: 0;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 2.5rem;
  overflow: scroll;

  ${from['tabletLandscape']} {
    padding-inline: 6rem;
  }
  ${from['mobile']} {
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 64rem;
`;
