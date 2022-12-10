import { Dispatch, SetStateAction } from 'react';

export type SearchInputProps = {
  placeholder?: string;
  className?: string;
  songName: string | number | readonly string[] | undefined;
  setSongName: Dispatch<
    SetStateAction<string | number | readonly string[] | undefined>
  >;
};
