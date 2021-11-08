import { getApiKey } from './apiKey'

export const getProducts = async (restUrl: string, query: string): Promise<any> => {
    const mainUrl = 'https://api.spoonacular.com/food/'

    const requestHeaders: HeadersInit = {
        'Content-Type': 'application/json',
    }

    const data = await fetch(`${mainUrl+restUrl}?apiKey=${getApiKey()}&query=${query}`, {
        headers: requestHeaders
    })
    return data.json()
}   