import { deleteAccessToken } from '@/utils/token'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function useSignOut() {
  const router = useRouter();

  const handleSignOut = () => {
    deleteAccessToken()
    router.push('/login')
  }
  
  return {
    handleSignOut
  }
}
