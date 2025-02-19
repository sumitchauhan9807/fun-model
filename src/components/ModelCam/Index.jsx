import LiveFeed from "src/components/ModelCam/LiveFeed";
import ChatBox from "src/components/ModelCam/ChatBox";
import { useMutation } from "@apollo/client";
import { GET_RTP_CAPABILITIES, CREATE_PRODUCER_TRANSPORT, CONNECT_PRODUCER_TRANSPORT, START_PRODUCING } from "src/sfuQueries";
import { Device } from "mediasoup-client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const device = new Device();
let localStream = null;
let producerTransport = null;
let producer = null;
let audioProducer = null;

function Index() {
	let localVideoRef = useRef(null);
	const [getRtpCap, { RTPloading }] = useMutation(GET_RTP_CAPABILITIES, { context: { apiName: "sfu" } });
	const [createProducerTransport, { loadingCPT }] = useMutation(CREATE_PRODUCER_TRANSPORT, { context: { apiName: "sfu" } });
	const [connectProducerTransport, { loadingCNPT }] = useMutation(CONNECT_PRODUCER_TRANSPORT, { context: { apiName: "sfu" } });
	const [startProducing, { loadingsp }] = useMutation(START_PRODUCING, { context: { apiName: "sfu" } });
	const [isOnline, setIsOnline] = useState(false);

	const [loading, setLoading] = useState(false);

	const userData = useSelector((state) => state.user);

	const loadDevice = async (routerRtpCapabilities) => {
		if (device.loaded) return;
		await device.load({ routerRtpCapabilities });
	};

	useEffect(()=>{
		runTest()
	},[])

	const runTest = async () => {
		try {
			setLoading(true);
			let { data } = await getRtpCap();
			let routerRtpCapabilities = JSON.parse(data.getRtpCapabilities);
			await loadDevice(routerRtpCapabilities);
			await createProducer();
			await publish();
			setLoading(false);
		} catch (e) {
			setLoading(false);
		}
		// console.log(routerRtpCapabilities)
		// console.log(device.loaded)
	};

	const createProducer = async () => {
		await setLocalStream();
		let { data } = await createProducerTransport({
			variables: {
				modelId: userData.user.username,
			},
		});
		let { id, iceParameters, iceCandidates, dtlsParameters } = data.createProducerTransport;
		iceParameters = JSON.parse(iceParameters);
		iceCandidates = JSON.parse(iceCandidates);
		dtlsParameters = JSON.parse(dtlsParameters);

		const transport = device.createSendTransport({
			id,
			iceParameters,
			iceCandidates,
			dtlsParameters,
		});

		producerTransport = transport;
		producerTransport.on("connect", async ({ dtlsParameters }, callback, errback) => {
			console.log("Transport connect event has fired!");
			// connect comes with local dtlsParameters. We need
			// to send these up to the server, so we can finish
			// the connection
			console.log(dtlsParameters);
			console.log(transport);
			let { data } = await connectProducerTransport({
				variables: {
					dtlsParameters: JSON.stringify(dtlsParameters),
					transportId: transport.id,
				},
			});
			callback();
			// const resp = await socket.emitWithAck('connect-transport',{dtlsParameters})
			// if(resp === "success"){
			// 		//calling callback simply lets the app know, the server
			// 		// succeeded in connecting, so trigger the produce event
			// 		callback()
			// }else if(resp === "error"){
			// 		//calling errback simply lets the app know, the server
			// 		// failed in connecting, so HALT everything
			// 		errback()
			// }
			// console.log(resp)
		});
		producerTransport.on("produce", async (parameters, callback, errback) => {
			console.log("Transport produce event has fired!");
			console.log(parameters);
			const { kind, rtpParameters } = parameters;
			console.log(kind, "kindkindkindkindkind");
			let { data } = await startProducing({
				variables: {
					rtpParameters: JSON.stringify(rtpParameters),
					kind: kind,
					transportId: producerTransport.id,
				},
			});
			console.log(data.startProducing);
			callback(data.startProducing);
			// const resp = await socket.emitWithAck('start-producing',{ kind, rtpParameters })
			// if(resp === "error"){
			// 		//somethign went wrong when the server tried to produce
			// 		errback()
			// }else{
			// 		// resp contains an id!
			// 		callback({id:resp})
			// }
			// // console.log(resp)
		});
	};
	const publish = async () => {
		// console.log("Publish feed!")
		const videoTrack = localStream.getVideoTracks()[0];
		const audioTrack = localStream.getAudioTracks()[0];
		const videoProducer = await producerTransport.produce({ track: videoTrack });
		console.log(videoProducer, "VIDEO PRODUCED");
		const audioProducer = await producerTransport.produce({ track: audioTrack });
		console.log("AUDIO PRODUCED");
		setIsOnline(true);
		// alert("You are online!!");
		// console.log(track,"track")
	};

	const setLocalStream = async () => {
		try {
			localStream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: { min: 1280 },
					height: { min: 720 },
					// facingMode: { exact: "environment" },
				},
				audio: true,
			});
			if (!localVideoRef.current) {
				return;
			}
			localVideoRef.current.srcObject = localStream;
			localVideoRef.current.play();
		} catch (err) {
			console.log("GUM error", err);
		}
	};

	// return <ProduceOld localVideoRef={localVideoRef} runTest={runTest} publish={publish}/>

	if (!isOnline) {
		return <StartBroadcast localVideoRef={localVideoRef} runTest={runTest} publish={publish} />;
	}

	return (
		<div>
			<div id="body">
				<div className="main-layout sticky-header-desktop sticky-header-mobile sticky-viewcam-subheader-mobile viewcampage sh-initial">
					<div className="wrapper">
						<main id="app" className="main-layout-main main-layout-main-multiple-column main-layout-main-single-column">
							<div className="main-layout-main-right main-layout-main-right-single-column">
								<div className="main-layout-main-content">
									<div className="view-cam-page-wrapper">
										<div className="view-cam-page">
											<div className="view-cam-container">
												{/* <ModelHeader /> */}
												<div className="page">
													<div className="ViewCamWrapper#p6 ViewCamWrapper__vertical#AV view-cam-page-main widescreen-container">
														<LiveFeed videoRef={localVideoRef} isOnline={isOnline} localStream={localStream} />
														<ChatBox username={userData.user.username} playing={false} />
													</div>
												</div>
												<div></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
					{/* <Footer /> */}
				</div>
			</div>
		</div>
	);
}

const StartBroadcast = ({ runTest }) => {
	return (
		<>
			<div style={{color:'black'}} className="flex justify-center items-center mt-24">
				Please Wait while we join you !!
			</div>
		</>
	);
};

export default Index;
