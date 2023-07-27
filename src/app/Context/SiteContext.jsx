'use client'
import { createContext, useEffect } from 'react'
import services from '../../../public/Services.json'
import projects from '../../../public/Projects.json'

const SiteContext = createContext()

export const SiteContextProvider =({children})=>
{
  return(
        <SiteContext.Provider 
            value={{
                services,
                projects
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}
// const services = 

export default SiteContext