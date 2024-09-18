export interface fetchRandomQuoteInterface {
    quote: string;
    author: string;
    category: string;
}

export async function fetchRandomQuote<T extends fetchRandomQuoteInterface[]>(): Promise<T>{
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
            { headers: {'X-Api-Key': 'zOBf/rtNXLjZm2OXCYVsWA==vaDAzcskmTNWdfzh'} })

        if (!response.ok) {
            throw new Error(`${response.status}`)
        }

        return await response.json() as Promise<T>
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message)
        }
        return [{quote: '', category: '', author: ""}] as T
    }
}