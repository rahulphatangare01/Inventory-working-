import React from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import CategoryIcon from '@mui/icons-material/Category';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ListItemButton } from "@mui/material";

// import {navigationItems} from "../config"

const Sidebar = () => {
	const useAuth = () => {
		const user = localStorage.getItem("token")
		if (user) {
			return true
		} else {
			return false
		}
	}
	const user = useAuth()
	const location = useLocation()
	const navigation = useNavigate()

	const logout = () => {
		localStorage.removeItem("token")
		navigation("/login")
	}

	const icon_style = {
		color: "#ffff",
		margin: 3
	}
	const icons_styls_icons = {
		margin: 10,
		color: "#e8dfdf",

	}

	const movetopage = (page) => {
		navigation(page)
	}
	return (
		<Box sx={{ display: 'flex' }}>


			<Drawer
				sx={{
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: 206,
						boxSizing: 'border-box',
						marginTop: 8,
						backgroundImage: "linear-gradient(to bottom, #7b4397, #dc2430)"
					},
				}}
				variant="permanent"
				anchor="left"
			>
				{user && (
					<>
						<List style={icon_style}>
							<ListItem button key="Dashboard" onClick = {()=>movetopage('/dashboard')} >
								<DashboardIcon style={icons_styls_icons} />
								<ListItemText primary="Dashboard" />
							</ListItem>

							<ListItem button key="Product" onClick = {()=>movetopage('/productinfo')}  >
								<CategoryIcon style={icons_styls_icons} />
								<ListItemText primary="Product" />
							</ListItem>
 
							<ListItem button key="Sell"  >
								<SellIcon style={icons_styls_icons} />
								<ListItemText primary="Sell" />
							</ListItem>

							<ListItem button key="Stock"  >
								<Inventory2Icon style={icons_styls_icons} />
								<ListItemText primary="Stock" />
							</ListItem>

							<ListItem button key="Invoice"   >
								<DescriptionIcon style={icons_styls_icons} />
								<ListItemText primary="Invoice" />
							</ListItem>
							<ListItem button key="Buyer" onClick = {()=>movetopage('/buyertable')} >
							<StoreSharpIcon style={icons_styls_icons} />
								<ListItemText primary="Buyer" />
							</ListItem>
							<ListItem button key="Supplier" onClick = {()=>movetopage('/suppliertable')} >
							<StoreSharpIcon style={icons_styls_icons} />
								<ListItemText primary="Supplier" />
							</ListItem>
							


						</List>
						{location.pathname !== "/login" && (
							<ListItem button onClick={logout} >
								<LogoutIcon style={icons_styls_icons} />
								<ListItemText primary="Logout" style={icon_style} />
							</ListItem>
						)}
					</>
				)}
				{!user && (

					<List style={icon_style}>
						<ListItem button key='login' onClick={() => movetopage('/login')}  >
							<LoginIcon style={icons_styls_icons} />
							<ListItemText primary="login" />
						</ListItem>

						<ListItem button key='login' onClick={() => movetopage('/signup')}  >
							<HowToRegIcon style={icons_styls_icons} />
							<ListItemText primary="Register" />
						</ListItem>


					</List>
				)}
			</Drawer>


		</Box>

	)
}

export default Sidebar
