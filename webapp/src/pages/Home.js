import React, { Fragment } from 'react'
import { Grid, Button, Typography } from "@material-ui/core"
import { withRouter, Link } from "react-router-dom"
import icon from "./006.png"

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
					style={{ width: '100%', height: '100vh', backgroundColor: '#333' }}>

					<Typography variant="h1" style={{ color: 'white' }}>AR Play</Typography>

					<Grid item xs={2}>
						<img src={icon} width="250"></img>
					</Grid>
					<Grid item xs={2}>
						<Link to="/field">
							<Button style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} variant="contained" >
								COMEÇAR EXPÊRIENCIA
						</Button>
						</Link>
					</Grid>
					{/* <Grid item xs={2}>
						<Link to="/player">
							<Button variant="contained" color="primary">
								Detalhes Jogador
						</Button>
						</Link>
					</Grid> */}
				</Grid>
			</Fragment >
		)
	}
}

export default withRouter(HomePage)