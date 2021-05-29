import styles from '../../styles/Cover.module.css'
import Typical from 'react-typical'
import { typewriter } from './typingData'
import { CanvasObject } from '../Canvas/CanvasObject'
import Link from 'next/link'


export const Cover = (params) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.heading_wrapper}>
                    <div className={styles.heading_title}>
                        <div className={styles.heading_one}>
                            <Typical 
                                steps={['HELLO, IM DANIEL.', 1000 ]}
                                loop={1}
                                wrapper='div'
                            />
                        </div>
                        <div className={styles.heading_two}>
                            <div>IM A</div>
                            <div className={styles.type}>
                                <Typical 
                                    steps={typewriter} 
                                    loop={Infinity}
                                    wrapper='div' />
                            </div>
                        </div>
                        <div className={styles.heading_content}>
                        Wanna be a software engineer with background in computer hardware. I am currently working  with React JS, Next JS, Node JS, Figma Design and Blender for 3D graphics objects.
                        </div>
                        <button className={styles.cover_button}>
                           <Link href='https://chat-box-adazolhub.web.app/'>
                           <a> Contact me </a>
                           </Link> 
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.background}>
                <CanvasObject/>
            </div>
        </div>
    )
}
