import axios from "axios";

const infoUrl = 'https://randomuser.me/api/';
const ageUrl = 'https://api.agify.io/'

export async function getInfo() {
    const response = await axios({
        url: infoUrl,
        method: 'GET'
    })

    return response.data;
}

export async function getAge(name) {
    const response = await axios({
        url: `${ageUrl}?name=${name}`,
        method: 'GET'
    })

    return response.data;
}