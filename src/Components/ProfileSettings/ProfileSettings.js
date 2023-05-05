import React from 'react'
import'./ProfileSettings.css'
import ProfileSettingsContent from './ProfileSettingsContent'

function ProfileSettings() {
  return (
    <div className='ProfileSettingsPage'>
      <div className='profileSettingsHeading' style={{caretColor: "transparent"}}><label>PROFILE SETTINGS</label></div>
      <ProfileSettingsContent/>
    </div>
  )
}

export default ProfileSettings