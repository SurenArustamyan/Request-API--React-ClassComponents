export async function getAllData(){
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    return data
}

export async function getImage(name){
    const res = await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    const data = await res.json()
    return data
}