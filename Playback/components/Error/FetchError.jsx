import { View, Text, TouchableOpacity } from 'react-native'

import { getGamesHome } from "../../hooks/RAWGService";

import styles from './fetchError.style'

const FetchError = ({ message, handlePress }) => {

	return (
		<View style={styles.errorTextContainer}>
			<View style={styles.fetchErrorTextContainer}>
				<Text style={styles.fetchErrorText}>
					Something went wrong : {message}.
				</Text>
			</View>
			<TouchableOpacity 
				style={styles.retryFetchButton}
				onPress={handlePress}
			>
				<Text style={styles.fetchErrorRetryText}>
					Retry
				</Text>
			</TouchableOpacity>
		</View>
		)
	}
	
	export default FetchError