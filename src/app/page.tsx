import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/bfdb9c42-cf07-4af7-ba93-b5f0276f619a-492wi6.jpg",
    "https://utfs.io/f/f98a7327-a9b4-4329-9945-113cb710748c-g390hq.jpg",
    "https://utfs.io/f/f0afd3bc-3355-44ad-9b29-e14cc5aaf44b-o0xo9b.jpg",
    "https://utfs.io/f/69433c90-9d40-48d1-b77c-e0268809ced8-dfw51g.jpg"
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
                    mockImages.map((image) => (
                        <div key={image.id} className="w-48">
                            <img src={image.url} alt="image"/>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}
