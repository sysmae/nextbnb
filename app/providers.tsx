'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children?: React.ReactNode
}

const queryClient = new QueryClient()

export const NextProvider = ({ children }: Props) => {
  return <>{children}</>
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <SessionProvider>
        <Navbar />
        <div className="mt-20 p-10 min-h-[80vh]">{children}</div>
        <Footer />
      </SessionProvider>
    </>
  )
}
