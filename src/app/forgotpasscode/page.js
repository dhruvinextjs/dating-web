import ForgotPasscode from '@/components/ForgotPasscode'
import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <TopHeader/>
      <Header/>
        <ForgotPasscode/>
    </div>
  )
}
