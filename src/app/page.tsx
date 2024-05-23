import Link from "next/link";

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


export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {
                    [...mockImages,...mockImages,...mockImages,].map((image) => (
                        <div key={image.id} className="w-48">
                            <img src={image.url} />
                        </div>
                    ))
                }
            </div>
        </main>
    );
}
