import Head from 'next/head'
import Link from 'next/link'
import * as Style from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={Style.container}>
      {children}
    </div>
  )
}