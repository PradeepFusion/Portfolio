import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.jpg';
import shop from '../../assets/shop2r.png';
import jsp from '../../assets/jsp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={weather}
          link="https://github.com/PradeepFusion/Weather-Application.git"
          h3="Weather Application"
        />
        <ProjectCard
          src={shop}
          link="https://github.com/PradeepFusion/Cart.git"
          h3="Shopping Cart System"
        />
        <ProjectCard
          src={jsp}
          link="https://github.com/PradeepFusion/JSPGram"
          h3="JspGram"
        />
      </div>
    </section>
  );
}

export default Projects;
