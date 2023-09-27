import { DogResponse } from "../models/dogResponse"

export const getDogUrl = (breed? : string):Promise<DogResponse> => {
    const url = breed ? `https://dog.ceo/api/breed/${breed}/images/random` : "https://dog.ceo/api/breeds/image/random"
    return fetch(url).then(
        (response: Response) => response
            .json()
    )
}
