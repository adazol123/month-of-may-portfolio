import styles from '../../styles/Cover.module.css'
import Typical from 'react-typical'
import { typewriter } from './typingData'


export const Cover = (params) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.heading_wrapper}>
                    <div className={styles.heading_title}>
                        <div className={styles.heading_one}>
                            <Typical 
                                steps={['HELLO, IM DANIEL', 1000 ]}
                                loop={1}
                                wrapper='div'
                            />
                        </div>
                        <div className={styles.heading_two}>
                            <div>I'M A</div> 
                            <Typical 
                                steps={typewriter} 
                                loop={Infinity}
                                wrapper='div' />
                        </div>
                        <div className={styles.heading_content}>
                        Wanna be a software engineer with background in computer hardware. I am currently working  with React JS, Next JS, Node JS, Figma Design and Blender for 3D graphics objects.
                        </div>
                        <button className={styles.cover_button}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            <div id='webgl' className={styles.background}>
                 sdsadsa

            </div>
        </div>
    )
}
