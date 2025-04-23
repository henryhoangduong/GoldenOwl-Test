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
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return []
}

const getOverall = async () => {
  try {
    const result = await axiosClient.get(`analytic/overall`)
    if (result) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

const getBestStudentsGroupA = async () => {
  try {
    const result = await axiosClient.get(`analytic/best-students-group-a`)
    if (result) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return []
}

const getSubjectPerformance = async () => {
  try {
    const result = await axiosClient.get(`analytic/subject-performance`)
    if (result) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return {}
}

const getScoreDistributionBySubject = async (subject: string) => {
  try {
    const result = await axiosClient.get(`analytic/subject-score-distibution/${subject}`)
    if (result) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return []
}
export {
  getResultByStudentSBD,
  getOverall,
  getBestStudentsGroupA,
  getSubjectPerformance,
  getScoreDistributionBySubject
}
