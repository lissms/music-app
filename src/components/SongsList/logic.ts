import { gql } from '@apollo/client';

import type {
  InfoPlay,
  MappedSong,
  Song,
  SongsListProps,
  UseQueryProps,
} from './types';

export const getSongsQuery = (
  name: string | number | readonly string[] | undefined,
) => {
  const SONGS_QUERY = gql`
    {
      songs(search: "${name}", sort: {}) {
        pageMeta {
          pages
          total
        }
        songs {
          description
          genre
          id
          image
          name
          audio {
            id
            url
          }
          author {
            name
          }
        }
      }
    }
  `;
  return SONGS_QUERY;
};
