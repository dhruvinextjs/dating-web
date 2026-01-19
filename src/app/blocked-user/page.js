import BlockUser from '@/components/BlockedUser'
import HeaderAfterLogin from '@/components/HeaderAfterLogin'
import React from 'react'

export default function page() {
  return (
    <div>
        <HeaderAfterLogin/>
        <BlockUser/>
    </div>
  )
}
