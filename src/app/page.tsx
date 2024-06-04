import { SignedIn, SignedOut } from '@clerk/nextjs'
import { getMyImages } from '~/server/queries'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function Images() {
    const images = await getMyImages()
    return (
        <div className="flex flex-wrap gap-3 p-4">
            {[
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
                ...images,
            ].map((image, index) => (
                <div key={image.id + '-' + index} className="w-72 justify-center">
                    <Link href={`/img/${image.id}`}>
                        <Image
                            src={image.url}
                            style={{ objectFit: 'contain' }}
                            width={480}
                            height={480}
                            alt={image.name}
                        />
                        <div>{image.name}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default async function HomePage() {
    return (
        <main className="">
            <SignedOut>
                <div className="flex flex-col gap-4 bg-transparent">
                    <h1 className="text-4xl text-center text-cyan-200">
                        Welcome to Salary Gallery
                    </h1>
                    <p className="text-1xl text-center text-cyan-200">
                        Sign in to view images
                    </p>
                </div>
            </SignedOut>
            <SignedIn>
                <Images />
            </SignedIn>
        </main>
    )
}
