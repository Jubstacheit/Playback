import { AlertDialog, Button, YStack, XStack } from 'tamagui'

import { COLORS } from '../../constants'

const FetchError = ({ message, handlePress, noResults }) => {

	return (
			<AlertDialog defaultOpen>
			<AlertDialog.Trigger asChild>
			</AlertDialog.Trigger>
	
			<AlertDialog.Portal>
				<AlertDialog.Overlay
					key="overlay"
					animation="quick"
					opacity={0.5}
					enterStyle={{ opacity: 0 }}
					exitStyle={{ opacity: 0 }}
				/>
				<AlertDialog.Content
					bordered
					elevate
					key="content"
					animation={[
					'quick',
					{
						opacity: {
						overshootClamping: true,
						},
					},
					]}
					enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
					exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
					x={0}
					scale={1}
					opacity={1}
					y={0}
				>
					<YStack space>
						<AlertDialog.Title size="$8">Something went wrong</AlertDialog.Title>
						<AlertDialog.Description size='$4'>
							{message}
						</AlertDialog.Description>
			
						<XStack space="$3" justifyContent="flex-end">
							<AlertDialog.Cancel asChild>
								<Button
								>Cancel</Button>
							</AlertDialog.Cancel>
							{
								!noResults ? 
								<AlertDialog asChild>
								<Button
									backgroundColor={COLORS.tertiary}
									hoverStyle={{backgroundColor: COLORS.secondary, borderColor: COLORS.secondary}}
									focusStyle={{backgroundColor: COLORS.secondary}}
									onPress={() => handlePress()}
								>Retry</Button>
							</AlertDialog>
							: null
							}
						</XStack>
					</YStack>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog>
		)
	}
	
	export default FetchError