import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/common';

import { Link } from 'react-router-dom';
import { 
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from '@mui/material';

/* Icons */
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Navigation = () => {
	const { isMenuOpen } = useSelector((state) => state.common)
	const dispatch = useDispatch()

	return (
		<Drawer
			variant="temporary"
			anchor="left"
			open={isMenuOpen}
			ModalProps={{ onBackdropClick: () => dispatch(toggleMenu()) }}
		>

			<Box sx={{
				display: 'flex',
				flexDirection: 'row-reverse',
				bgcolor: 'background.paper',
			}}>
				<IconButton onClick={() => dispatch(toggleMenu())} size="large">
					<ChevronLeftIcon />
				</IconButton>
			</Box>

			<Box sx={{ width: '100%', width: 300, bgcolor: 'background.paper' }}>
				<nav aria-label="main menu">
					<List subheader={
						<ListSubheader component="div" id="main-menu">
							Control Panel
						</ListSubheader>
					}>
						<ListItem disablePadding>
							<ListItemButton component={Link} to="/walletcontrol">
								<ListItemIcon>
									<AddCircleOutlineOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary="Wallet Control" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton component={Link} to="/overview">
								<ListItemIcon>
									<DashboardOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary="Overview" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton component={Link} to="/transactions">
								<ListItemIcon>
									<ReceiptOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary="Transactions" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton component={Link} to="/settings">
								<ListItemIcon>
									<SettingsOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary="Settings" />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>

				<Divider />

				<nav aria-label="secondary menu">
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText secondary="Privacy Policy" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText secondary="Terms of Use" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText secondary="About" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText secondary="Contact" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton component={Link} to="/test">
								<ListItemText secondary="Test" />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
			</Box>
		</Drawer>
	)
};

export default Navigation;
