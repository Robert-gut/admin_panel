import styles from './notFound.module.scss'

import {Link} from 'react-router-dom'
import Astronaut from '../../../img/NotFound/Astronaut.svg'
import star from '../../../img/NotFound/star.svg'
import rock1 from '../../../img/NotFound/rock1.svg'
import rock2 from '../../../img/NotFound/rock2.svg'

const NotFound = () => {
   return (
      <>
         <div className={styles.wraper}>
            <section className={styles.notFound}>
               <div className={styles.notFound__content}>
                  <h1>404-error</h1>
                  <h2>PAGE NOT FOUND</h2>
                  <p>Your search has ventured beyond the known universe.</p>
                  <div className={styles.btnWrap}>
                     <div className={styles.btn}>
                        <Link className={styles.link} to='/admin'>
                           Back To Home
                        </Link>
                     </div>
                  </div>
               </div>
               <div className={styles.notFound__astronaut}>
                  <img className={styles.astronaut} src={Astronaut} alt='Astronaut' />
                  <img className={styles.star1} src={star} alt='Star' />
                  <img className={styles.star2} src={star} alt='Star' />
                  <img className={styles.rock1} src={rock1} alt='Rock' />
                  <img className={styles.rock2} src={rock2} alt='Rock' />
               </div>
            </section>
         </div>
      </>
   )
}

export default NotFound
