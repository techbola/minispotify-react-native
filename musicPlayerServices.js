import TrackPlayer from 'react-native-track-player';

import {playListData} from './src/constants';

export async function playbackService() {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(playListData);
}
