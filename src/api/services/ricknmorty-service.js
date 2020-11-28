export default class RicknMortyService {

    _apiBase = 'https://rickandmortyapi.com/api'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Server status is ${res.status}`)
        }

        return await res.json()
    }

    getAllData = async () => {
        const response = await this.getResource(`/character/`)
        const { info } = response;
        console.log(info.pages);

        return response
    }
}