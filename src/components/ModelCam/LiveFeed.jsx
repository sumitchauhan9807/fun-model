import { useEffect, useState } from "react";
import SessionGoal from 'src/components/ModelCam/components/SessionGoal'
import CamFunctions from 'src/components/ModelCam/components/CamFunctions'
function LiveFeed({ videoRef, isOnline, localStream }) {
	useEffect(() => {
		if (isOnline) {
			videoRef.current.srcObject = localStream;
			videoRef.current.play();
		}
	}, [isOnline]);

	return (
		<div className="ViewCamWrapper__videoLayout#EP video view-cam">
      <div className="view-cam-notifications view-cam-notifications-hls" />
			<div className="ViewCamWrapper__video#XY" style={{ minHeight: "400px" }}>
				<div className="ViewCamWrapper#TP ViewCamWrapper__blur#SX">
					<div className="ViewCamWrapper__stub#Vs">
						<div className="ViewCamWrapper__filter#du">
							<div className="ViewCamWrapper__bg#qk" />
							{/* {!playing && <img className="ViewCamWrapper__img#QA" src="https://www.shutterstock.com/image-photo/beautiful-female-fitness-model-studio-260nw-278349863.jpg" alt="June695_'s Live XXX Chat" />} */}
						</div>
					</div>
					<div className="broadcast-type-webrtc hover player player-type-hls player-wrapper view-cam-resizer-player">
						<div id="player-portals-container" />
						<div className="content">
							<div className="mse-player">
								<div className="video-element-wrapper">
									<video controls autoplay ref={videoRef} className="video-element" playsInline preload="metadata" disableremoteplayback src="blob:https://stripchat.global/6fbd3334-bc37-4e67-be8b-0b74bf54eefb" />
								</div>
							</div>

							<div className="player-controls-layers player-controls-user player__player-controls">
								<div className="player-controls-layers__layer player-controls-layers__layer--main-controls">
									<div className="player-controls-user__main player-controls-user__main--gradient">
										<div className="player-controls-user__main-top">
											<div className="player-controls-user__info-wrapper">
												<div className="player-controls-user__online-info">
													<div className="player-controls-user__live-badge player-live-badge">LIVE</div>
													<div className="player-viewers-count">
														<span className> 58 viewers</span>
													</div>
												</div>
											</div>
											<div className="player-controls-user__buttons">
												<div className="player-controls-user__left-buttons">
													<div className="player-controls-user__button player-volume player-volume--with-slider">
														<button className="btn ds-btn-inline-block overflow-visible player-top-button player-volume__control" type="button">
															<svg className="icon icon-volume-off player-top-button__icon">
																<use xlinkHref="#icons-volume-off" />
															</svg>
														</button>
														<div className="player-volume-slider">
															<div className="player-volume-slider__container">
																<div className="player-volume-slider__fill" style={{ height: "50%" }} />
																<div className="player-volume-slider__handle" style={{ bottom: "calc(50% - 12px)" }} />
															</div>
														</div>
													</div>
												</div>
												<div className="player-controls-user__right-buttons">
													<button className="btn ds-btn-inline-block overflow-visible player-controls-user__button player-low-latency-button player-top-button" type="button">
														<svg className="icon icon-badge-off player-top-button__badge-icon">
															<use xlinkHref="#icons-badge-off" />
														</svg>
														<svg className="icon icon-lightning-2 player-low-latency-button__icon player-top-button__icon">
															<use xlinkHref="#icons-lightning-2" />
														</svg>
													</button>
													<button title="Video Quality " className="btn ds-btn-inline-block overflow-visible player-controls-user__button player-resolution player-top-button" type="button">
														<svg className="icon icon-badge-hd-red player-top-button__badge-icon">
															<use xlinkHref="#icons-badge-hd-red" />
														</svg>
														<svg className="icon icon-settings player-top-button__icon">
															<use xlinkHref="#icons-settings" />
														</svg>
													</button>
													<button className="btn ds-btn-inline-block overflow-visible player-controls-user__button player-top-button" type="button">
														<svg className="icon icon-fullscreen-on player-top-button__icon">
															<use xlinkHref="#icons-fullscreen-on" />
														</svg>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="player-controls-layers__layer player-controls-layers__layer--alternate-controls player-controls-layers__layer--hidden">
									<div className="player-controls-user__overlay-top-btn" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        <CamFunctions/>
		</div>
	);
}

export default LiveFeed;
