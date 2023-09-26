export const getDogBreeds = async ():Promise<string[]> => (
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response: Response) => response
            .json()
            .then(
                (response:  {message: Object}) => 
                Object.getOwnPropertyNames(response.message)
            )
        )
)

