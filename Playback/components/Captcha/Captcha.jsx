import React from 'react'
import { View, Button } from 'react-native'

import GoogleRecaptcha, {
  GoogleRecaptchaTheme,
  GoogleRecaptchaActionName,
  GoogleRecaptchaSize,
  GoogleRecaptchaToken,
  GoogleRecaptchaRefAttributes
} from 'react-native-google-recaptcha'

const Captcha = () => {
  const recaptchaRef = React.useRef<GoogleRecaptchaRefAttributes>(null)

  const handleSend = async () => {
    try {
      const token = await recaptchaRef.current?.getToken()

      console.log('Recaptcha Token:', token)
    } catch (e) {
      console.error('Recaptcha Error:', e)
    }
  }

  return (
    <View>
      <GoogleRecaptcha
        ref={recaptchaRef}
        // size={GoogleRecaptchaSize.INVISIBLE}
        baseUrl="http://localhost:3000"
        siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      />

      <Button title="Send" onPress={handleSend} />
    </View>
  )
}

export default Captcha