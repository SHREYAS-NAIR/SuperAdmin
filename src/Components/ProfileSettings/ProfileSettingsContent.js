import React from 'react'
import './ProfileSettingsContent.css'
import seperator from '../../Pics/seperator.png'
import UserDescription from './UserDescription'
import UserInformation from './UserInformation'

function ProfileSettingsContent() {
  return (
    <div className='ProfileSettingsContent'>
        <UserDescription/>
        <div className='Seperator'><img src={seperator} alt='Not Found'></img></div>
        <UserInformation/>
    </div>
  )
}

export default ProfileSettingsContent