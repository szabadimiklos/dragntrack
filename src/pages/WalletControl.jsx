import TopNavigation from '../components/TopNavigation'
import SideNavigation from '../components/SideNavigation'
import WalletControlCore from '../components/WalletControlCore'
import { Box, Container } from '@mui/material'

const WalletControl = () => {
	return (
		<>
			<TopNavigation />
			<SideNavigation />
			<div>WalletControl page</div>


			<Container fixed>
				<WalletControlCore />
			</Container>
		</>
	)
}

export default WalletControl