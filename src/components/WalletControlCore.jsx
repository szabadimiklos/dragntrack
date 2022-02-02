import { Box } from "@mui/material"
import WalletControlCircle from "./WalletControlCircle";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend"
import { HTML5Backend } from "react-dnd-html5-backend"

const dndoptions = {
	enableMouseEvents: true,
	delayTouchStart: 0
}

const WalletControlCore = () => {
	return (
		<DndProvider backend={TouchBackend} options={dndoptions}>
			<Box sx={{ border: '1px solid grey' }}>
				<Box>
					<div>Incomes</div>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<WalletControlCircle type="income" text="Income"/>
						<WalletControlCircle type="income" text="Paycheck"/>
					</Box>
				</Box>
				<Box>
					<div>Wallets</div>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<WalletControlCircle type="wallet" text="Cash"/>
						<WalletControlCircle type="wallet" text="OTP bank account"/>
						<WalletControlCircle type="wallet" text="Raiffeisen bank account"/>
					</Box>
				</Box>
				<Box>
					<div>Expenses</div>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<WalletControlCircle type="expense" text="Income"/>
						<WalletControlCircle type="expense" text="Income"/>
						<WalletControlCircle type="expense" text="Income"/>
						<WalletControlCircle type="expense" text="Income"/>
						<WalletControlCircle type="expense" text="Income"/>
						<WalletControlCircle type="expense" text="Income"/>
					</Box>
				</Box>
			</Box>
		</DndProvider>
	)
}

export default WalletControlCore;
