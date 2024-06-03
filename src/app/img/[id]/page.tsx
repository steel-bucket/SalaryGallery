// import { Modal } from './modal';

import { getMyImage } from '~/server/queries'

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}) {
    const photoIdNum = Number(photoId)
    if (Number.isNaN(photoIdNum)) throw new Error("Invalid Photo ID")
    const image = await getMyImage(photoIdNum)
    return <div><img src={image.url} alt="image" className="w-96" /></div>
}
