import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './common'

export default configureStore({
	reducer: {
		common: commonReducer
	},
})