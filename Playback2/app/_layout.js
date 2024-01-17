import { Stack, Tabs } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from "expo-font"
import * as Splashscreen from 'expo-splash-screen'
import { COLORS, SIZES } from '../constants'
import { Image } from 'react-native'

Splashscreen.preventAutoHideAsync()

const Layout = () => {
	// Import fonts
	const [fontsLoaded] = useFonts({
		'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
		'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
		'JetBrainsMonoBold': require('../assets/fonts/JetBrainsMono-Bold.ttf')
	})
	// Hide splashscreen when fonts are loaded
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await Splashscreen.hideAsync()
		}
	}, [fontsLoaded])
	if (!fontsLoaded) {
		return null
	}


	return (
		<Tabs 
		onLayout={onLayoutRootView}
		screenOptions={{
			tabBarActiveTintColor: COLORS.tertiary,
			tabBarInactiveTintColor: COLORS.secondary,
			tabBarStyle: {
				height: 70,
				borderTopWidth: 2,
				borderTopColor: COLORS.secondary,
				backgroundColor: COLORS.primary,
			}
		}}
		>
			<Tabs.Screen
				name="index"
				options={{
					// Ensure the tab always links to the same href.
					href: '/',
					headerShown: false,
					tabBarIcon: () => (
						<Image
							source={require('../assets/icon.png')}
							style={{ width: SIZES.xxLarge, height: SIZES.xxLarge, marginTop: 15 }}
						/>
					),
					tabBarHideOnKeyboard: true,
					title: '',
					// Change tab icon to an asset
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					// Ensure the tab always links to the same href.
					href: '/search',
					// Change tab name 
					title: 'Search',
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					// Ensure the tab always links to the same href.
					href: '/profile',
					// Change tab name 
					title: 'Profile',
				}}
			/>
		</Tabs>
	)
}

export default Layout;