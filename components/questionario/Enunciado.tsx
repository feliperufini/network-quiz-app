import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'

export interface EnunciadoProps {
	enunciado: string
}

export default function Enunciado(props: EnunciadoProps) {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
				style={styles.background}
			/>
			<Text style={styles.texto}>{props.enunciado}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		backgroundColor: '#23627a',
		padding: 20,
		width: '95%',
		borderRadius: 10,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	texto: {
		color: 'white',
		fontFamily: 'Roboto',
		fontSize: 22,
		textAlign: 'center',
		opacity: 0.8,
	},
})
