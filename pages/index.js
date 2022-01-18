import Head from 'next/head'
import Image from 'next/image'
import Chat  from './components/home/Chat'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { ReplyProvider } from "./context/reply-context"
export default function Home() {
  const { data: session } = useSession()
  if (true) {
    return (
      <>
      <ReplyProvider>
      <Chat />
      </ReplyProvider>
      {/*  Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>*/}
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
