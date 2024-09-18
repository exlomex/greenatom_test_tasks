import cls from './QuoteContainer.module.scss';
import {memo, useCallback, useEffect, useState} from "react";
import {fetchRandomQuote, fetchRandomQuoteInterface} from "../services";

interface QuoteContainerProps {

}

export const QuoteContainer = memo((props: QuoteContainerProps) => {
    const [quote, setQuote] = useState<fetchRandomQuoteInterface>({ quote: '', author: '', category: '' })

    const quoteRequest = useCallback(() => {
        fetchRandomQuote().then((res) => setQuote(res[0]))
    }, [])

    useEffect(() => {
        if (!quote.quote) {
            quoteRequest()
        }
    }, [quote.quote, quoteRequest]);

    return (
        <div className={cls.QuoteContainer}>
            <p className={cls.quote_title}>{quote.quote}</p>
            <p className={cls.quote_subtitle}>{quote.author}</p>
            <button className={cls.button} onClick={quoteRequest}>New quote</button>
        </div>
    )
});
