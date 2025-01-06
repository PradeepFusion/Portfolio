import styles from './ProjectsStyles.module.css';
import travel from '../../assets/travel2.jpg';
import shop from '../../assets/shop2r.png';
import todo from '../../assets/todo2r.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={travel}
          link="https://github.com/PradeepFusion/Smart-Tourist-Guide.git"
          h3="Smart Tourist Guide"
        />
        <ProjectCard
          src={shop}
          link="https://github.com/PradeepFusion/Cart.git"
          h3="Shopping Cart System"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/PradeepFusion/ToDo-Application.git"
          h3="Todo App"
        />
      </div>
    </section>
  );
}

export default Projects;
