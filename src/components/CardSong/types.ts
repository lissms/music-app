// import { Colors } from '$/styles/themes/theme';
// import { typography } from '$/styles/themes/typography';
// import { ReactNode } from 'react';

// export type TVariants = keyof typeof typography;

export type CardSongProps = {
  image: string;
  name?: string;
  description?: string;
  genre?: string;
  author?: string;
  isFavorite?: boolean;
};

// export type $StyledProps = {
//   $variant: CardSongProps['variant'];
//   $color: CardSongProps['color'];
// };
