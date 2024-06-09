import { deleteImage, getMyImage } from '~/server/queries'
import { clerkClient } from '@clerk/nextjs/server'

export default async function FullImagePage(props: { photoId: string }) {
    const idAsNumber = Number(props.photoId)
    if (Number.isNaN(idAsNumber)) throw new Error('Invalid photo id')
    const image = await getMyImage(idAsNumber)
    const userInfo = await clerkClient.users.getUser(image.userId)

    return (
        <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
            <div className="flex-shrink flex-grow">
                <img
                    src={image.url}
                    className="object-contain"
                    alt={image.name}
                />
            </div>
            <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
                <div className="border-b p-2 text-center text-xl">
                    {image.name}
                </div>
                <div className="p-3">
                    <div>Created On:</div>
                    <div>{image.createdAt.toLocaleDateString()}</div>
                    <div>Uploaded by:</div>
                    <div>{userInfo.fullName}</div>
                    <form action={async ()=>{
                        "use server";
                        await deleteImage(idAsNumber)
                    }}>
                        <button
                            className="focus:outline-none 
                        text-white 
                        bg-red-700 
                        hover:bg-red-800 
                        focus:ring-4 
                        focus:ring-red-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        me-2
                        mb-2
                        dark:bg-red-600
                        dark:hover:bg-red-700
                        dark:focus:ring-red-900"
                            type="submit"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
