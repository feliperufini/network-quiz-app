import { Pressable, StyleSheet, Text } from 'react-native'

export interface OpcaoProps {
	indice: number
	texto: string
	onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
	return (
		<Pressable style={styles.container} onPress={props.onPress}>
			<Text style={styles.texto}>{props.texto}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#b87e27',
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 50,
	},
	texto: {
		color: 'white',
		fontFamily: 'Roboto',
		fontSize: 18,
		opacity: 0.9,
	},
})
