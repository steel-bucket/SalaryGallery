import {db} from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
    "https://utfs.io/f/f476978c-039c-47b8-b55d-a2ac24c5cc58-1wb414.avif",
    "https://utfs.io/f/d907478a-0e04-4e3a-8632-351da21c1dc8-bkvfhx.avif",
    "https://utfs.io/f/f0afd3bc-3355-44ad-9b29-e14cc5aaf44b-o0xo9b.jpg",
    "https://utfs.io/f/6f28ec06-d622-4d80-92c9-309c0ffa9b66-vto92j.avif"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}))


export default async function HomePage() {
    const posts = await db.query.posts.findMany();
    console.log(posts);

    return (
        <main className="">
            <div className="flex flex-wrap gap-3">
                {posts.map((post) => (
                    <div key={post.id} className="w-48">
                        {post.name}
                    </div>
                ))}
                {
                    [...mockImages, ...mockImages, ...mockImages,].map((image, index) => (
                        <div key={image.id + "-" + index} className="w-48">
                            <img src={image.url}/>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}
