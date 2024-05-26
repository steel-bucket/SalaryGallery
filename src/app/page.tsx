import { db } from '~/server/db'

export const dynamic = 'force-dynamic'


export default async function HomePage() {
    const posts = await db.query.posts.findMany()

    return (
        <main className="">
            <div className="flex flex-wrap gap-3">

                {
                    [...posts, ...posts, ...posts].map((image, index) => (
                        <div key={image.id + '-' + index} className="w-48">
                            <img src={image.url} />
                            <div>{image.name}</div>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}
