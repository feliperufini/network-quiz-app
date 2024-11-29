import { StyleSheet, Text, View } from 'react-native'

export default function Logo() {
	return (
		<View>
			<Text style={styles.primario}>NETWORK QUIZ</Text>
			<Text style={styles.segundario}>Teste seus conhecimentos em redes!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	primario: {
		fontFamily: 'Terracota',
		fontSize: 56,
		color: 'white',
		textAlign: 'center',
	},
	segundario: {
		fontFamily: 'Roboto',
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
})
