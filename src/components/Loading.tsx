import React from 'react'
import LottieView from 'lottie-react-native'

import physiotherapyJson from '../../assets/physiotherapy.json'

export function Loading() : JSX.Element {
  return <LottieView loop autoPlay speed={1} source={physiotherapyJson} />
}