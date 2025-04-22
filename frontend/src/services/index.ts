import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
const getResultByStudentSBD = async (sbd: string) => {
  try {
    const result = await axiosClient.get(`result/${sbd}`)
    if (result) {
      console.log(result)
    }
  } catch (error) {
    console.log(error)
  }
}

export { getResultByStudentSBD }
