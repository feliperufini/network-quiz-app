import { StyleSheet, Text } from 'react-native'

export interface ContadorProps {
	numeroPergunta: number
	totalDePerguntas: number
}

export default function Contador(props: ContadorProps) {
	return (
		<Text
			style={styles.texto}
		>{`${props.numeroPergunta}/${props.totalDePerguntas}`}</Text>
	)
}

const styles = StyleSheet.create({
	texto: {
		position: 'absolute',
		top: 10,
		color: 'white',
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 16,
		opacity: 0.7,
	},
})
