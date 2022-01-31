import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/common';

import UserMenu from './UserMenu';

import { Link } from 'react-router-dom';
import { 
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navigation = () => {
	const dispatch = useDispatch()

	return (
		<Box>
			<AppBar position="sticky">
				<Toolbar>
					<IconButton color="inherit" onClick={() => dispatch(toggleMenu())}>
						<MenuIcon size="large"
							edge="start"
							color="inherit"
							aria-label="Open Menu"
						/>
					</IconButton>

					<Link to="/" style={{ textDecoration: 'none' }}>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ color: 'white' }}
						>
							DRAG<strong>&</strong>TRACK
						</Typography>
					</Link>

					<Box sx={{ flexGrow: 1 }} />

					<UserMenu />
				</Toolbar>
			</AppBar>
		</Box>
	)
};

export default Navigation;
