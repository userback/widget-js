import UserbackWidget from '@userback.io/widget-js'

UserbackWidget('1|1|mMtJD7dcQrg8I3tjOcKW61PDe', {
  domain: 'userback.io.local'
}).then((userback) => {
  console.log('Widget Loaded', userback)
})
