import { getMyImage } from '~/server/queries'
import Image from 'next/image'

export default async function FullImagePage(props: { id: number }) {
    const image = await getMyImage(props.id)
    return (
        <Image
            src={image.url}
            style={{ objectFit: 'contain' }}
            width={1280}
            height={720}
            alt="image"
        />
    )
}
// {
//     params: { id: photoId },
// }: {
//     params: { id: string }
// }