import styles from '../../routes/Feed.css'
import Moon from '../../assets/feed/moon.svg'
import Exit from '../../assets/feed/Exit.svg'
import Free from '../../assets/feed/free.svg'
import Settings from '../../assets/feed/Settings.svg'
import User from '../../assets/feed/User.svg'

export default function Userdropdown() {
    return (
        <div>
            <div className={styles.drop}>
                <div>
                    <h3>Logged in as</h3>
                    <h4>@salti.lens</h4>
                    <div className={styles.border}>
                        <div>
                            <img src={Free} alt='' height={20} width={20} />
                            BREAKING FREE
                            </div>
                    </div>
                    <h2>
                        <img src={User} alt='' height={20} width={20} />
                        Your Profile</h2>
                    <h2>
                        <img src={Settings} alt='' height={20} width={20} />
                        Settings</h2>
                    <h2>
                        <img src={Exit} alt='' height={20} width={20} />
                        Logout</h2>
                    <div className={styles.border2}>
                        <div>
                            <img src={Moon} alt='' height={20} width={20} />
                            Dark mode
                            </div>
                    </div>
                    <h6>V0.0.0</h6>
                </div>
            </div>

        </div>
    )
}