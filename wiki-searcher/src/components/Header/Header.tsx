import cls from './Header.module.scss';
interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
    return (
        <div className={cls.Header}>
            <h1>Wiki Searcher</h1>
        </div>
    )
};
