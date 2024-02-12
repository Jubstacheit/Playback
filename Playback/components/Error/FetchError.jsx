import { View, Text, TouchableOpacity } from 'react-native'


import styles from './fetchError.style'

const FetchError = ({ message, handlePress, noResults }) => {

	return (
		<View style={styles.errorTextContainer}>
			<View style={styles.fetchErrorTextContainer}>
				<Text style={styles.fetchErrorText}>
					Something went wrong : {message}.
				</Text>
			</View>

			{
				!noResults ? 
					<TouchableOpacity 
						style={styles.retryFetchButton}
						onPress={handlePress}
					>
					<Text style={styles.fetchErrorRetryText}>
						Retry
					</Text>
				</TouchableOpacity> : null
			}

		</View>
		)
	}
	
	export default FetchError