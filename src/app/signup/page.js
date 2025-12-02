import Header from '@/components/Header'
import CreateAccount from '@/components/SignUp'
import TopHeader from '@/components/TopHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <TopHeader/>
      <Header/>
        <CreateAccount/>
    </div>
  )
}
