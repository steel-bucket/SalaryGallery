import FullImagePage from '~/_components/full-image-page'

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}) {
    return <FullImagePage photoId={photoId} />
}
