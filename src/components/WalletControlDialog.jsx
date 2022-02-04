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

const WalletControlDialog = () => {
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
								defaultValue={0}
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
