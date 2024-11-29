import { StatusBar } from 'expo-status-bar'
import type { ReactNode } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export interface PaginaProps {
	children: ReactNode
}

const background = require('@/assets/images/background.jpg')

export default function Pagina(props: PaginaProps) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor="#fac16c" />
			<View style={styles.container}>
				<ImageBackground
					source={background}
					resizeMode="cover"
					style={styles.image}
					imageStyle={{ opacity: 0.4 }}
				>
					{props.children}
				</ImageBackground>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		position: 'relative',
	},
	image: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
