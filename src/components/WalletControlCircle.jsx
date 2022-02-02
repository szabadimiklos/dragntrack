import styled from '@emotion/styled'

const Circle = styled.div`
	border-radius: 50%;
	width: 90px;
	height: 90px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: grab;

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
	return (
		<>
			<Circle type={type}>
				{text}
			</Circle>
		</>
	)
}

export default WalletControlCircle;
