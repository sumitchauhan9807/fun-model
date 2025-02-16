export const NewGoal = () => {
  return (
    <span data-message-id={1823473026299256} className="goal-message goal-new m-bg-goal m-line-goal message message-base">
      <div className="message-body">
        <div className="goal-block">
          <svg className="icon icon-goal">
            <use xlinkHref="#icons-goal" />
          </svg>
          <span className>New goal – <span className="goal-block-amount">555 tk</span></span>
        </div>
        <div className="goal-description">
          <div className="goal-description__message">Dildo fuck</div>
          <button className="btn btn-apply-ds btn-inline-block btn-small goal-message__complete-button" type="button">Complete Goal</button>
        </div>
      </div>
    </span>
  )
}

export const PubicMessage = ({username,message,color}) => {
  return (
    <div data-message-id={1823474276178616} className="message message-base regular-message regular-public-message">
      <div className="message-body">
        <div className="colored message-username username username-userlevels">
          <div className="username-level-wrapper">
            <div className="username-level">
              <div className={`color-league-${color} user-levels-username`}>
                <span className="user-levels-username-text user-name-card-wrapper-text" id="user-levels-name-93642097-1823474276178616">{username}</span>
                <div className="username-icons" />
              </div>
            </div>
          </div>
        </div>
        {message}
      </div>
    </div>
  )
}

export const PublicTip = ({username,tokens}) => {
  return (
    <div data-message-id={1823474386709694} className="m-bg-public-tip message message-base tip-message">
      <div className="message-body">
        <span className>
          <div className="colored message-username username username-userlevels">
            <div className="username-level-wrapper">
              <div className="username-level">
                <div className="color-league-gold user-levels-username">
                  <span className="user-levels-username-text user-name-card-wrapper-text" id="user-levels-name-138951703-1823474386709694">${username}</span>
                  <div className="username-icons" />
                </div>
              </div>
            </div>
          </div>
          tipped  <strong className="tip-amount-highlight">{tokens} tk</strong>
        </span>
        <div className="TipMessageControls#x5" />
      </div>
    </div>
  )
}

export const GoalStatus = ({tokens,goal}) =>  {
  return (
    <span data-message-id={3478001768446} className="goal-message goal-repeat m-bg-goal m-line-goal message message-base">
    <div className="message-body">
      <div className="goal-block">
        <svg className="icon icon-goal">
          <use xlinkHref="#icons-goal" />
        </svg>
        <span className="goal-block-amount">${tokens} tk</span> <span className>left to reach the goal</span>
      </div>
      <div className="goal-description">
        <div className="goal-description__message">${goal}</div>
        <button className="btn btn-apply-ds btn-inline-block btn-small goal-message__complete-button" type="button">Complete Goal</button>
      </div>
    </div>
  </span>
  )
}

export const ModelMessage = ({username,message}) => {
  return (
    <div data-message-id={10434005327824} className="m-bg-model message message-base regular-message regular-public-message welcome-bot-message">
      <div className="message-body">
        <span className="message-username user-levels-username-chat-owner">
          <svg className="icon icon-camera">
            <use xlinkHref="#icons-camera" />
          </svg>
          {username}
        </span>
        {message}
      </div>
    </div>
  )
}

export const CreateAccount = () =>{ 
  return (
    <div data-message-id={8695004434429} className="m-bg-system m-line-system-announce message message-base tokens-giveaway-message">
      <div className="message-body">
        <svg className="icon icon-playing-dices">
          <use xlinkHref="#icons-playing-dices" />
        </svg>
        <div><span className>Want <strong>50 tk FREE</strong>?</span><button className="btn btn-default btn-inline-block btn-signup tokens-giveaway-message__button" type="button">Create Free Account</button><span className="tokens-giveaway-message-help-text">and take part in our token giveaway!</span></div>
      </div>
    </div>
  )
}


export const TipMenu = () => {
  return (
    <div data-message-id={6956003543035} className="m-bg-system m-line-menu-announce message message-base public-menu-announcement-message system-text-message system-text-message-announce with-activity-list">
      <div className="message-body">
        <svg className="icon icon-chat-actions system-text-message__icon">
          <use xlinkHref="#icons-chat-actions" />
        </svg>
        <span className="system-text-message__body">
          <div>
            <span className><a>Tip Menu</a> is available</span>
            <div className="public-menu-announcement-message__teasing">
              <div className="public-menu-announcement-message__rows">
                <button className="a11y-button public-menu-announcement-message__row" type="button">
                  <div className="public-menu-announcement-message__row-content"><span>Countdown</span><span className="public-menu-announcement-message__tokens">15 tokens</span></div>
                </button>
                <button className="a11y-button public-menu-announcement-message__row" type="button">
                  <div className="public-menu-announcement-message__row-content"><span>Do it harder</span><span className="public-menu-announcement-message__tokens">33 tokens</span></div>
                </button>
                <button className="a11y-button public-menu-announcement-message__row" type="button">
                  <div className="public-menu-announcement-message__row-content"><span>Wichssteuer</span><span className="public-menu-announcement-message__tokens">10 tokens</span></div>
                </button>
                <div className="public-menu-announcement-message__divider" />
              </div>
              <button className="a11y-button public-menu-announcement-message__full-menu-link" type="button">
                FULL TIP MENU 
                <svg className="icon icon-chevron-right public-menu-announcement-message__full-menu-icon">
                  <use xlinkHref="#icons-chevron-right" />
                </svg>
              </button>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export const SexToy = () => {
  return (
    <div data-message-id={1739000883347} className="lovense-toy-message lovense-toy-message-with-highlight m-bg-system m-line-lovense message message-base toy-message toy-message-toy">
      <div className="message-body">
        <div className="icon-wrapper">
          <svg className="icon icon-lovense">
            <use xlinkHref="#icons-lovense" />
          </svg>
        </div>
        <div className="lovense-toy-message-text">
          <span className>
            Play with interactive 
            <button className="btn ds-btn-default ds-btn-inline-block highlight-button" type="button">
              <span className="highlight-button__content">
                Sex Toy
                <svg className="highlight-button__icon icon icon-chevron-right" style={{height: '12px', width: '12px'}}>
                  <use xlinkHref="#icons-chevron-right" />
                </svg>
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}