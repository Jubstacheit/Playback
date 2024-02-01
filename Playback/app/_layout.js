import { Stack, Tabs } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from "expo-font"
import * as Splashscreen from 'expo-splash-screen'
import { COLORS, SHADOWS, SIZES } from '../constants'
import { Button, Image, Platform } from 'react-native'
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

	const tabHeight = () => {
		if (Platform.OS === 'web') {
			return 48
		}
		return 60
	}

	return (
		<Tabs 
		onLayout={onLayoutRootView}
		screenOptions={{
			tabBarHideOnKeyboard: true,
			tabBarStyle: {
				elevation: 0,
				shadowOffset: {
					width: 0, height: 0 // for iOS
				},
				padding: 0,
				height: tabHeight(),
				borderTopWidth: 0,
				borderBottomWidth: 0,
				backgroundColor: COLORS.gray2
			},
			tabBarItemStyle: {
				...Platform.select({
					android: {
						paddingTop: 12,
					},
					web: {
						paddingBottom: 5
					}
				})
			}
		}}
		>
			<Tabs.Screen
				name="index"
				options={{
					// Ensure the tab always links to the same href.
					href: '/',
					headerShown: false,
					tabBarActiveBackgroundColor: COLORS.primary,
					tabBarIcon: () => (
						<Image
							source={require('../assets/icons/icon.png')}
							style={{ width: 32, height: SIZES.xxLarge }}
						/>
					),
					title: ''
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
					tabBarActiveBackgroundColor: COLORS.primary,
					tabBarIcon: ({ focused }) => (
						<AntDesign 
							name="search1" 
							size={24} 
							color={focused ? COLORS.background : COLORS.black} 
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
					tabBarActiveBackgroundColor: COLORS.primary,
					// Change tab name 
					title: '',
					tabBarIcon: ({ focused }) => (
						<AntDesign 
							name="profile" 
							size={24} 
							color={focused ? COLORS.background : COLORS.black}
						/>
					),
				}}
			/>
		</Tabs>
	)
}

export default Layout;