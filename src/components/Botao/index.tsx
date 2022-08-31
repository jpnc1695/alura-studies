import style from './Botao.module.scss'

interface Props {
  texto:string,
  tipo?:"button"| "submit" | "reset" | undefined,
  onClick?:() => void
}

const Botao = ({texto, tipo, onClick}:Props) => {
  return(
    <button 
       onClick={onClick} 
       type={tipo} 
       className={style.botao}
    >
        {texto}
    </button>
  )
}
   
export default Botao;

/*
class Botao extends React.Component<{texto:string}>{
 render(){
  return (
        <button className={style.botao}>{this.props.texto}</button>
  )
 }

}

*/