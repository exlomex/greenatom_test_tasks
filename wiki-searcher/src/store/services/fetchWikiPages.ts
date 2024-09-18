
export async function fetchWikiPages<T extends []>(limit: number, query: string): Promise<T>{
    try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}&namespace=0`)

        if (!response.ok) {
            throw new Error(`${response.status}`)
        }

        return await response.json() as Promise<T>
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message)
        }
        return [] as T
    }
}