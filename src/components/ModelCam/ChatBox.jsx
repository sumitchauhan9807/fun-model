import { useEffect, useState } from "react";
import {useSubscribe , usePubish} from 'src/Hooks/PubNub'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import {NewGoal,PubicMessage,PublicTip ,GoalStatus ,CreateAccount ,ModelMessage} from 'src/components/ModelCam/components/MessageItems'

function ChatBox({username,playing}) {
  const userData = useSelector((state) => state.user);
  let publicId = 12;
  const [ subscription ,unSubscribe ] = useSubscribe(username)
  const [ publish ] = usePubish(username)
  const [message,setMessage] = useState("")
  const [chatMessages,setChatMessages] = useState([])
	useEffect(()=>{
		subscription.onMessage = (messageEvent) => {
			console.log("Message event: ", messageEvent);
      setChatMessages((prev)=>{
        return [...prev,messageEvent.message]
      })
      setMessage("")
      return () => {
        alert("unsubb")
        unSubscribe()
      }
		};
  },[])

  const location = useLocation();

  useEffect(() => {
    // alert("locc")
  }, [location]);

  const sendMessage = () => {
    // if(!playing) return alert('model must come online')
    if(message.length < 2) return alert("message length should be grater tahn 2")
    publish({
      publicId:publicId,
      message:message,
      userType:'model',
      type:"MESSAGE",
    })
    console.log(chatMessages)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }
  return (
    <div className="ViewCamWrapper__chatLayout#HW chat">
    {/*$*/}
    <div className="ViewCamWrapper__chat#Fq model-chat model-chat-normal model-chat-size-medium">
      <div />
      <div className="model-chat-wrapper model-chat-wrapper-mobile">
        {/* <div className="model-chat-nav">
          <div className="model-chat-nav-item selected">
            <svg className="icon icon-stripchat-logo">
              <use xlinkHref="#icons-stripchat-logo" />
            </svg>
            <span className="model-chat-nav-item-label">Public</span>
          </div>
          <div className="model-chat-nav-item">
            <div id="private-tab-tooltip" className="model-chat-nav-item-wrapper">
              <svg className="icon icon-locked">
                <use xlinkHref="#icons-locked" />
              </svg>
              <span className="model-chat-nav-item-label">Private</span>
            </div>
          </div>
          <div className="users-tab-wrapper">
            <div className="model-chat-nav-item">
              <svg className="icon icon-user-tab">
                <use xlinkHref="#icons-user-tab" />
              </svg>
              <span className="model-chat-nav-item-count">58</span>
            </div>
          </div>
          <div className="model-chat-nav-item model-chat-nav-item-fanclub">
            <div className="compact user-fan-club-status-btn">
              <svg style={{height: '18px', width: '18px'}} className="icon icon-diamond">
                <use xlinkHref="#icons-diamond" />
              </svg>
            </div>
          </div>
          <div className="chat-settings model-chat-nav-item">
            <div className="model-chat-nav-item-wrapper">
              <svg className="icon icon-menu-mobile">
                <use xlinkHref="#icons-menu-mobile" />
              </svg>
            </div>
          </div>
        </div> */}
        <div className="model-chat-container public">
          <div className="model-chat-public">
            <div className="model-chat-controls model-chat-controls--new">
              <div className="ChatInput__page-chat#kj ChatInput__wrapper#k3 model-chat-input">
                <div className="ChatInput__inputBlock#WF">
                  <input onKeyDown={handleKeyDown} value={message} onChange={(e) =>{ setMessage(e.target.value)}} className="ChatInput__input#pY" maxLength={300} type="text" placeholder="Public message..." enterkeyhint="send" defaultValue />
                  <div className="ChatInput__smiles#Ao smiles-dropdown">
                    <button className="trigger trigger-fresh" type="button" id="smiles_dropdown" aria-label="Show smiles">
                      <svg style={{height: '24px', width: '24px'}} className="icon icon-emoji-ds">
                        <use xlinkHref="#icons-emoji-ds" />
                      </svg>
                    </button>
                  </div>
                </div>
                <button  onClick={(e) => { e.preventDefault(); sendMessage() }} className="a11y-button ChatInput__emptyInput#r7 ChatInput__sendBtn#Cq" aria-label="Send" type="button">
                  <svg style={{height: '24px', width: '24px'}} className="ChatInput__sendBtnIcon#KB icon icon-send-ds">
                    <use xlinkHref="#icons-send-ds" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="model-chat-content">
              <div className="scroll-bar-container scroll-bar-container--overscroll-behavior-none ps ps--active-y">
                <div className="model-chat-messages-wrapper">
                  <div className="messages">
                    {/* message start  */}
                    {chatMessages.map((message)=>{
                      return (
                        <GetMessageItem username={userData.user.username}  message={message} />
                      )
                    })}
                    {/* <NewGoal/>
                    <PubicMessage username="Gkjkjjuiio" message="Guten Morgen" color="diamond"/>
                    <PubicMessage username="tim126373" message="Guten Morgen" color="gold"/>
                    <PublicTip username="oppa87" tokens="12"/>
                    <GoalStatus tokens={445} goal="Dildo fuck"/>
                   
                    
                    <div data-message-id={5217002653559} className="login-required-message m-bg-system message message-base system-text-message system-text-message-system">
                      <div className="message-body"><span className="system-text-message__body"><span className>To chat, <a href="/login">log in</a> or <a href="/signup/user">create a free account</a>.</span></span></div>
                    </div>
                    <PubicMessage username="tim126373" message="Guten Morgen" color="gold"/>
                    <PubicMessage username="tim126373" message="Guten Morgen" color="gold"/>
                    <PubicMessage username="tim126373" message="Guten Morgen" color="gold"/>
                    <CreateAccount/>
                    <ModelMessage username="Jules" message="Hey guys keep tipping me .. "/> */}
                    
                    

                    {/* message end */}
                  </div>
                </div>
                <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
                  <div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
                </div>
                <div className="ps__rail-y" style={{top: '0px', right: '0px', height: '395px'}}>
                  <div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '157px'}} />
                </div>
              </div>
              <button className="btn btn-default btn-inline-block model-chat-new-messages-btn" type="button">
                <div className="model-chat-new-messages-btn-content">
                  <span className>New Messages</span>
                  <svg className="model-chat-new-messages-btn-icon" width="18px" height="18px" viewBox="0 0 18 18">
                    <g stroke="none" strokeWidth={1}>
                      <g transform="translate(-113.000000, -6.000000)">
                        <g>
                          <path d="M121.90625,6 C126.81875,6 130.8125,9.99375 130.8125,14.90625 C130.8125,19.81875 126.81875,23.8125 121.90625,23.8125 C116.99375,23.8125 113,19.81875 113,14.90625 C113,9.99375 116.99375,6 121.90625,6 Z M121.90625,7.40625 C117.78125,7.40625 114.40625,10.78125 114.40625,14.90625 C114.40625,19.03125 117.78125,22.40625 121.90625,22.40625 C126.03125,22.40625 129.40625,19.03125 129.40625,14.90625 C129.40625,10.78125 126.03125,7.40625 121.90625,7.40625 Z M121.90625,9.7125 C122.3,9.7125 122.61875,10.03125 122.61875,10.425 L122.61875,10.425 L122.61875,17.68125 L124.6625,15.65625 C124.925,15.375 125.375,15.375 125.65625,15.65625 C125.9375,15.91875 125.9375,16.36875 125.65625,16.65 L125.65625,16.65 L122.43125,19.89375 C122.3,20.025 122.1125,20.1 121.925,20.1 C121.7375,20.1 121.55,20.025 121.41875,19.89375 L121.41875,19.89375 L118.175,16.65 C118.04375,16.5 117.96875,16.33125 117.96875,16.14375 C117.96875,15.95625 118.04375,15.76875 118.175,15.6375 C118.4375,15.35625 118.8875,15.35625 119.16875,15.6375 L119.16875,15.6375 L121.19375,17.68125 L121.19375,10.425 C121.19375,10.03125 121.5125,9.7125 121.90625,9.7125 Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const GetMessageItem = ({username,message}) =>{ 
  if(message?.userType == 'model'){ 
    return <ModelMessage username={username} message={message.message}/>
  }
  return <PubicMessage username="Gkjkjjuiio" message={message.message} color="diamond"/>
}

export default ChatBox