import cls from './ImgContainer.module.scss';
import searchLogo from '@/assets/searchLogo.png'
export const ImgContainer = () => {
    return (
        <img
            src={searchLogo}
            alt={'searchLogo'}
            className={cls.ImgContainer}>
        </img>
    )
};
