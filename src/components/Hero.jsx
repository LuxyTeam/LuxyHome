import { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            position: 'relative'
        }}>
            <div style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out'
            }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    marginBottom: '1rem',
                    letterSpacing: '-2px'
                }}>
                    <span className="text-gradient">LuxyTeam</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Innovating digital experiences.
                </p>

                <a
                    href="https://instagram.com/im.felix409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '1rem 2rem',
                        gap: '10px',
                        fontSize: '1.1rem',
                        fontWeight: '600'
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    @im.felix409
                </a>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                animation: 'bounce 2s infinite'
            }}>
                <span style={{ fontSize: '2rem', opacity: 0.5 }}>↓</span>
            </div>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
        </section>
    );
};

export default Hero;
