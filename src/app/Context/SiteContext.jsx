'use client'
import { createContext } from 'react'
import services from '../../../public/Services.json'
import projects from '../../../public/Projects.json'
import articles from '../../../public/Articles.json'

const SiteContext = createContext()

export const SiteContextProvider =({children})=>
{
  return(
        <SiteContext.Provider 
            value={{
                services,
                projects,
                articles
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}

export default SiteContext