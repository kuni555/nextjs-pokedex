'use client'
import MyAppBar from '@/component/Header'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'


export default function DexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Provider store={store}>
        <MyAppBar/>
        {children}
        </Provider>
    </>
  )
}
