import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AdMobBanner} from 'react-native-admob';

const App = () => {
  const onFailToRecieveAd = (error) => console.log(error);

  return (
    <>
      <SafeAreaView>
        <AdMobBanner
          adSize="largeBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
