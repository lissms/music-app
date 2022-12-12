# Z1 Front-end Challenge

Here at Z1 we love music! We want to share our favorite tunes with you, therefore we have made a music application.


**To start**:

-To launch the project :- Run yarn dev

-To launch the storybook:- Run yarn storybook


### Implemented Features 🎶 🎶

In your music application the user is able to see list of songs, search a specific song by author or song name, and save its favorite tunes.

**Player functionalities**! 🔊

- By clicking on the play button of each card, the song is loaded on the player and start playing
- Player is fully functional. User is able to:

 - Play and pause song
 - Listen to any song they choose
 - Move between songs with the prev/next buttons of the audio player
 - If a song list is playing. Once the song ends, it automatically goes to the next one
 - The user can fast forward the song by the progress bar

## To carry out these functionalities I have used:
- **LocalStorage** to save  fav tunes
- **Hooks** to separate the responsibility between components and their logic
- **Apollo Client** to manage both local and remote data with GraphQL.
- **Storybook** to document the components:- CardSong, Message, AudioPlayer.
- **The HTML <audio> element** is used to play the songs


## Stack and tech considerations

![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![iamge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- This project is written in **Next.js**
- The project includes **Typescript**
- Likewise, **we usually work with GraphQL**
- For styling, we use **styled-components**
- We use **Storybook** tool for UI
  


