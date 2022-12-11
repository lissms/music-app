import { useCallback, useState } from 'react';

import { InfoPlay, MappedSong } from './types';

const infoPlayInitialState = {
  url: '',
  selectedId: 0,
  isPlayingSong: false,
  image: '',
  name: '',
  author: '',
};

export const useManageTrackControls = () => {
  const [songs, setSongs] = useState<MappedSong[]>([]);
  const [infoPlay, setInfoPlay] = useState<InfoPlay>(infoPlayInitialState);

  const toggleSelectedSongIsPlaying = useCallback(
    (selectedId: number) => {
      setSongs(
        songs?.map((song) =>
          song.id === selectedId
            ? {
                ...song,
                isPlaying: !song.isPlaying,
              }
            : {
                ...song,
                isPlaying: false,
              },
        ),
      );
    },
    [songs],
  );

  const handleClickPlay = (
    selectedId: number,
    url: string,
    image: string,
    isPlayingSong: boolean,
    name: string,
    author: string,
  ): void => {
    toggleSelectedSongIsPlaying(selectedId);
    setInfoPlay({
      selectedId,
      url,
      isPlayingSong: !isPlayingSong,
      image,
      name,
      author,
    });
  };

  const getNextIndex = useCallback(
    (id: number | undefined): number => {
      const index = songs?.findIndex((song) => id === song.id);
      if (songs.length === index + 1) {
        return 0;
      } else {
        return index + 1;
      }
    },
    [songs],
  );

  const getBackIndex = (id: number | undefined): number => {
    const index = songs?.findIndex((song) => id === song.id);
    if (index === 0) {
      return songs?.length - 1;
    } else {
      return index - 1;
    }
  };

  const handleClickBack = (selectedId: number): void => {
    const backIndex = getBackIndex(selectedId);
    setInfoPlay({
      selectedId: songs[backIndex]?.id as number,
      url: songs[backIndex]?.audio as string,
      image: songs[backIndex]?.image as string,
      isPlayingSong: true,
      name: songs[backIndex]?.songName as string,
      author: songs[backIndex]?.author as string,
    });
    toggleSelectedSongIsPlaying(songs[backIndex]?.id || selectedId);
  };

  const handleClickNext = useCallback(
    (selectedId: number): void => {
      const nextIndex = getNextIndex(selectedId);
      setInfoPlay({
        selectedId: songs[nextIndex]?.id as number,
        url: songs[nextIndex]?.audio as string,
        image: songs[nextIndex]?.image as string,
        isPlayingSong: true,
        name: songs[nextIndex]?.songName as string,
        author: songs[nextIndex]?.author as string,
      });
      toggleSelectedSongIsPlaying(songs[nextIndex]?.id || selectedId);
    },
    [getNextIndex, songs, toggleSelectedSongIsPlaying],
  );

  return {
    songs,
    setSongs,
    handleClickPlay,
    infoPlay,
    handleClickBack,
    handleClickNext,
  };
};
