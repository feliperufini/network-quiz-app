import type Pergunta from '@/data/model/Pergunta'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export interface ResultadoProps {
	perguntas: Pergunta[]
	respostas: number[]
	pontuacao: number
	totalDePerguntas: number
	reiniciar: () => void
}

export default function Resultado(props: ResultadoProps) {
	const { pontuacao, totalDePerguntas, perguntas, respostas, reiniciar } = props

	const [indexDaRevisao, setIndexDaRevisao] = useState(0)

	return (
		<View style={styles.container}>
			<Text style={styles.texto}>Você acertou</Text>
			<Text style={styles.destaque}>
				{Math.round((pontuacao / totalDePerguntas) * 100)}%
			</Text>
			<Pressable style={styles.botao} onPress={reiniciar}>
				<Text style={styles.textoBotao}>Reiniciar</Text>
			</Pressable>
			<View style={styles.containerRevisao}>
				<Text style={styles.tituloRevisao}>Respostas:</Text>
				<Text style={styles.perguntaRevisao}>
					{perguntas[indexDaRevisao].enunciado}
				</Text>
				<View style={{ flexDirection: 'row', gap: 2 }}>
					<Text style={styles.respostaRevisao}>R:</Text>
					<Text
						style={
							perguntas[indexDaRevisao].resposta === respostas[indexDaRevisao]
								? styles.respostaCertaRevisao
								: styles.respostaErradaRevisao
						}
					>
						{
							perguntas[indexDaRevisao].opcoes[
								perguntas[indexDaRevisao].resposta
							]
						}
					</Text>
				</View>
				<View style={styles.navegarRevisao}>
					<Pressable
						style={styles.botaoRevisao}
						onPress={() =>
							setIndexDaRevisao((prev) => (prev > 0 ? prev - 1 : prev))
						}
					>
						<Text style={styles.textoBotao}>«</Text>
					</Pressable>
					<Pressable
						style={styles.botaoRevisao}
						onPress={() =>
							setIndexDaRevisao((prev) => (prev < 9 ? prev + 1 : prev))
						}
					>
						<Text style={styles.textoBotao}>»</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 15,
	},
	texto: {
		color: '#fff',
		fontFamily: 'Roboto',
		fontSize: 28,
	},
	destaque: {
		color: 'white',
		fontFamily: 'Roboto',
		fontSize: 60,
	},
	botao: {
		marginTop: 20,
		backgroundColor: '#358bad',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	textoBotao: {
		color: 'white',
		fontFamily: 'Roboto',
		fontSize: 22,
	},
	containerRevisao: {
		borderWidth: 2,
		width: '100%',
		borderColor: '#246077',
		borderRadius: 10,
		padding: 15,
		alignItems: 'flex-start',
		marginTop: 60,
	},
	tituloRevisao: {
		color: '#acacac',
		fontFamily: 'Roboto',
		fontSize: 16,
		marginBottom: 8,
	},
	perguntaRevisao: {
		color: '#ffffff',
		fontFamily: 'Roboto',
		fontSize: 14,
	},
	respostaRevisao: {
		color: '#acacac',
		fontFamily: 'Roboto',
		fontSize: 14,
	},
	respostaCertaRevisao: {
		color: '#6ed36e',
		fontFamily: 'Roboto',
		fontSize: 14,
	},
	respostaErradaRevisao: {
		color: '#d36e6e',
		fontFamily: 'Roboto',
		fontSize: 14,
	},
	navegarRevisao: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 10,
		paddingHorizontal: 10,
	},
	botaoRevisao: {
		marginTop: 10,
		backgroundColor: '#246077',
		paddingHorizontal: 15,
		paddingBottom: 5,
		borderRadius: 10,
	},
})
