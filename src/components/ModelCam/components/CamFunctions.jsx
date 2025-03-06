import { useQuery } from '@apollo/client'
import { useSelector } from 'react-redux';
import SessionGoal from 'src/components/ModelCam/components/SessionGoal'
import { ADD_GOAL ,GET_SESSION_GOAL } from "src/queries";

function CamFunctions() {
	const currentSession = useSelector((state) => state.user.liveSession);
  
  const sessionGoal = useQuery(GET_SESSION_GOAL,{
		variables:{
			sessionId:Number(currentSession.id)
		}
	})
  return (
    <>
    <div>
				<div className="view-cam-controls with-new-send-tip">
					<div className="view-cam-controls-wrapper">
						<div className="favorite-control">
							
							<div className="add-to-favorite-control">
								<button aria-label="Add Favorite" className="a11y-button add-to-favorite-control__toggle add-to-favorite-control__toggle-new" type="button">
									<svg className="add-to-favorite-control__favorite-icon add-to-favorite-control__favorite-icon--desktop add-to-favorite-control__favorite-icon-new icon icon-heart-2">
										<use xlinkHref="#icons-heart-2" />
									</svg>
								</button>
								<div className="add-to-favorite-control__favorited-count favorited-count">81.7k</div>
							</div>
							<div className="broken-heart-icons-preloader" />
						</div>
						<div className="view-cam-controls-wrapper__left" />
						<div className="view-cam-controls-wrapper__center" />
						<div className="view-cam-controls-wrapper__right">
							<div className="view-cam-buttons-wrapper">
								<SessionGoal sessionGoal={sessionGoal}/>
								<span className="view-cam-controls__btn-wrapper">
									<button className="btn ds-btn-apply-2-ds ds-btn-inline-block send-tip-btn send-tip-button send-tip-button--with-icon" type="button">
										<span className="view-cam-controls-text--short">Tip</span>
										<span className="view-cam-controls-text">Send Tip</span>
										<span className="send-tip-button__icon-container">
											<svg className="IconV2__icon#YR send-tip-button__icon">
												<use xlinkHref="#icons-chat-actions" />
											</svg>
										</span>
									</button>
								</span>
							</div>
              
						</div>
					</div>
				</div>
				<div className="closed subscriptions-control-panel" />
			</div>
      <GoalBar sessionGoal={sessionGoal}/>
    </>
  )
}

const GoalBar = ({sessionGoal}) => {
  if(!sessionGoal?.data?.getSessionGoal.title) return 
  let goal = sessionGoal.data.getSessionGoal
  console.log(goal,"goalgoal")
  let percentGoalComplete = (goal.tokensAchived / goal.tokenValue) * 100
  console.log(percentGoalComplete)
  return (
    <div className="view-cam-info view-cam-info--visible view-cam-info--with-new-goal">
        <div className="view-cam-info-goal">
          <div className="epic-goal-progress__wrap epic-goal-progress__wrap--view-cam">
            <span className="epic-goal-progress__icon-wrap">
              <svg className="epic-goal-progress__icon icon icon-goal" style={{height: '18px', width: '18px'}}>
                <use xlinkHref="#icons-goal" />
              </svg>
            </span>
            <div className="epic-goal-progress__animation-container" />
            <div className="epic-goal-progress__progress-filler epic-goal-progress__progress-filler--active" />
            <div className="epic-goal-progress__content">
              <div className="epic-goal-progress__inner epic-goal-progress__inner--view-cam" style={{width: `${percentGoalComplete}%`}} />
              <div className="epic-goal-progress epic-goal-progress--view-cam">
                <div className="epic-goal-progress__information epic-goal-progress__information--view-cam"><span>Goal: </span><span className="epic-goal-progress__tokens">${goal.tokenValue} tk</span><span> {sessionGoal?.data?.getSessionGoal.title}</span></div>
                <div className="epic-goal-progress__status epic-goal-progress__status--view-cam">${percentGoalComplete}%</div>
              </div>
            </div>
          </div>
          <h2 className="media-up-to-xs-hidden view-cam-info-goal__title view-cam-info-topic"><span>Hello </span><span>​</span><span>my </span><span>​</span><span>name </span><span>​</span><span>is </span><span>​</span><span>Moon:) </span><span>​</span><span>dont </span><span>​</span><span>forget </span><span>​</span><span>follow </span><span>​</span><span>me </span><span>​</span><span>pls&lt;</span><span>​</span><span>3My </span><span>​</span><span>vibess: </span><span>​</span><span>33, </span><span>​</span><span>50, </span><span>​</span><span>100, </span><span>​</span><span>150 </span><span>​</span><span>and </span><span>​</span><span>333</span><span>​</span></h2>
        </div>
        {/* <div className="view-cam-info-king">
          <div className="view-cam-info-king-content" id="view_cam_info_king">King of the room:<span className="become-king-info">Tip <span className="king-threshold">500 tk</span> in total!</span></div>
        </div> */}
      </div>
  )
}

export default CamFunctions