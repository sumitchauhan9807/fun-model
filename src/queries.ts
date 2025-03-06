import { gql } from "@apollo/client";

export const HELLO = gql`
	query hello {
		hello
	}
`;

export const LOGIN = gql`
	mutation modelLogin($data: LoginInput!) {
		modelLogin(data: $data) {
			user {
				id
				email
				username
				name
				avatar
				profileSetupStep
				profileComplete
				documentsVerified
			}
			token
		}
	}
`;

export const REGISTER = gql`
	mutation modelRegister($data: RegisterInput!) {
		modelRegister(data: $data) {
			user {
				id
				email
				username
				name
				avatar
				profileSetupStep
				profileComplete
				documentsVerified
			}
			token
		}
	}
`;

export const UPDATE_AVATAR = gql`
	mutation updateAvatar($filename: String!) {
		updateAvatar(filename: $filename) {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
		}
	}
`;

export const UPDATE_DOCUMENTS = gql`
	mutation updateDocument($filename: String!, $docType: UploadDocsInputType!) {
		updateDocument(filename: $filename, docType: $docType) {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
		}
	}
`;

export const ADD_BASIC_INFO = gql`
	mutation addBasicInfo($data: AddBasicInfo!) {
		addBasicInfo(data: $data) {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
		}
	}
`;

export const MODEL_DATA = gql`
	query modelData {
		modelData {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
			basic_info {
				id
			}
			address {
				id
			}
			documents {
				passport_front
				passport_back
				selfie_with_id
				proof_of_address
				business_certification
			}
		}
	}
`;

export const GET_CLOUD_PUT_URL = gql`
	query getCloudPutUrl($filename: String!, $mimetype: String!, $bucket: String) {
		getCloudPutUrl(filename: $filename, mimetype: $mimetype, bucket: $bucket)
	}
`;

export const GET_MODEL_ACTIVE_SESSION = gql`
	query getModelActiveSession {
		getModelActiveSession {
			id
			title
			netTokens
			status
		}
	}
`;

export const CREATE_SESSION = gql`
	mutation createSession($title:String!) {
		createSession(title:$title) {
			id
		}
	}
`;

export const ADD_GOAL = gql`
	mutation addGoal($title:String!,$tokenValue:Float!,$sessionId:Float!) {
		addGoal(title:$title,tokenValue:$tokenValue,sessionId:$sessionId) {
			id
		}
	}
`;

export const GET_SESSION_GOAL = gql`
	query getSessionGoal($sessionId:Float!) {
		getSessionGoal(sessionId:$sessionId) {
			id
			title
			isAchived
			tokensAchived
			tokenValue
		}
	}
`;




export const END_LIVE_SESSION = gql`
	mutation endLiveSession($id:Float!) {
		endLiveSession(id:$id)
	}
`;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const GET_RTP_CAPABILITIES = gql`
	mutation getRtpCapabilities {
		getRtpCapabilities
	}
`;

export const CREATE_PRODUCER_TRANSPORT = gql`
	mutation createProducerTransport($modelId: String!) {
		createProducerTransport(modelId: $modelId) {
			id
			iceParameters
			iceCandidates
			dtlsParameters
		}
	}
`;

export const CONNECT_PRODUCER_TRANSPORT = gql`
	mutation ConnectProducerTransport($transportId: String!, $dtlsParameters: String!) {
		connectProducerTransport(transportId: $transportId, dtlsParameters: $dtlsParameters)
	}
`;

export const START_PRODUCING = gql`
	mutation startProducing($transportId: String!, $rtpParameters: String!, $kind: String!) {
		startProducing(transportId: $transportId, rtpParameters: $rtpParameters, kind: $kind)
	}
`;

export const CREATE_CONSUMER_TRANSPORT = gql`
	mutation createConsumerTransport($clientId: String!, $modelId: String!) {
		createConsumerTransport(clientId: $clientId, modelId: $modelId) {
			id
			iceParameters
			iceCandidates
			dtlsParameters
		}
	}
`;

export const CONSUME_MEDIA = gql`
	mutation consumeMedia($rtpCapabilities: String!, $clientId: String!, $modelId: String!, $kind: String!) {
		consumeMedia(rtpCapabilities: $rtpCapabilities, clientId: $clientId, modelId: $modelId, kind: $kind) {
			producerId
			id
			kind
			rtpParameters
		}
	}
`;

export const CONNECT_CONSUMER_TRANSPORT = gql`
	mutation connectConsumerTransport($clientId: String!, $modelId: String!, $dtlsParameters: String!) {
		connectConsumerTransport(clientId: $clientId, modelId: $modelId, dtlsParameters: $dtlsParameters)
	}
`;

export const UNPAUSE_CONSUMER = gql`
	mutation unpauseConsumer($clientId: String!, $modelId: String!, $kind: String!) {
		unpauseConsumer(clientId: $clientId, modelId: $modelId, kind: $kind)
	}
`;
