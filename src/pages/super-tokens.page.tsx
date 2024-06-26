import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { defaultNetwork } from '../redux/networks'

// redirects the legacy url /super-tokens to the default network specific page
const SuperTokensLegacyRedirect: NextPage = () => {
  const router = useRouter()
  useEffect(() => void router.replace(`/${defaultNetwork.slugName}/supertokens`), [])

  return null
}

export default SuperTokensLegacyRedirect
