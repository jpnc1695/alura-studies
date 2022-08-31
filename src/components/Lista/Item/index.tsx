import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa{
  selecionaTarefa: (tarefaselecionada: ITarefa) => void
}

const Item = ({
  tarefa, 
  tempo, 
  selecionado,
  completado, 
  id, 
  selecionaTarefa
} :Props)=> {

  return (
    <li 
      className={`${style.item} 
      ${selecionado ? style.itemSelecionado: ''} 
      ${completado ? style.itemCompletado:''} `} 
      onClick={()=> selecionaTarefa({
          tarefa:tarefa,
          tempo:tempo,
          selecionado:selecionado,
          completado:completado,
          id:id
      })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label='tarefa concluída'/>}
    </li>
  )
}

export default Item