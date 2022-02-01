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
					break;	
				case 'wallet':
					return 'blue'
					break;
				case 'expense':
					return 'red'
					break;
				default:
					return 'gray'
					break;
			}
		}};
`

const WalletControlCircle = ({ type }) => {
	return (
		<>
			<Circle type={type}>
				Add Income
			</Circle>
		</>
	)
}

export default WalletControlCircle;
