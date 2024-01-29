import React, { FC } from "react";
import Search from "../../blocks/search/search";
import Logo from "../../ui/logo/logo";
import styles from "./nav.module.scss"
import CatalogMenu from "../../blocks/catalogMenu/catalogMenu";
import BalanceIcon from '@/public/balance.svg'
import HeartIcon from '@/public/heart-outlined.svg'
import Minicart from "../../blocks/minicart/minicart";

const Nav: FC = () => {
  return <nav className={styles.nav}>
    <Logo className={styles.logo} />
    <CatalogMenu className={styles.catalog} />
    <Search className={styles.search} />
    <ul>
      <li>
        <BalanceIcon/>
      </li>
      <li>
        <HeartIcon />
      </li>
      <li>
        <Minicart />
      </li>
    </ul>
  </nav>
}

export default Nav