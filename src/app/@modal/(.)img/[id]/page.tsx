import FullImagePage from '~/_components/full-image-page'
import { Modal } from '~/app/@modal/(.)img/[id]/modal'

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}) {
    const photoIdNum = Number(photoId)
    if (Number.isNaN(photoIdNum)) throw new Error('Invalid Photo ID')
    return (
        <Modal>
            <FullImagePage id={photoIdNum} />
        </Modal>
    )
}
