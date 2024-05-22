import GoogleRecaptcha, {
	// Enums
	GoogleRecaptchaSize, // Size enum: such GoogleRecaptchaSize.INVISIBLE
	GoogleRecaptchaTheme, // Theme enum: such GoogleRecaptchaTheme.DARK
	GoogleRecaptchaActionName, // Action name enum: such GoogleRecaptchaActionName.LOGIN
	DEFAULT_GSTATIC_DOMAIN,
	DEFAULT_RECAPTCHA_DOMAIN,
	// Types (only typescript)
	GoogleRecaptchaToken,
	GoogleRecaptchaProps,
	GoogleRecaptchaBaseProps,
	GoogleRecaptchaRefAttributes
} from 'react-native-google-recaptcha'

import React from 'react'
import { View, Button } from 'react-native'

import GoogleRecaptcha, {
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