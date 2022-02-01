import { Box } from "@mui/material"
import WalletControlCircle from "./WalletControlCircle";

const WalletControlCore = () => {
	return (
		<>
			<Box sx={{ border: '1px solid grey' }}>
				<Box>
					<div>Incomes</div>
					{[...Array(3)].map((item, index) =>
						<WalletControlCircle type="income" key={`income_${index}`} text="Income"/>
					)}
				</Box>
				<Box>
					<div>Wallets</div>
					{[...Array(5)].map((item, index) =>
						<WalletControlCircle type="wallet" key={`wallet_${index}`} text="Wallet"/>
					)}
				</Box>
				<Box>
					<div>Expenses</div>
					{[...Array(10)].map((item, index) =>
						<WalletControlCircle type="expense" key={`expense_${index}`} text="Expense"/>
					)}
				</Box>
			</Box>
		</>
	)
}

export default WalletControlCore;
