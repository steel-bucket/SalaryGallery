import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'

function TopNav() {
    return (
        <nav className="flex w-full justify-between items-center p-4 border-b text-white">
            <div>
                Gallery
            </div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <SignOutButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav