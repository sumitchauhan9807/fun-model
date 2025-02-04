import sneaky_text from 'src/assets/Images/SNEAKY_text.png';
import { HiOutlineCamera } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

export default function Chats() {
    return (
        <div className='flex flex-col justify-center items-center p-8 bg-black w-full'>
            <img src={sneaky_text}
                className='flex w-72'
                alt="" />
            <div className='grid grid-cols-chat-grid mt-16 w-full'>
                <div className='flex flex-col text-white mt-8'>
                    <span className='text-2xl bg-main-pink rounded-full p-4'>Create a new Chat</span>
                    <span className='text-2xl p-4'>Recent chat</span>
                    <span className='text-2xl p-4'>Chat Request</span>
                    <span className='text-2xl p-4'>Unread Messages</span>
                </div>
                <div className='flex flex-col ml-24 '>
                    <div className='flex items-center border-b-2 py-2 w-full'>
                        <img className='w-32 h-32 border-2 border-main-pink rounded-full'
                            src="https://images.unsplash.com/photo-1630568119734-1f6df1cd1669?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='flex flex-col mx-4'>
                            <span className='text-main-pink text-4xl'>Nikita</span>
                            <span className='text-gray-400 text-xl'>german</span>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className='flex p-4  w-full'>
                            <span className='text-center text-xl p-2 px-4 bg-pink-100 text-main-pink rounded-full min-w-48' >
                                Hey dearrr..
                            </span>
                        </div>
                        <div className='flex p-4  w-full justify-end'>
                            <span className='text-center text-xl p-2 px-4 bg-pink-100 text-main-pink rounded-full min-w-48' >Yes babe..</span>
                        </div>
                        <div className='flex p-4  w-full'>
                            <span className='text-center text-xl p-2 px-4 bg-pink-100 text-main-pink rounded-full min-w-48' >
                                Do you go out Tommarow ?
                            </span>
                        </div>
                        <div className='flex p-4  w-full justify-end'>
                            <span className='flex justify-center text-xl p-2 px-8 bg-pink-100 text-main-pink rounded-full min-w-48 max-w-96' >
                                Yes Sure!, My wife will be going friends home with kids
                            </span>
                        </div>
                        <div className='flex p-4  w-full'>
                            <span className='flex justify-center text-xl p-2 px-8 bg-pink-100 text-main-pink rounded-full min-w-48 max-w-96' >
                                Yaaay! Great Lets meet
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center bg-white p-4 mt-24 mb-2'>
                        <FaRegHeart color='#C73168' size={32} />&nbsp;&nbsp;&nbsp;
                        <HiOutlineCamera color='#C73168' size={36} />
                        <input type="text" placeholder='Your message here'
                            className='mx-4 border border-slate-500 text-base p-4 rounded w-[-webkit-fill-available] outline-main-pink' />
                        <span className='bg-slate-200 rounded p-4'>
                            <GrSend color='#C73168' size={28} />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}