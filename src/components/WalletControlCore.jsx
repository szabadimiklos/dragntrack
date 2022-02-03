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
import styled from '@emotion/styled'

const MonitorDndEvents = () => {
	// Monitor drag and drop events that happen on the parent `DndContext` provider
	useDndMonitor({
		onDragStart(event) { console.log("onDragStart",event) },
		//onDragMove(event) { console.log("onDragMove",event) },
		onDragOver(event) { console.log("onDragOver Currently over",event.over) },
		onDragEnd(event) {console.log("onDragEnd Ended over",event.over) },
		//onDragCancel(event) { console.log("onDragCancel",event) },
	});

	return <></>
}

const WalletControlCore = () => {
	const mouseSensor = useSensor(MouseSensor);
	const touchSensor = useSensor(TouchSensor);

	const sensors = useSensors(
		mouseSensor,
		touchSensor,
	);

	return (
		<DndContext sensors={sensors}>
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
	)
}

export default WalletControlCore;
