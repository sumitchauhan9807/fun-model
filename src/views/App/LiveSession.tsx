import { useMutation, useQuery } from "@apollo/client";
import ModelCam from "src/components/ModelCam/Index";
import { GET_MODEL_ACTIVE_SESSION, CREATE_SESSION, END_LIVE_SESSION } from "src/queries";
import { useDispatch ,useSelector } from "react-redux";
import { setLiveSession } from "src/redux/user";
import { useEffect, useState } from "react";
import { BasicInput } from "src/components/FormItems";
import { toast } from "react-toastify";
function LiveSession() {
	const dispatch = useDispatch();
	const currentSession = useSelector((state:any) => state.user.liveSession);
	let { data, refetch } = useQuery(GET_MODEL_ACTIVE_SESSION);
	const [createSession] = useMutation(CREATE_SESSION);
	const [endLiveSession] = useMutation(END_LIVE_SESSION);

	const [loading, setLoading] = useState(false);
	const [sessionResolved,setSessionResolved] = useState(false)

	console.log(currentSession,"currentSession");

	useEffect(() => {
		if (data?.getModelActiveSession) {
			dispatch(setLiveSession(data?.getModelActiveSession));
		}
	}, [data]);

	const create = async (title: any) => {
		setLoading(true);
		try {
			await createSession({
				variables: {
					title: title,
				},
			});
			toast.success(`Live Session Created`, {
				position: "top-center",
				autoClose: 1000,
			});
			refetch();
			setLoading(false);
		} catch (e) {
			setLoading(false);
			alert(e);
		}
	};

	const endSession = async () => {
		setLoading(true);
		try {
			await endLiveSession({
				variables: {
					id: Number(data?.getModelActiveSession.id),
				},
			});
			refetch();
			setLoading(false);
		} catch (e) {
			setLoading(false);
			alert(e);
		}
	};
	if (!data?.getModelActiveSession) return <CreateLiveSession create={create} />;
	if(sessionResolved) return <ModelCam/>
	return <ResumeLiveSession endSession={endSession} currentSession={currentSession} setSessionResolved={setSessionResolved} />;
}

const ResumeLiveSession = ({ endSession ,currentSession ,setSessionResolved }: { endSession: any ,currentSession:any ,setSessionResolved:any }) => {
	return (
		<center className="mt-12">
			<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<p className="mb-3 text-large font-normal text-gray-700 dark:text-gray-400"> A Live Session with title <b>{currentSession.title}</b> is in Progress !!.</p>
				<a
					onClick={(e) => {e.preventDefault() ; setSessionResolved(true)}}
					href="#"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-12"
				>
					Join Session
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
					</svg>
				</a>
				<p className="mb-3 text-large font-normal text-gray-700 dark:text-gray-400"> End Live Session !!.</p>
				<a
					onClick={(e) => {
						e.preventDefault();
						endSession();
					}}
					href="#"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					End Live Session
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
					</svg>
				</a>
			</div>
		</center>
	);
};

const CreateLiveSession = ({ create }: { create: any }) => {
	const [inputVal, setInputVal] = useState("");

	const createSession = () => {
		if (inputVal.length < 5)
			return toast.error(`Use title with a minimum of 5 chars`, {
				position: "top-center",
				autoClose: 1000,
			});
		create(inputVal);
	};

	return (
		<center className="mt-12">
			<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Start With a new Live Session</p>
				<div className="mb-4">
					<input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Session Title" required />
				</div>
				<a
					onClick={(e) => {
						e.preventDefault();
						createSession();
					}}
					href="#"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Create Live Session
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
					</svg>
				</a>
			</div>
		</center>
	);
};
export default LiveSession;
