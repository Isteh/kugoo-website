'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

const TanstackProvider: FC<PropsWithChildren> = ({ children }) => {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}

export default TanstackProvider