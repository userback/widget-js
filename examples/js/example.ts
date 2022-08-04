import UserbackWidget from '@userback/widget'

const token = (import.meta as any)?.env.VITE_UB_TOKEN
const domain = (import.meta as any)?.env.VITE_UB_DOMAIN

UserbackWidget(token, { domain }).then((userback) => {
  console.log('🚀 Widget Loaded', userback)
})
