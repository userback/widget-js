import UserbackWidget, { UserbackOptions } from '@userback/widget'

const token = (import.meta as any)?.env.VITE_UB_TOKEN
const domain = (import.meta as any)?.env.VITE_UB_DOMAIN

const options: UserbackOptions = {
  domain,
  name: "Gavin Belson",
  after_send: (data) => {
    console.log(`Feedback recieved: ${data.email}`)
  }
}

UserbackWidget(token, options).then((userback) => {
  console.log('🚀 Widget Loaded', userback)
})
