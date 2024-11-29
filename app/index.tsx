import Contador from '@/components/questionario/Contador'
import Pergunta from '@/components/questionario/Pergunta'
import Resultado from '@/components/questionario/Resultado'
import Logo from '@/components/template/Logo'
import Pagina from '@/components/template/Pagina'
import useQuestionario from '@/data/hooks/useQuestionario'
import { View } from 'react-native'

export default function Index() {
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
}
