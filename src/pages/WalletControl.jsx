import TopNavigation from '../components/TopNavigation'
import SideNavigation from '../components/SideNavigation'
import WalletControlCore from '../components/WalletControlCore'
import { Box, Container, Typography } from '@mui/material'

const WalletControl = () => {
	return (
		<>
			<TopNavigation />
			<SideNavigation />

			<Container fixed>
				<Typography variant="h3" sx={{ py: 5 }}>Wallet Control</Typography>
				<WalletControlCore />
			</Container>
		</>
	)
}

export default WalletControl