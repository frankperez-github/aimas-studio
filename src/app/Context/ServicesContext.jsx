'use client'
import { createContext, useEffect } from 'react'
import services from '../../../public/Services.json'

const ServicesContext = createContext()

export const ServicesContextProvider =({children})=>
{
  return(
        <ServicesContext.Provider 
            value={{
                services
            }}
        >
            {children}
        </ServicesContext.Provider>
    )
}
// const services = 

export default ServicesContext