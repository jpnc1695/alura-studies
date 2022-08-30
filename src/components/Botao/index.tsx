import style from './Botao.module.scss'

const Botao = (props:{texto:string, tipo?:"button"| "submit" | "reset" | undefined}) => {
  return(
    <button type={props.tipo} className={style.botao}>{props.texto}</button>
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