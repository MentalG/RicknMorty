export default class RicknMortyService {

    _apiBase = 'https://rickandmortyapi.com/api'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Server status is ${res.status}`)
        }

        return await res.json()
    }

    getAllData = async (query) => {
        try {
            const res = await this.getResource(`/${query}/`)
            const data = {
                info: res.info,
                posts: []
            };
            
            for (let i = 1; i <= res.info.pages; i++) {
                const post = await fetch(`${this._apiBase}/${query}/?page=${i}`);
    
                data.posts.push(...(await post.json()).results)
            }
    
            return data
        } catch (error) {
            return error
        }
    }
}