/* Pages */
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import WalletControl from './pages/WalletControl'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'

/* Theming, MUI */
import { ThemeProvider } from '@mui/material'
import themeOverride from './assets/themeDragAndTrack'

/* Redux */
import store from './redux/store'
import { Provider as ReduxProvider } from 'react-redux'

/* Others */
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const fakeIsLoggedIn = true

const  App = () => {
	return (
		<ReduxProvider store={store}>
			<ThemeProvider theme={themeOverride}>
				<BrowserRouter>

					<Routes>
						<Route path="/" index element={<Home />} />
						<Route path="/Login" index element={<Login />} />
						<Route path="/Register" index element={<Register />} />
						
						{/* Only for those who are logged in */}
						{fakeIsLoggedIn && (
							<>
								<Route path="/walletcontrol" element={<WalletControl />} />
								<Route path="/overview" index element={<Overview />} />
								<Route path="/transactions" index element={<Transactions />} />
								<Route path="/settings" index element={<Settings />} />
							</>
						)}
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</ReduxProvider>
	);
}

export default App;
