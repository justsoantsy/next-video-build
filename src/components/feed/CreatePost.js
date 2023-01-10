import styles from '../../routes/Feed.css'
import Bold from '../../assets/feed/bold.svg'
import Italics from '../../assets/feed/italic.svg'
import Codesvg from '../../assets/feed/code.svg'
import Cancel from '../../assets/feed/Cancel.svg'
import ShareGroup from '../../assets/feed/ShareGroup.svg'
import AddDocu from '../../assets/feed/AddDocument.svg'
import AddGif from '../../assets/feed/AddGif.svg'
import AddPhoto from '../../assets/feed/AddPhoto.svg'
import Write from '../../assets/feed/Edit.svg'
import { useState } from 'react'


export default function CreatePost() {
    const [show, setShow] = useState(true)

    const handleShow = () => {
        setShow(false)
    }
    if (show === false) {
        return null
    }
    else {

        return (
            <div className={styles.PostBody}>
                <div className={styles.component}>
                    <span className={styles.span}>
                        <h4>CREATE A POST</h4>
                        <img src={Cancel} alt='' height={15} width={15} onClick={handleShow} />
                    </span>
                    <div className={styles.icons}>
                        <img src={Bold} alt='' height={22} width={22} />
                        <img src={Italics} alt='' height={22} width={22} />
                        <img src={Codesvg} alt='' height={21} width={21} />
                        <h5>Beta</h5>
                    </div>
                    <div className={styles.write}>
                        <textarea type='textarea' rows={5}
                            cols={5} placeholder='Write your text here...' />
                    </div>
                    <div className={styles.PostWith}>
                        <img src={AddPhoto} alt='' height={20} width={20} />
                        <img src={AddGif} alt='' height={20} width={20} />
                        <img src={AddDocu} alt='' height={20} width={20} />
                        <img src={ShareGroup} alt='' height={20} width={20} />

                        <h6>
                            <img src={Write} alt='' height={20} width={20} />
                            Post</h6>
                    </div>
                </div>
            </div>
        )
    }
}