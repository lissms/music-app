import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const useAudioPlayer = (
  isPlaying: boolean,
  id: number,
  handleClickNext: (selectedId: number) => void,
) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (isSongLoaded: boolean, isSongPlaying: boolean) => {
    if (isSongLoaded) {
      if (isSongPlaying) {
        void audioPlayerRef.current?.play();
      } else {
        audioPlayerRef.current?.pause();
      }
    }
  };

  useEffect(() => {
    const isSongLoaded = duration > 0;
    togglePlay(isSongLoaded, isPlaying);
  }, [duration, isPlaying]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(audioPlayerRef.current?.currentTime || 0);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [audioPlayerRef]);

  const getNextSongAutomatically = useCallback(() => {
    if (audioPlayerRef.current?.ended) {
      handleClickNext(id);
    }
  }, [handleClickNext, audioPlayerRef, id]);

  useEffect(() => {
    getNextSongAutomatically();
  }, [audioPlayerRef.current?.ended, getNextSongAutomatically]);

  const handleLoadedMetadata = (event: SyntheticEvent) => {
    const target = event.target as HTMLAudioElement;
    setDuration(target.duration);
  };

  const onChangePlayingBar = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = parseInt(target.value);
    }
    void audioPlayerRef.current?.play();
  };

  return {
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    audioPlayerRef,
    togglePlay,
    getNextSongAutomatically,
    handleLoadedMetadata,
    onChangePlayingBar,
  };
};
