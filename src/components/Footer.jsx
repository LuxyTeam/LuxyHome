import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <p>
                &copy; {new Date().getFullYear()} LuxyTeam. All rights reserved.
                <span style={{ margin: '0 10px' }}>|</span>
                <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                    Privacy Policy
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
