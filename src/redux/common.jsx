import { createSlice } from "@reduxjs/toolkit"

export const commonSlice = createSlice({
	name: "CommonSlice",
	initialState: {
		isMenuOpen: false,
		isWCDOpen: false
	},
	reducers: {
		toggleMenu: (state) => {
			state.isMenuOpen = !state.isMenuOpen
		},
		toggleWalletControlDialog: (state, action) => {
			if(typeof action.payload !== 'undefined'){
				state.isWCDOpen = action.payload
			}else{
				state.isWCDOpen = !state.isWCDOpen
			}
		}
	}
})

export const { toggleMenu, toggleWalletControlDialog } = commonSlice.actions
export default commonSlice.reducer