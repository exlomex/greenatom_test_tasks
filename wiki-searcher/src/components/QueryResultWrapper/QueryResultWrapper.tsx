import cls from './QueryResultWrapper.module.scss';
import SearchSlice from '@/store/slices/SearchSlice'
import {observer} from "mobx-react-lite";
interface QueryResultWrapperProps {
    className?: string;
}

export const QueryResultWrapper = observer((props: QueryResultWrapperProps) => {
    const { } = props;
    const resultsTitles: string[] = SearchSlice.queryResult[1]
    const resultsLinks: string[] = SearchSlice.queryResult[3]
    return (
        <div className={cls.QueryResultWrapper}>
            {resultsTitles && resultsTitles.map((title, index) => (
                <a href={resultsLinks[index]} target={'_blank'} className={cls.resultLink} key={index}>
                    {title}
                </a>
            ))}
        </div>
    )
});
