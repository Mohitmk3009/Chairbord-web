"use client";
import React from 'react'
import LoadingIndicator from './src/components/LoadingIndicator';

const loading = () => {
    return (
        <div className='h-screen w-screen font-bold text-7xl flex items-center justify-center'>
            <LoadingIndicator />
        </div>
    )
}

export default loading