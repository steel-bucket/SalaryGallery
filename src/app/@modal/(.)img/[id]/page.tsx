import FullImagePage from '~/_components/full-image-page'
import { Modal } from '~/app/@modal/(.)img/[id]/modal'

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string }
}) {
    return (
        <Modal>
            <FullImagePage photoId={photoId} />
        </Modal>
    )
}
