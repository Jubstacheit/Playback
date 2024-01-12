import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from "expo-font"
import * as Splashscreen from 'expo-splash-screen'

Splashscreen.preventAutoHideAsync()

const Layout = () => {
	// Import fonts
	const [fontsLoaded] = useFonts({
		DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
		DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
		JetBrainsMonoBold: require('../assets/fonts/JetBrainsMono-Bold.ttf')
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


	return <Stack onLayout={onLayoutRootView} />
}

export default Layout;