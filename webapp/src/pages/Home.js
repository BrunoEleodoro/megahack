import React, { Fragment } from 'react'
import { Grid, Button } from "@material-ui/core"
import { withRouter, Link } from "react-router-dom"

class HomePage extends React.Component {
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
						<Link to="/field">
							<Button variant="contained" color="primary">
								Campo VR
						</Button>
						</Link>
					</Grid>
					<Grid item xs={2}>
						<Link to="/player">
							<Button variant="contained" color="primary">
								Detalhes Jogador
						</Button>
						</Link>
					</Grid>
				</Grid>
			</Fragment>
		)
	}
}

export default withRouter(HomePage)