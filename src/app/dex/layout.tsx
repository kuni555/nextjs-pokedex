import MyAppBar from '@/component/Header'


export default function DexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <MyAppBar/>
        {children}
    </>
  )
}
