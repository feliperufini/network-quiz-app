import Contador from '@/components/questionario/Contador'
import Pergunta from '@/components/questionario/Pergunta'
import Resultado from '@/components/questionario/Resultado'
import Logo from '@/components/template/Logo'
import Pagina from '@/components/template/Pagina'
import useQuestionario from '@/data/hooks/useQuestionario'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Index() {
	const defaultUserAreLoggedIn = false

	const [nomeDoUsuario, setNomeDoUsuario] = useState('')
	const [userAreLoggedIn, setUserAreLoggedIn] = useState(defaultUserAreLoggedIn)

	const {
		perguntas,
		respostas,
		pergunta,
		numeroPergunta,
		totalDePerguntas,
		concluido,
		pontuacao,
		responder,
		reiniciar,
	} = useQuestionario()

	const handleSubmitNome = () => {
		setUserAreLoggedIn(true)
		console.log('Usuário logado com sucesso!')
	}

	if (userAreLoggedIn) {
		return (
			<Pagina>
				{!concluido && (
					<Contador
						numeroPergunta={numeroPergunta}
						totalDePerguntas={totalDePerguntas}
					/>
				)}
				<View style={{ gap: 40 }}>
					<Logo />
					{concluido ? (
						<Resultado
							perguntas={perguntas}
							respostas={respostas}
							pontuacao={pontuacao}
							totalDePerguntas={totalDePerguntas}
							reiniciar={reiniciar}
						/>
					) : (
						<Pergunta pergunta={pergunta} opcaoSelecionada={responder} />
					)}
				</View>
			</Pagina>
		)
	} else {
		return (
			<Pagina>
				<Text style={styles.title}>Nome Completo:</Text>
				<TextInput
					style={styles.input}
					placeholder="Informe seu nome"
					placeholderTextColor="#aaaaaa"
					value={nomeDoUsuario}
					onChangeText={setNomeDoUsuario}
				/>
				<Pressable style={styles.botaoRevisao} onPress={handleSubmitNome}>
					<Text style={styles.textoBotao}>Confirmar</Text>
				</Pressable>
			</Pagina>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		color: '#eeeeee',
		marginLeft: '6%',
		alignSelf: 'flex-start',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	input: {
		color: '#eeeeee',
		backgroundColor: '#4d4d4daa',
		width: '90%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	botaoRevisao: {
		backgroundColor: '#358bad',
		paddingHorizontal: 15,
		padding: 10,
		borderRadius: 10,
	},
	textoBotao: {
		color: '#eeeeee',
		fontFamily: 'Roboto',
		fontSize: 18,
	},
})
