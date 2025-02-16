import ModelCam from "src/components/ModelCam/Index";

function Proudcer2() {
	return (
		<div>
			<div id="body">
				{/* <div className="absolute" style={{zIndex:'99999999'}}>
          <Sidebar/>
          </div> */}
				<div className="main-layout sticky-header-desktop sticky-header-mobile sticky-viewcam-subheader-mobile viewcampage sh-initial">
					<div className="wrapper">
						{/* <Header/> */}
						<main id="app" className="main-layout-main main-layout-main-multiple-column main-layout-main-single-column">
							<div className="main-layout-main-right main-layout-main-right-single-column">
								<div className="main-layout-main-content">
									<div className="view-cam-page-wrapper">
										<div className="view-cam-page">
											<div className="view-cam-container">
												{/* <ModelHeader /> */}
												<div className="page">
													<ModelCam />
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
export default Proudcer2;
