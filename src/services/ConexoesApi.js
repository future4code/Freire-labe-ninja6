import axios from "axios";

export const url = "https://labeninjas.herokuapp.com"
export const auth = {
    headers: {
        Authorization: "2d0b7f1b-74aa-42c3-8a4b-c6e3484a4904"
    }
}

// export const getAllJobs = () => {
//     axios.get(`${url}/jobs`, auth)
//     .then((res) => {
//         return res.data.jobs
        
//     })
//     .catch((err) => {
//         alert('Erro ao carregar os serviços')
//     })
// }

export async function getAllJobs(){
    try {
        const response = await axios
        .get(`${url}/jobs`, auth)
        return response.data.jobs
    } catch (error) {
        alert(error.message)
    }
}

