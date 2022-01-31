import { createSlice } from "@reduxjs/toolkit"

export const commonSlice = createSlice({
    name: "CommonSlice",
    initialState: {
        isMenuOpen: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { toggleMenu } = commonSlice.actions
export default commonSlice.reducer