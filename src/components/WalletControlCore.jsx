import { useDispatch } from "react-redux";
import { toggleWalletControlDialog } from '../redux/common';

import styled from '@emotion/styled'

import { 
	DndContext,
	useDndMonitor,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
	DragOverlay
} from "@dnd-kit/core";

import { Box } from "@mui/material"

import WalletControlCircle from "./WalletControlCircle";
import WalletControlDialog from "./WalletControlDialog";


const WalletControlCore = () => {
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

	return (
		<>
			<DndContext sensors={sensors} autoScroll={false}>
				<Box sx={{ border: '1px solid grey' }}>
					<Box>
						<div>Incomes</div>
						{[...Array(3)].map((item, index) =>
							<WalletControlCircle type="income" key={`income_${index}`} ukey={`income_${index}`} text="Income"/>
						)}
					</Box>
					<Box>
						<div>Wallets</div>
						{[...Array(5)].map((item, index) =>
							<WalletControlCircle type="wallet" key={`wallet_${index}`} ukey={`wallet_${index}`} text="Wallet"/>
						)}
					</Box>
					<Box>
						<div>Expenses</div>
						{[...Array(10)].map((item, index) =>
							<WalletControlCircle type="expense" key={`expense_${index}`} ukey={`expense_${index}`} text="Expense"/>
						)}
					</Box>
				</Box>

				<MonitorDndEvents />
			</DndContext>

			<WalletControlDialog />
		</>
	)
}

export default WalletControlCore;
