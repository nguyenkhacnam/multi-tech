import axios from 'axios'
import { http } from '../utils/http'

export const getStudents = async (page, limit) => {
  try {
    const res = await http.get('students', {
      params: {
        _page: page,
        _limit: limit
      }
    })
    return res
  } catch (error) {
    console.log('err', error.message)
    throw error
  }
}
