import PubNub from "pubnub";
import { useEffect } from "react";

let pubnub = new PubNub({
	publishKey: "pub-c-a2053f29-e590-4d0f-9ebe-7460edd2d9d1",
	subscribeKey: "sub-c-b3d2e390-9082-11eb-9de7-3a1dcc291cdf",
	userId: "123123123123123",
});

export function useSubscribe(channelName) {
	const channel = pubnub.channel(channelName);
	const subscription = channel.subscription();
	subscription.subscribe();
  const unSubscribe = () =>{ 
    subscription.unsubscribe()
  }
	return [
    subscription,
    unSubscribe
  ];
}

export function usePubish(channelName) {
	
	const publish = (message) => {
		var publishPayload = {
			channel : channelName,
			message: message
		}
		pubnub.publish(publishPayload)
	}
	return [ publish ]
}
