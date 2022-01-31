import { useState } from 'react'
import { Link } from 'react-router-dom';

import {
	Avatar,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Tooltip,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

const userMenuList = [
	{
		title: 'Overview',
		icon: <HomeOutlinedIcon />,
		to: '/overview'
	},
	{
		title: 'Settings',
		icon: <HomeOutlinedIcon />,
		to: '/settings'
	},
	{
		title: 'Logout',
		icon: <HomeOutlinedIcon />,
		to: '/'
	},
]

const UserMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState(null)
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<>
			<Tooltip title="Open userMenuList">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="Mike Freeman" src="/static/images/avatar/2.jpg" />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{userMenuList.map((item, index) => (
					<MenuItem key={index} component={Link} to={item.to}>
						<ListItemIcon>
							{item.icon}
						</ListItemIcon>
						<ListItemText>{item.title}</ListItemText>
					</MenuItem>
				))}
			</Menu>
		</>
	)
};

export default UserMenu;
