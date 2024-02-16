'use client'
import React, {useEffect} from 'react'
import { Header, SideNav } from '.'
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setError } from '@/store/user';

const Dashboard = ({children}: Readonly<{children: React.ReactNode}>) => {

  const { isAuthenticated, isError } = useSelector((state: any) => state.user)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(()=>{
    if (!isAuthenticated) {
      router.replace('/login')
      if(isError === ''){
        dispatch(setError('You are not authorized, Login to access Dashboard'))
      }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    
    <div className=' p-0 m-0 h-full flex flex-col'>
        <Header/>
        <div className=' flex h-full w-full overflow-y-auto'>
            <SideNav/>
            <div className= 'box-border relative flex flex-col flex-start items-start w-full max-w-full bg-white pt-8 pr-7 pb-4 pl-9'>{children}</div>
        </div>
    </div>
  )
}

export default Dashboard