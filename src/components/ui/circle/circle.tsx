import { FC } from 'react'
import styles from './circle.module.scss'

const Circle: FC<{ color: string }> = ({ color }) => {

  let styleColor: string;
  switch (color) {
    case 'pink': styleColor = styles.pink; break;
    case 'blue': styleColor = styles.blue; break;
    case 'red': styleColor = styles.red; break;
    default: styleColor = styles.none; break;
  }
  return <div className={`${styles.circle} ${styleColor}`} />
}

export default Circle