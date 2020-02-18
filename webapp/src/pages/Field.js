import React, { Fragment } from 'react'
import { Grid, Button, Typography } from "@material-ui/core"
import { withRouter } from "react-router-dom"
import { Marker, AFrameRenderer } from "react-web-ar"
import detalhesJogador from './neymar_card.png'
// import videoJogador from './neymar.mp4'
import videoJogador from './Neymar_video2.ogv'
import campoJogador from './campo.png'
import { render } from "react-dom"

class FieldPage extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (
			//
			<div>
				{/* <AFrameRenderer
					arToolKit={{ sourceType: "video", sourceUrl: "./neymar.mp4" }}
					inherent={true}
				>
					<Marker parameters={{ preset: "hiro" }}>
						<a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
							<a-animation
								attribute="rotation"
								to="360 0 0"
								dur="2000"
								easing="linear"
								repeat="indefinite"
							/>
						</a-box>
					</Marker>
				</AFrameRenderer> */}
				<AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
					<Marker parameters={{ preset: 'hiro' }}>

						<a-assets-item img id="detalhesJogador" src={detalhesJogador} />
						<a-assets-item video id="videoJogador" src={videoJogador} />
						<a-assets-item video id="campoJogador" src={campoJogador} />


						<a-entity
							id="journey-details"
							journey-details-listener
							cursor="fuse: true; fuseTimeout: 500"
							position="0.001 0 0"
							geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
							material="shader: flat; src: #detalhesJogador"
							visible="true">

							<a-animation attribute="position"
								dur="3000"
								begin="journeyDetailsAnimation"
								from="1 0.1 0"
								to="2 0.01 0" />

						</a-entity>

						<a-entity
							id="journey-details"
							journey-details-listener
							cursor="fuse: true; fuseTimeout: 500"
							position="-1 0 0"
							geometry="primitive: box;height: 0.1;  rotation: 90 0 0;"
							material="shader: flat; src: #videoJogador"
							visible="true">

							<a-animation attribute="position"
								dur="3000"
								begin="journeyDetailsAnimation"
								from="1 0.1 0"
								to="2 0.01 0" />

						</a-entity>

						<a-entity
							id="journey-details"
							journey-details-listener
							cursor="fuse: true; fuseTimeout: 500"
							position="1.5 0 0"
							geometry="primitive: box;height: 0.1;width:2;  rotation: 90 0 0;"
							material="shader: flat; src: #campoJogador"
							visible="true">

							<a-animation attribute="position"
								dur="3000"
								begin="journeyDetailsAnimation"
								from="1 0.1 0"
								to="2 0.01 0" />

						</a-entity>

					</Marker>
				</AFrameRenderer>
			</div>
		)
		// return (<div></div>)
	}
}


export default FieldPage

// render(<FieldPage />, document.getElementById("root"));
