import request from '@/utils/request.js'

const contactInfo = {
  getContactInfo () {
    return request.get('/contact')
  }
}


export default contactInfo