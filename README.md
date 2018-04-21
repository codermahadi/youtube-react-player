## YouTube Playlist Player

**About**

This is my first project written in React.
This simple Web App can obtain data from YouTube API about a specific playlist.

It contains three main components:

- ApiData (for data fetching) 
- SongList (for displaying a list of videos)
- Player (YouTube player frame)

It gives you a possibility to select up to 50 songs and play them (due to YouTube limitations)

*This is deffinetely still under construction.
Probably the development will be continued.*

**Important**
To use this project, you have to generate your own API key. 

More info here:
[YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started)


**Dependencies:**

- [react-strap](https://reactstrap.github.io)

- [SASS](https://sass-lang.com/)
*(for future development, more info here: [click](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc))*

**Usage:**

> npm install

> npm start

*optional*

> npm run watch-css

*(for SASS)*

**Basic configuration**

*ApiData Component:*

> KEY = 'YOUR_YOUTUBE_API_KEY';

> PLID = 'YOUR_YOUTUBE_PLAYLIST_ID';

> VIDS = NUMBER_OF_SONGS (MAX: 50);



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).