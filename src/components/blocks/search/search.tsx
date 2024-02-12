import { FC } from 'react';
import styles from "./search.module.scss"
import Select from '../../ui/select/select';
import SearchIcon from '@/public/Search.svg'
import Input from '../../ui/input/input';

const options = [
    {
        value: 'all',
        name: 'Везде',
    },
    {
        value: 'saratov',
        name: 'В Саратове',
    },
];

const Search: FC<{ className: string }> = ({ className }) => {
    return (
        <form id='search-form' className={`${styles.searchWrapper} ${className}`}>
            <Select styleTheme='main' options={options} name='search' />
            <Input name="search-input" type="search" placeholder="Искать самокат KUGO" />
            <button type='submit'><SearchIcon className={styles.icon} /></button>
        </form>
    );
};

export default Search;
