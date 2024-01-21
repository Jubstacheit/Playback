import { Stack, Tabs } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from "expo-font"
import * as Splashscreen from 'expo-splash-screen'
import { COLORS, SIZES } from '../constants'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

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
			tabBarHideOnKeyboard: true,
			tabBarActiveTintColor: COLORS.tertiary,
			tabBarInactiveTintColor: COLORS.secondary,
			tabBarStyle: {
				elevation: 0,
				shadowOffset: {
					width: 0, height: 0 // for iOS
				},
				height: 70,
				padding: 0,
				borderTopWidth: 0,
				backgroundColor: COLORS.background,
			},
			tabBarItemStyle: {
				borderBottomWidth: 2,
				borderColor: COLORS.background,
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
							style={{ width: SIZES.xxLarge, height: SIZES.xxLarge }}
						/>
					),
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
					title: '',
					headerShown: false,
					tabBarIcon: () => (
						<AntDesign 
							name="search1" 
							size={24} 
							color={COLORS.lightWhite} 
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					// Ensure the tab always links to the same href.
					href: '/profile',
					headerShown: false,
					// Change tab name 
					title: '',
					tabBarIcon: () => (
						<AntDesign 
							name="profile" 
							size={24} 
							color={COLORS.lightWhite}
						/>
					),
				}}
			/>
		</Tabs>
	)
}

export default Layout;