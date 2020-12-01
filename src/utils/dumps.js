export const dumpEpisode = ({ data }) => {
  return data.posts?.map((item) => {
    return {
      name: item.name,
      episode: item.episode,
      air_date: item.air_date,
    };
  });
};

export const dumpCharacter = ({ data }) => {
  return data.posts?.map((item) => {
    return {
      name: item.name,
      status: item.status,
      species: item.species,
      image: item.image,
      gender: item.gender,
    };
  });
};

export const dumpLocation = ({ data }) => {
  return data.posts?.map((item) => {
    return {
      name: item.name,
      type: item.type,
      dimension: item.dimension,
    };
  });
};

export const dumpTitle = (data) => {
  return data.map((title) => (title.charAt(0).toUpperCase() + title.slice(1)).split('_').join(' '));
};
