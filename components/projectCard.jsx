import { Fade, Reveal } from 'react-awesome-reveal';
import styles from '../styles/Home.module.css'


const ProjectCard = ({projects}) => {

    const portfolioCard = projects.map((item) => {
        return (
          <Fade className={styles.revealCard} key={item.id} timingFunction='ease-in-out' >
          <div key={item.id} className={styles.projectsContainer}>
            <h2 className={styles.projectTtitle}>{item.name}</h2>
            <div className={styles.cardBody}>
              <p>{item.description}</p>
              <a target="_blank" rel="noreferrer" className={styles.link} href={item.link} >
                <button className={styles.projectBtn}>View</button>
              </a>
            </div>
          </div>
          </Fade>
        )
      })

    return (
        <>{portfolioCard}</>
    )
};

export default ProjectCard;


