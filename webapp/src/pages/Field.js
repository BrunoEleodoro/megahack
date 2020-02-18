import React, { Fragment } from 'react'
import { Grid, Button, Typography } from "@material-ui/core"
import { withRouter } from "react-router-dom"
import { AFrameRenderer, Marker } from "react-web-ar"
import { render } from "react-dom"

class FieldPage extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<AFrameRenderer inherent={true}>
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
				</AFrameRenderer>
			</div>
		)
		// return (<div></div>)
	}
}


export default withRouter(FieldPage)

render(<FieldPage />, document.getElementById("root"));
