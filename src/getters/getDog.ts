export const getDogUrl = async (breed? : string):Promise<string> => {
    const url = breed ? `https://dog.ceo/api/breed/${breed}/images/random` : "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url);
    const responseBody: { message: string} = await response.json()
    return responseBody.message;
}
