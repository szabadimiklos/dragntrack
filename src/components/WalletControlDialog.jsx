import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { toggleWalletControlDialog } from '../redux/common';

import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import FormControl, { useFormControl } from '@mui/material/FormControl';

const WalletControlDialog = ({ transactionData }) => {
	const { isWCDOpen } = useSelector((state) => state.common)
	const dispatch = useDispatch()

	return (
		<>
			<Dialog 
				open={isWCDOpen} 
				onClose={() => dispatch(toggleWalletControlDialog(false))}
				scroll="paper"
			>
				<DialogTitle>Create transaction</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{(transactionData.from && transactionData.to) && `New transaction from ${transactionData.from.data.current.options.label} to ${transactionData.to.data.current.options.label}`}
					</DialogContentText>
					<DialogContentText>
						Please fill in the new transactions' details below.
					</DialogContentText>

					<FormControl>
						<Box
							component="form"
							autoComplete="off"
						>
							<TextField
								inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
								autoComplete="off"
								id="transaction-amount"
								label="Transaction Amount"
								helperText="Use only numbers"
								defaultValue={
									(transactionData.from && transactionData.to.data.current.options.type !== 'expense')
										? transactionData.from.data.current.options.amount 
									: (transactionData.from && transactionData.to.data.current.options.type === 'expense') 
										? transactionData.to.data.current.options.amount 
									: 
										0
								}
								margin="normal"
								required
							/>
						</Box>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => dispatch(toggleWalletControlDialog(false))}>Cancel</Button>
					<Button onClick={() => alert('do some action')}>Create Transaction</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default WalletControlDialog;
