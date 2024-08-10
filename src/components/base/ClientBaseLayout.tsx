'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC } from "react";


type Props = {
    children: React.ReactNode;
}


export const ClientBaseLayout:FC<Props> = ({ children }) => {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>

        {children}
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
};