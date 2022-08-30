import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/date'
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from 'react'

interface Props{
    selecionado:ITarefa | undefined
}

const Cronometro = ({selecionado}:Props) => {
  const [tempo, setTempo] = useState<number>()

  useEffect(()=> {
    if(selecionado?.tempo){setTempo(tempoParaSegundos(selecionado.tempo))}
  },[selecionado])

    return(
       <div className={style.cronometro}>
        <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo}/>  
        </div>
          <Botao texto="Iniciar"/>
       </div>
    )
}

export default Cronometro