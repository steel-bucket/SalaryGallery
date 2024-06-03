'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'

function TopNav() {
    const router = useRouter()
    return (
        <nav className="flex w-full justify-between items-center p-4 border-b text-white">
            <div>Gallery</div>
            <div className="flex flex-row">
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
