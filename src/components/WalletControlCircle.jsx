import styled from '@emotion/styled'
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const CircleDnDWrapper = styled.div`
	border-radius: 50%;
	margin: 5px;
	display: inline-block;
`
const Circle = styled.div`
	border-radius: 50%;
	width: 90px;
	height: 90px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: grab;
	transition: all 0.25s;

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
const DraggablePart = styled.div`
	display: inline-block;
`
const DroppablePart = styled.div`
	display: inline-block;
	background-color: rgba(100,100,100,0.25);
	border-radius: 50%;
`

const WalletControlCircle = ({ type, text, ukey }) => {
	let acceptedTypes = []
	switch (type) {
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
			id: ukey+"drop",
			data: {
				accepts: acceptedTypes,
			},
		});
		const droppableStyle = {
			backgroundColor: isOver ? undefined : undefined,
		};
		const dynStyle = {
			backgroundColor: isOver ? 'yellow' : undefined,
		}

	/* Draggable part */
		const { attributes, listeners, setNodeRef:draggableNodeRef, transform } = useDraggable({
			id: ukey+"drag",
			data: {
				type: type,
			},
		});
		const draggableStyle = transform ? {
			transform: CSS.Translate.toString(transform),
		} : {
			transition: 'all 0.5s',
		};

	return (
		<>
			<CircleDnDWrapper>
				<DroppablePart ref={droppableNodeRef} style={droppableStyle}>
					<DraggablePart ref={draggableNodeRef} {...listeners} {...attributes} style={draggableStyle}>
						<Circle type={type} style={dynStyle}>
							{text}
						</Circle>
					</DraggablePart>
				</DroppablePart>
			</CircleDnDWrapper>
		</>
	)
}

export default WalletControlCircle;
