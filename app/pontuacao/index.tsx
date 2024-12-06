import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Pontuacao() {
	const router = useRouter()

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Página de Pontuação</Text>
			<Button title="Voltar para Início" onPress={() => router.back()} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
})
