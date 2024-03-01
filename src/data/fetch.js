export function fetchCharacters() {
    return fetch('https://api.github.com/orgs/Adalab/repos')
        .then(response => response.json())
        .then(responseData => {
            return responseData.map((eachRepo) => {
                return {
                    id: eachRepo.id,
                    name: eachRepo.name,
                    description: eachRepo.description,
                    url: eachRepo.url,
                    image: eachRepo.owner.avatar_url,
                    language: eachRepo.language,
                };
            })
        })
}