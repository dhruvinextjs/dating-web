import Header from '@/components/Header'
import LoginSection from '@/components/LoginSection'
import TopHeader from '@/components/TopHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <TopHeader/>
      <Header/>
        <LoginSection/>
    </div>
  )
}
