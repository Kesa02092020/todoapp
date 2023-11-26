"use client";
import React from 'react'
import Cartitem from './cartitem'
import {ContextProvider } from './context'

export default function Cart() {
    return (
        <ContextProvider>
            <main>
                <Cartitem />
            </main>
        </ContextProvider>
        
    )
}
