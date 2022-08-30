import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/date'
import { ITarefa } from '../../types/tarefa'
import { useState } from 'react'

interface Props{
    selecionado:ITarefa | undefined
}

const Cronometro = ({selecionado}:Props) => {
  const [tempo, setTempo] = useState<number>()
  if(selecionado?.tempo){setTempo(tempoParaSegundos(selecionado.tempo))}
  
    return(
       <div className={style.cronometro}>
        <p className={style.titulo}> Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio/>  
        </div>
          <Botao texto="Iniciar"/>
       </div>
    )
}

export default Cronometro