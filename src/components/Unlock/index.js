// Write your code here
import {useState} from 'react'

import {MainCont, Head, Button, Image} from './styledComponents'

const Unlock = () => {
  const [status, backGround] = useState(true)

  const onChangeStatus = () => {
    backGround(prevState => !prevState)
  }

  return (
    <MainCont>
      <Image
        src={
          status
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={status ? 'lock' : 'unlock'}
      />
      <Head>Your Device Is {status ? 'Locked' : 'UnLocked'}</Head>
      <Button onClick={onChangeStatus}>{status ? 'UnLock' : 'Lock'}</Button>
    </MainCont>
  )
}

export default Unlock
