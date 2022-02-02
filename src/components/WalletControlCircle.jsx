import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useDrag, useDrop } from 'react-dnd'

const Circle = styled.div`
	box-sizing: border-box;
	width: 90px;
	height: 90px;
	border-radius: 50%;
	overflow: hidden;
	margin: 5px;
	padding: 5px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: grab;
	flex-shrink: 0;

	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
	
	color: white;
	background-color: 
		${props => {
			switch (props.type) {
				case 'income':
					return 'green'
				case 'wallet':
					return 'blue'
				case 'expense':
					return 'red'
				default:
					return 'gray'
			}
		}};
`


const WalletControlCircle = ({ type, text }) => {
	const [{isDragging}, drag, dragPreview] = useDrag(() => ({
		type: type,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		})
	}))

	const acceptable = (type) => {
		switch (type) {
			case 'income':
				return ''
			case 'wallet':
				return ['income','wallet']
			case 'expense':
				return ['wallet']
			default:
				return ''
		}
	}
	const accept = acceptable(type)

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		// The type (or types) to accept - strings or symbols
		accept: accept,
		// Props to collect
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}))

	return (
		<>
			{isDragging ? (
				<Circle ref={dragPreview} type={type} style={{ background: isDragging && 'black' }}>
					<Typography variant='body2'>{text}</Typography>
				</Circle>
			) : (
				<Circle ref={drag} type={type} style={{ background: isDragging && 'black' }}>
					<div ref={drop} style={{ width: '100%', height: '100%', backgroundColor: isOver ? 'yellow' : 'rgba(255,255,0,0.25)' }}>{canDrop ? 'Release to drop' : text}</div>
					<Typography variant='body2'></Typography>
				</Circle>
			)}
		</>
	)
}

export default WalletControlCircle;
