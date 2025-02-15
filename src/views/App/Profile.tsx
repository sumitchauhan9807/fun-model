import { useRef, useState } from "react";
import PorfileBar from "src/views/App/components/Profile/ProfileBar";
import BasicInfo from "src/views/App/components/Profile/BasicInfo";
import UploadDocuments from "src/views/App/components/Profile/UploadDocuments";

import { getCloudPutUrl, uploadToCloud } from "src/Helpers/CloudUpload";

import { FileUpload, BasicInput, Select, DatePicker, Textarea } from "src/components/FormItems";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_AVATAR, ADD_BASIC_INFO, MODEL_DATA, UPDATE_DOCUMENTS } from "src/queries";
import { setUserInfo } from "src/redux/user";
import { useDispatch, useSelector } from "react-redux";
import { PageSkeleton } from "src/components/Skeletons";
function Profile() {
	const userData = useSelector((state: any) => state.user);
	let step = userData.user.profileSetupStep;
	let dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [uploadAvatar] = useMutation(UPDATE_AVATAR);
	const [updateDocuments] = useMutation(UPDATE_DOCUMENTS);

	const [addBasic] = useMutation(ADD_BASIC_INFO);
	const { error, data, refetch } = useQuery(MODEL_DATA);
	console.log(data, "modellllllll");

	const upload = async (file: any) => {
		setLoading(true);
		let result = await getCloudPutUrl(file);
		if (!result.status) {
			alert(result.error);
		}
		console.log(result.data);
		try {
			let uploadData = await uploadToCloud(file, result.data, (progress: any) => {
				console.log(`progress======`, progress);
				setProgress(progress);
			});
			let { data } = await uploadAvatar({
				variables: { filename: result.filename },
			});
			dispatch(setUserInfo(data.updateAvatar));
			setLoading(false);
			setProgress(0);
			console.log(data);
		} catch (e) {
			setLoading(false);
			setProgress(0);
			alert(e);
		}
	};

	const addBasicInfo = async (formData: any) => {
		setLoading(true);
		try {
			let { data } = await addBasic({
				variables: {
					data: formData,
				},
			});
			dispatch(setUserInfo(data.addBasicInfo));
			setLoading(false);
			console.log(data);
		} catch (e) {
			setLoading(false);
			alert(e);
		}
	};

	const uploadDocument = async (file: any, docType: any) => {
		setLoading(true);
		let result = await getCloudPutUrl(file);
		if (!result.status) {
			alert(result.error);
		}
		console.log(result.data);
		try {
			let uploadData = await uploadToCloud(file, result.data, (progress: any) => {
				console.log(`progress======`, progress);
				setProgress(progress);
			});
			let { data } = await updateDocuments({
				variables: {
					filename: result.filename,
					docType: {
						document: docType,
					},
				},
			});
			dispatch(setUserInfo(data.updateDocument));
			setLoading(false);
			setProgress(0);
			refetch();
			console.log(data);
		} catch (e) {
			setLoading(false);
			setProgress(0);
			alert(e);
		}
	};
	if (!data?.modelData) return <PageSkeleton />;
	return (
		<>
			<div className="p-4">
				<PorfileBar step={step} />
				<div className="shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6">
					{step === 0 ? (
						<section className="container w-full mx-auto items-center py-32">
							<div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
								<FileUpload upload={upload} maxSize={2} loading={loading} progress={progress} text={"Upload Avatar"} />
							</div>
						</section>
					) : (
						""
					)}
					{step === 1 ? <BasicInfo onData={addBasicInfo} loading={loading} /> : ""}
					{step === 2 ? <UploadDocuments documents={data.modelData.documents} uploadDocument={uploadDocument} progress={progress} loading={loading} /> : ""}
				</div>
			</div>
		</>
	);
}

export default Profile;
