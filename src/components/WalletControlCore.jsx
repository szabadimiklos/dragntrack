import { useDispatch } from "react-redux";
import { toggleWalletControlDialog } from '../redux/common';

import { 
	DndContext,
	useDndMonitor,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";

import { Box, Divider, Paper } from "@mui/material"

import WalletControlCircle from "./WalletControlCircle";
import WalletControlDialog from "./WalletControlDialog";
import { useState } from "react";


const WalletControlCore = () => {
	const [transactionData,setTransactionData] = useState({})
	const dispatch = useDispatch()

	const MonitorDndEvents = () => {
		// Monitor drag and drop events that happen on the parent `DndContext` provider
		useDndMonitor({
			//onDragStart(event) { console.log("onDragStart",event) },
			//onDragMove(event) { console.log("onDragMove",event) },
			//onDragOver(event) { console.log("onDragOver Currently over",event.over) },
			onDragEnd(event) {
				if(!event.over) return;
				if(
					event.over.id !== event.active.id &&
					event.over.data.current.accepts.includes(event.active.data.current.type)
				){
					dispatch(toggleWalletControlDialog(true))
					setTransactionData({
						from: event.active,
						to: event.over
					})
				}
			},
			//onDragCancel(event) { console.log("onDragCancel",event) },
		});
	
		return <></>
	}

	const mouseSensor = useSensor(MouseSensor);
	const touchSensor = useSensor(TouchSensor);
	const sensors = useSensors(
		mouseSensor,
		touchSensor,
	);

	const fakeData = {
		"incomeCircles": [
			{
				id: 'i-0',
				type: 'income',
				label: 'New Income',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'i-1',
				type: 'income',
				label: 'Paycheck',
				amount: 5000,
				currency: 'USD'
			},
		],
		"walletCircles": [
			{
				id: 'w-0',
				type: 'wallet',
				label: 'Cash',
				amount: 15000,
				currency: 'USD'
			},
			{
				id: 'w-1',
				type: 'wallet',
				label: 'OTP Bank Account',
				amount: 128344,
				currency: 'USD'
			},
			{
				id: 'w-2',
				type: 'wallet',
				label: 'Raiffeisen Bank Account',
				amount: 59920,
				currency: 'USD'
			},
			{
				id: 'w-3',
				type: 'wallet',
				label: 'Wall Safe (cash)',
				amount: 11500,
				currency: 'USD'
			},
		],
		"expenseCircles": [
			{
				id: 'e-0',
				type: 'expense',
				label: 'New Expense',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-1',
				type: 'expense',
				label: 'Rent',
				amount: 2850,
				currency: 'USD'
			},
			{
				id: 'e-2',
				type: 'expense',
				label: 'Mobile (postpaid)',
				amount: 50,
				currency: 'USD'
			},
			{
				id: 'e-3',
				type: 'expense',
				label: 'Internet (home)',
				amount: 45,
				currency: 'USD'
			},
			{
				id: 'e-4',
				type: 'expense',
				label: 'Food',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-5',
				type: 'expense',
				label: 'Gas',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-6',
				type: 'expense',
				label: 'Travel',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-7',
				type: 'expense',
				label: 'Car & Service',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-8',
				type: 'expense',
				label: 'Clothes',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-9',
				type: 'expense',
				label: 'Pet',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-10',
				type: 'expense',
				label: 'Doctor',
				amount: 0,
				currency: 'USD'
			},
			{
				id: 'e-11',
				type: 'expense',
				label: 'Household costs',
				amount: 0,
				currency: 'USD'
			},
		]
	}

	return (
		<>
			<DndContext sensors={sensors} autoScroll={false}>
				<Paper elevation={6} sx={{ p: 3 }}>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
						{fakeData.incomeCircles.map(item =>
							<WalletControlCircle key={item.id} ukey={item.id} options={item}/>
						)}
						<Divider sx={{ my: 2, flexBasis: '100%' }}/>
						{fakeData.walletCircles.map(item =>
							<WalletControlCircle key={item.id} ukey={item.id} options={item}/>
						)}
						<Divider sx={{ my: 2, flexBasis: '100%' }}/>
						{fakeData.expenseCircles.map(item =>
							<WalletControlCircle key={item.id} ukey={item.id} options={item}/>
						)}
					</Box>
				</Paper>

				<MonitorDndEvents />
			</DndContext>

			<WalletControlDialog transactionData={transactionData} />
		</>
	)
}

export default WalletControlCore;
