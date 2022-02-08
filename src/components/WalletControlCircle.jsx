import styled from '@emotion/styled'
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Box, Typography } from '@mui/material';

const CircleDnDWrapper = styled.div`
	border-radius: 50%;
	margin: 5px;
	display: inline-block;
`
const Circle = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	padding: 5px;
	box-sizing: border-box;

	display: inline-flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
	cursor: grab;
	transition: all 0.25s;
	color: white;

	background-color: 
		${props => {
			switch (props.type) {
				case 'income':
					return '#00cf00'
				case 'wallet':
					return '#07a3e0'
				case 'expense':
					return '#ff5100'
				default:
					return 'rgba(200,200,200,1.0)'
			}
		}};

	&:after{
		content: '';
		display: block;
		position: absolute;
		top: 10%;
		left: 5%;
		width: 125%;
		height: 125%;
		border-radius: 50%;
		background-color: rgba(255,255,255,0.15);
	}
`
const DraggablePart = styled.div`
	display: inline-block;
`
const DroppablePart = styled.div`
	display: inline-block;
	background-color: rgba(100,100,100,0.25);
	border-radius: 50%;
`

const WalletControlCircle = ({ ukey, options }) => {
	let acceptedTypes = []
	switch (options.type) {
		case "income":	
			acceptedTypes = []
			break;
		case "wallet":
			acceptedTypes = ['wallet','income']
			break;
		case "expense":
			acceptedTypes = ['wallet']
			break;
		default:
			acceptedTypes = []
			break;
	}

	/* Dropzone part */
		const { isOver, setNodeRef:droppableNodeRef } = useDroppable({
			id: ukey,
			data: {
				accepts: acceptedTypes,
				options: { ...options }
			},
		});
		const droppableStyle = {
			backgroundColor: isOver ? undefined : undefined,
		};
		const dynStyle = {
			transform: isOver ? 'scale(1.15)' : undefined,
		}

	/* Draggable part */
		const { attributes, listeners, setNodeRef:draggableNodeRef, transform } = useDraggable({
			id: ukey,
			data: {
				type: options.type,
				options: { ...options }
			},
		});
		const draggableStyle = transform ? {
			transform: CSS.Translate.toString(transform),
			zIndex: 1,
			position: 'relative'
		} : {
			zIndex: 0,
			transition: 'all 0.5s',
		};

	return (
		<>
			<CircleDnDWrapper>
				<DroppablePart ref={droppableNodeRef} style={droppableStyle}>
					<DraggablePart ref={draggableNodeRef} {...listeners} {...attributes} style={draggableStyle} disabled={options.type === 'expense' ? true : false}>
						<Circle type={options.type} style={dynStyle}>
							<Box sx={{ textAlign: 'center', p: 1 }}>
								<Typography component="div" variant='body1' sx={{ fontSize: '0.75em', fontWeight: 'bold', lineHeight: '1em' }}>{options.label}</Typography>
								<Typography variant='body1' sx={{ background: 'rgba(255,255,255,0.25)', p: "2px", borderRadius: 1 }}>{options.amount !== 0 && options.amount}</Typography>
								<Typography variant='body2' sx={{ fontSize: '0.65em', fontWeight: 'bold' }}>{options.currency}</Typography>
							</Box>
						</Circle>
					</DraggablePart>
				</DroppablePart>
			</CircleDnDWrapper>
		</>
	)
}

export default WalletControlCircle;
