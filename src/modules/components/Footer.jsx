import '../../assets/stylesheets/Footer.css';

import githubIcon from '../../assets/media/icons/GitHub-mark-white.svg'

export default function Footer() {
    return <footer>
        <a href="https://github.com/Dur4nt3/memory_project" className="footer-link">
            <img src={githubIcon} alt="This project's github repository" />
        </a>
    </footer>
}