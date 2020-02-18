import React, { Fragment } from 'react'
import { Grid, Button, Typography } from "@material-ui/core"
import { withRouter } from "react-router-dom"

class PlayerPage extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (
			<Fragment>
				<Grid container
					direction="column"
					alignContent="center"
					alignItems="center"
					justify="center"
					style={{ width: '100%', height: '100vh' }}>

					<Grid item xs={2}>
						<Typography>Player</Typography>
					</Grid>
				</Grid>
			</Fragment>
		)
	}
}

export default withRouter(PlayerPage)