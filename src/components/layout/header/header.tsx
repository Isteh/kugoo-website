import { FC } from "react";
import Nav from "../nav/nav";
import styles from './header.module.scss'
import TopContacts from "../../blocks/topContacts/topContacts";
import AdditionalNavigation from "../../blocks/additionalNavigation/additionalNavigation";

const Header: FC = () => {
    return <header className={styles.header}>
        <TopContacts />
        <Nav />
        <AdditionalNavigation />
    </header>
}
export default Header