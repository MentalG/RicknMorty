export const dumpEpisode = ({data}) => {
    return (
        data.posts?.map(item => {
            return ({
                name: item.name,
                episode: item.episode,
                air_date: item.air_date
            })
        })
    )
}

export const dumpCharacter = ({data}) => {
    return (
        data.posts?.map(item => {
            return ({
                name: item.name,
                status: item.status,
                species: item.species,
                image: item.image,
                gender: item.gender
            })
        })
    )
}