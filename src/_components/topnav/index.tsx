'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'
import { Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from 'next/link'


function TopNav() {
    const router = useRouter()
    const { theme, setTheme } = useTheme()

    return (
        <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
            <button
                onClick={() => {
                    router.push('/')
                }}
            >
                Gallery
            </button>
            <div className="flex flex-row items-center gap-4">
                <div className="ml-4 flex lg:ml-0">
                    <button
                        onClick={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }}
                    >
                        <Moon className="h-10 w-10" />
                    </button>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={() => {
                            router.refresh()
                        }}
                        className="mx-auto"
                    />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav
