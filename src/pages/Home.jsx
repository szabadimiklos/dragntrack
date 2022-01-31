import { useState } from "react"

import { 
	AppBar,
	Box,
	Button,
	Container,
	Divider,
	Fade,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Paper,
	Toolbar,
	Typography,
	Zoom,
} from "@mui/material"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom"
import UserMenu from "../components/UserMenu"

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
										{mainMenuList.map((item,index) => (
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
									{mainMenuList.map((item,index) => (
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
				<Container fixed>
					<Paper elevation={3} sx={{ my: { xs: 4, lg: 8}, p: { xs: 4, lg: 8} }}>
						<Typography variant="body1" gutterBottom paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi libero nam? Molestiae, laborum quibusdam ratione cupiditate esse natus est assumenda voluptates? Ducimus nesciunt dolorem, possimus nam excepturi eaque quasi.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae, quaerat repudiandae dolorem quos, ratione est qui iste inventore esse, et asperiores veritatis reprehenderit minus molestias corporis totam. Asperiores, porro!
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed quod debitis impedit ipsum corrupti eligendi, ex blanditiis repellat modi beatae aspernatur sunt, culpa pariatur laudantium est earum? Iusto, modi.
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat delectus itaque, animi quo corrupti nostrum eligendi exercitationem distinctio ipsa numquam odit fugiat porro eum voluptatum quos qui nam deserunt.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi libero nam? Molestiae, laborum quibusdam ratione cupiditate esse natus est assumenda voluptates? Ducimus nesciunt dolorem, possimus nam excepturi eaque quasi.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae, quaerat repudiandae dolorem quos, ratione est qui iste inventore esse, et asperiores veritatis reprehenderit minus molestias corporis totam. Asperiores, porro!
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed quod debitis impedit ipsum corrupti eligendi, ex blanditiis repellat modi beatae aspernatur sunt, culpa pariatur laudantium est earum? Iusto, modi.
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat delectus itaque, animi quo corrupti nostrum eligendi exercitationem distinctio ipsa numquam odit fugiat porro eum voluptatum quos qui nam deserunt.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi libero nam? Molestiae, laborum quibusdam ratione cupiditate esse natus est assumenda voluptates? Ducimus nesciunt dolorem, possimus nam excepturi eaque quasi.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae, quaerat repudiandae dolorem quos, ratione est qui iste inventore esse, et asperiores veritatis reprehenderit minus molestias corporis totam. Asperiores, porro!
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed quod debitis impedit ipsum corrupti eligendi, ex blanditiis repellat modi beatae aspernatur sunt, culpa pariatur laudantium est earum? Iusto, modi.
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat delectus itaque, animi quo corrupti nostrum eligendi exercitationem distinctio ipsa numquam odit fugiat porro eum voluptatum quos qui nam deserunt.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi libero nam? Molestiae, laborum quibusdam ratione cupiditate esse natus est assumenda voluptates? Ducimus nesciunt dolorem, possimus nam excepturi eaque quasi.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae, quaerat repudiandae dolorem quos, ratione est qui iste inventore esse, et asperiores veritatis reprehenderit minus molestias corporis totam. Asperiores, porro!
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed quod debitis impedit ipsum corrupti eligendi, ex blanditiis repellat modi beatae aspernatur sunt, culpa pariatur laudantium est earum? Iusto, modi.
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat delectus itaque, animi quo corrupti nostrum eligendi exercitationem distinctio ipsa numquam odit fugiat porro eum voluptatum quos qui nam deserunt.
						</Typography>
					</Paper>
				</Container>
			</Box>
		</>
	)
}

export default Home