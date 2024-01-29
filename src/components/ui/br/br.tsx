import { FC } from 'react'
import style from './br.module.scss'

const Br: FC<{className?: string}> = ({className}) => {
  return <span className={`${style.br} ${className}`}/>
}

export default Br