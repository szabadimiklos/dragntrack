import { useState } from "react"
import { Link } from "react-router-dom"
import Chart from 'react-apexcharts'
import UserMenu from "../components/UserMenu"

import {
	AppBar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Fade,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	Zoom,
} from "@mui/material"

import { grey } from '@mui/material/colors'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';


import goalimage from '../assets/images/tesla.jpg'


const mainMenuList = [
	{
		title: 'About Drag&Track',
		icon: <HomeOutlinedIcon />,
		to: '/'
	},
	{
		title: 'Contact',
		icon: <ContactlessOutlinedIcon />,
		to: '/'
	},
]

const demochart = {
	series: [{
		name: 'Incomes',
		data: [3100, 4000, 3300, 5100, 4200, 4500, 5000, 4650, 5100, 5500, 4850, 6100]
	}, {
		name: 'Expenses',
		data: [1100, 3200, 4500, 3200, 3400, 3150, 2100, 2500, 3050, 1920, 2750, 4000]
	}],
	options: {
		chart: {
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		colors: [
			'#00d123',
			'#ff9900'
		],
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		legend: {
			show: false
		},
		xaxis: {
			type: 'datetime',
			categories: [
				"2021-01-01",
				"2021-02-01",
				"2021-03-01",
				"2021-04-01",
				"2021-05-01",
				"2021-06-01",
				"2021-07-01",
				"2021-08-01",
				"2021-09-01",
				"2021-10-01",
				"2021-11-01",
				"2021-12-01",
			]
		},
		yaxis: {
			show: false,
			labels: {
				formatter: function (value) {
					return `$${value}`;
				}
			},
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		},
	},
}
const demochart2 = {
	series: [
		{
			name: 'Savings',
			data: [
				{
					x: 'Jan',
					y: 1292,
					goals: [
						{
							name: 'Expected',
							value: 1300,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Feb',
					y: 2350,
					goals: [
						{
							name: 'Expected',
							value: 2500,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Mar',
					y: 3423,
					goals: [
						{
							name: 'Expected',
							value: 3600,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Apr',
					y: 3653,
					goals: [
						{
							name: 'Expected',
							value: 3420,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'May',
					y: 2133,
					goals: [
						{
							name: 'Expected',
							value: 2150,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Jun',
					y: 3173,
					goals: [
						{
							name: 'Expected',
							value: 2000,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Jul',
					y: 2530,
					goals: [
						{
							name: 'Expected',
							value: 2115,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Aug',
					y: 1790,
					goals: [
						{
							name: 'Expected',
							value: 1800,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Sep',
					y: 2180,
					goals: [
						{
							name: 'Expected',
							value: 2000,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Oct',
					y: 3540,
					goals: [
						{
							name: 'Expected',
							value: 3650,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Nov',
					y: 3850,
					goals: [
						{
							name: 'Expected',
							value: 3600,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
				{
					x: 'Dec',
					y: 3300,
					goals: [
						{
							name: 'Expected',
							value: 3125,
							strokeHeight: 5,
							strokeColor: '#ff9900'
						}
					]
				},
			]
		}
	],
	options: {
		chart: {
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '60%'
			}
		},
		colors: ['#00d123'],
		dataLabels: {
			enabled: false
		},
		legend: {
			show: true,
			showForSingleSeries: true,
			customLegendItems: ['Savings', 'Expected'],
			markers: {
				fillColors: ['#00d123', '#ff9900']
			}
		},
		yaxis: {
			show: false,
			labels: {
				formatter: function (value) {
					return `$${value}`;
				}
			},
		},
	},
}

const Home = () => {
	const [anchorElNav, setAnchorElNav] = useState(null)
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<>
			<Box sx={{
				background: 'rgb(0,174,26)',
				background: 'linear-gradient(60deg, rgba(0,174,26,1) 0%, rgba(253,187,45,1) 100%)',
			}}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(5px)' }}>
						<Container maxWidth="xl">
							<Toolbar disableGutters>
								<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleOpenNavMenu}
										sx={{ color: 'white' }}
									>
										<MenuIcon />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorElNav}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
										open={Boolean(anchorElNav)}
										onClose={handleCloseNavMenu}
										sx={{
											display: { xs: 'block', md: 'none' },
										}}
									>
										{mainMenuList.map((item, index) => (
											<MenuItem key={index} component={Link} to={item.to} >
												<ListItemIcon>
													{item.icon}
												</ListItemIcon>
												<ListItemText>{item.title}</ListItemText>
											</MenuItem>
										))}
									</Menu>
								</Box>

								<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
									{mainMenuList.map((item, index) => (
										<Button
											key={index}
											component={Link}
											to={item.to}
											sx={{ mx: 3, color: 'white', display: 'flex' }}
											startIcon={item.icon}
											size='large'
										>
											{item.title}
										</Button>
									))}
								</Box>

								<UserMenu />
							</Toolbar>
						</Container>
					</AppBar>
				</Box>

				<Container fixed>
					<Box sx={{
						display: 'flex',
						alignItems: 'center',
						minHeight: '100vh',
					}}>
						<div>
							<Typography variant="h1" sx={{ py: 2, color: '#fff' }}>
								<Zoom in appear timeout={{ enter: 500, exit: 500, }}>
									<Box sx={{ display: 'inline-block' }}>Drag</Box>
								</Zoom>
								<Zoom in appear timeout={{ enter: 500, exit: 500, }} style={{ transitionDelay: 500 }}>
									<Box sx={{ display: 'inline-block', color: 'secondary.main' }}>&</Box>
								</Zoom>
								<Zoom in appear timeout={{ enter: 500, exit: 500, }} style={{ transitionDelay: 1000 }}>
									<Box sx={{ display: 'inline-block' }}>Track</Box>
								</Zoom>
							</Typography>
							<Divider />
							<Fade in appear timeout={{ enter: 1000, exit: 500, }} style={{ transitionDelay: 1750 }}>
								<Typography variant="h4" sx={{ py: 2, display: 'inline-block', color: '#fff' }}>
									An easy solution to keep track of your money
								</Typography>
							</Fade>
						</div>
					</Box>
				</Container>
			</Box>

			<Box>
				<Box py={10}>
					<Container fixed>
						<Grid container spacing={4} alignItems="center">
							<Grid item md={5}>
								<Typography variant="h3" gutterBottom>
									Track with ease
								</Typography>
								<Typography variant="h5">
									<strong>Drag&Track</strong> makes it easy to keep track of your incomes and expenses on a daily basis
								</Typography>
							</Grid>
							<Grid item md={7}>
								<Chart type="area" width={'100%'} height={'100%'} style={{ minHeight: '350px' }} options={demochart.options} series={demochart.series} />
							</Grid>
						</Grid>
					</Container>
				</Box>

				<Box py={10} sx={{ bgcolor: grey[50] }}>
					<Container fixed>
						<Grid container spacing={4} alignItems="center">
							<Grid item md={7}>
								<Chart type="bar" width={'100%'} height={'100%'} style={{ minHeight: '350px' }} options={demochart2.options} series={demochart2.series} />
							</Grid>
							<Grid item md={5}>
								<Typography variant="h3" gutterBottom>
									Predictions On The Fly
								</Typography>
								<Typography variant="h5">
									With <strong>Drag&Track</strong> it's easier to plan your future savings and next purchases
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</Box>

				<Box py={10}>
					<Container fixed>
						<Grid container spacing={4} alignItems="center">
							<Grid item md={7}>
								<Typography variant="h3" gutterBottom>
									Set & Achieve Goals
								</Typography>
								<Typography variant="h5">
									Are you a man of achievements? With <strong>Drag&Track</strong> it takes just a few seconds to set short or long term goals to keep you motivated
								</Typography>
							</Grid>
							<Grid item md={5}>
								<Card>
									<CardMedia
										component="img"
										height="140"
										image={goalimage}
										alt="green iguana"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Tesla Model S
										</Typography>
										<Typography variant="body2" color="text.secondary">
											You are just <strong>$5750</strong> away from your next car!
											<br />
											Based on the last 6 months, you'll complete this Goal in 65 days.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">Goal Overview</Button>
										<Button size="small">Manage</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</Box>

				<Box py={10} sx={{ bgcolor: grey[50] }}>
					<Container fixed>
						<Grid container spacing={4} alignItems="center">
							<Grid item md={12}>
								<Typography variant="h3" gutterBottom>
									About Us
								</Typography>
								<Typography variant="h5">
									We are a group of determined developers who aim to deliver high quality, useful, interactive and easy-to-use applications, and constantly expanding our knowledge in the process
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>

			<Divider/>

			<Box py={10} sx={{ bgcolor: grey[100] }}>
				<Container fixed>
					<Grid container spacing={4} alignItems="center">
						<Grid item md={5}>
							<Typography variant="h3">
								Drag&Track
							</Typography>
							<Typography variant="body2">
								V0.1 beta
							</Typography>
						</Grid>
						<Grid item md={4}>
							<Typography variant="h5" gutterBottom>Contact Us</Typography>

							<Button variant="outlined" fullWidth startIcon={<AlternateEmailOutlinedIcon />} sx={{ mb: 1}}>
								info@dragntrack.com
							</Button>

							<Button variant="outlined" fullWidth startIcon={<CallOutlinedIcon />}>
								+36 1 456 7890
							</Button>
						</Grid>
						<Grid item md={3}>
							<List>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemText primary="About"/>
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemText primary="Terms of Use"/>
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemText primary="Privacy Policy"/>
									</ListItemButton>
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	)
}

export default Home