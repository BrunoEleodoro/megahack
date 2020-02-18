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

	componentDidMount() {
		document.querySelector('body').style.backgroundColor = "#333"
	}

	render() {
		return (
			<Fragment>
				<div style={{ width: '100%', height: '100vh' }}>
					<Grid container
						direction="column"
						alignContent="center"
						alignItems="center"
						justify="center"
					>

						<Typography variant="h1" style={{ color: 'white' }}>AR Play</Typography>


						<img src={icon} width="250"></img>

						<Button style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} variant="contained" >
							<Link to="/field">COMEÇAR EXPÊRIENCIA</Link>
						</Button>

						{/* <Grid item xs={2}>
						<Link to="/player">
							<Button variant="contained" color="primary">
								Detalhes Jogador
						</Button>
						</Link>
					</Grid> */}
					</Grid>
				</div>
			</Fragment >
		)
	}
}

export default withRouter(HomePage)