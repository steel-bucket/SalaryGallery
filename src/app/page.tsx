import { db } from '~/server/db'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export const dynamic = 'force-dynamic'

async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    })

    return (
        <div className="flex flex-wrap gap-3">
            {
                [...images, ...images, ...images].map((image, index) => (
                    <div key={image.id + '-' + index} className="w-48">
                        <img src={image.url} />
                        <div>{image.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default async function HomePage() {

    return (
        <main className="">
            <SignedOut>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl text-center text-cyan-200">Welcome to Salary Gallery</h1>
                    <p className="text-1xl text-center text-cyan-200">Sign in to view images</p>
                </div>
            </SignedOut>
            <SignedIn>
                <Images />
            </SignedIn>
        </main>
    )
}
