import { Box } from "@mui/material"
import WalletControlCircle from "./WalletControlCircle";

const WalletControlCore = () => {
	return (
		<>
			<Box sx={{ border: '1px solid grey' }}>
				<Box>
					<div>Incomes</div>
					<WalletControlCircle type="income"/>
					<WalletControlCircle type="income"/>
					<WalletControlCircle type="income"/>
				</Box>
				<Box>
					<div>Wallets</div>
					<WalletControlCircle type="wallet"/>
					<WalletControlCircle type="wallet"/>
					<WalletControlCircle type="wallet"/>
				</Box>
				<Box>
					<div>Expenses</div>
					<WalletControlCircle type="expense"/>
					<WalletControlCircle type="expense"/>
					<WalletControlCircle type="expense"/>
					<WalletControlCircle type="expense"/>
					<WalletControlCircle type="expense"/>
					<WalletControlCircle type="expense"/>
				</Box>
			</Box>
		</>
	)
}

export default WalletControlCore;
