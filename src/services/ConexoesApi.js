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

export const createJob = () => {
    // const body = {
    //     title: title,
    //     description: description,
    //     price: price,
    //     paymentMethods: payment,
    //     dueDate: date
    // }
    const body = {
        title: "Back end",
        description: "Faço teu site",
        price: 50,
        paymentMethods: ["Cartão de Crédito", "Pix"],
        dueDate: "2023-12-30"
    }
    axios
    .post(`${url}/jobs`, body, auth)
    .then(() => {
        alert("Parabéns! Você agora é um ninja!")
    })
    .catch((error) => {

        console.log(error)
    })
}

export async function getAllJobs(){
    try {
        const response = await axios
        .get(`${url}/jobs`, auth)
        return response.data.jobs
    } catch (error) {
        alert(error.message)
    }
}

export const addToCart = (id) => {
    const body = {
        taken: true
    }
    axios.post(`${url}/jobs/${id}`, body, auth)
    .then(() => {        
        alert(`Adicionado ao carrinho`)
    })
    .catch(() => {
        alert('Erro ao adicionar serviço ao carrinho')
    })
}

export const removeFromCart = (id) => {
    const body = {
        taken: false
    }
    axios.post(`${url}/jobs/${id}`, body, auth)
    .then(() => {        
        alert(`Removido com sucesso`) 
    })
    .catch(() => {
        alert('Erro ao remover serviço ao carrinho')
    })
}

