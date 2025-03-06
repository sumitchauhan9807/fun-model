import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { toast } from "react-toastify";
import { ADD_GOAL ,GET_SESSION_GOAL } from "src/queries";
import { useDispatch ,useSelector } from "react-redux";

function SessionGoal({sessionGoal}) {
	const currentSession = useSelector((state) => state.user.liveSession);
	const [addGoal] = useMutation(ADD_GOAL);
	
	const [showPop, setShowPop] = useState(false);

  const addSessionGoal = async (data) => {
    let title = data.title
    let tokens = Number(data.tokens)
    if(title.length < 3) {
      return toast.error(`Goal title should be grater tha 3`, {
				position: "top-center",
				autoClose: 1000,
			});
    }
    if(!tokens) {
      return toast.error(`Tokens shoul dbe grater than 0`, {
				position: "top-center",
				autoClose: 1000,
			});
    }
    try {
      await addGoal({
        variables:{
          title:title,
          sessionId:Number(currentSession.id),
          tokenValue:tokens
        }  
      })
			sessionGoal.refetch()
			setShowPop(false)
    }catch(e) {
      alert(e)
    }
    console.log(tokens)
  }

	console.log(sessionGoal.data)
	return (
		<>
			{showPop && <Modal formData={addSessionGoal} closeModal={setShowPop} />}
			<span className="view-cam-controls__btn-wrapper">
				<button onClick={() => setShowPop(true)} className="btn btn-gold-outline-ds btn-inline-block btn-large view-cam-controls-btn view-cam-controls__private-btn" type="button">
					<span className="view-cam-controls-text">
						{sessionGoal?.data?.getSessionGoal ? 'Add New Goal' : "Add Goal"}
					</span>
					<span className="view-cam-controls__private-btn-price"></span>
				</button>
			</span>
		</>
	);
}

const Modal = ({formData,closeModal}) => {
  const [data,setData] = useState({
    title:"",
    tokens:0
  })
	return (
		<div style={{ zIndex: 9999999999 }} className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<form className="max-w-sm mx-auto">
								<div className="mb-5">
									<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Goal Title
									</label>
									<input value={formData.title} onChange={(e) => { setData({...data , title :e.target.value})}} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="goal title" />
								</div>
								<div className="mb-5">
									<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Goal Tokens
									</label>
									<input value={formData.tokens} onChange={(e) => { setData({...data , tokens :e.target.value})}} placeholder="goal token value" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
								</div>
								<button onClick={(e)=>{ e.preventDefault();  formData(data)}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Add Goal
								</button>
                <button onClick={() => closeModal(false)}  className=" ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
									Cancel
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SessionGoal;
