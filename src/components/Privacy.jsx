import { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const style = {
        h1: { fontSize: '2.5rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
        h2: { fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' },
        p: { marginBottom: '1rem', color: '#9ca3af' },
        ul: { marginBottom: '1rem', paddingLeft: '1.5rem', color: '#9ca3af' },
        li: { marginBottom: '0.5rem' },
        section: { marginBottom: '2rem' }
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <div className="glass-card" style={{ padding: '3rem' }}>
                    <h1 style={style.h1}>Privacy Policy</h1>
                    <p style={style.p}>Last updated: {new Date().toLocaleDateString()}</p>

                    <div style={style.section}>
                        <p style={style.p}>
                            At LuxyTeam ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by LuxyTeam.
                        </p>
                        <p style={style.p}>
                            This specific page is designed to comply with privacy standards, including those required for Meta (Facebook/Instagram) Platform developers.
                        </p>
                    </div>

                    <div style={style.section}>
                        <h2 style={style.h2}>1. Information We Collect</h2>
                        <p style={style.p}>We collect information to provide better services to all our users. This may include:</p>
                        <ul style={style.ul}>
                            <li style={style.li}><strong>Information you give us:</strong> For example, when you sign up for an account, we may ask for personal information like your name, email address, or telephone number.</li>
                            <li style={style.li}><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them. This includes:
                                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                                    <li style={style.li}>Device information</li>
                                    <li style={style.li}>Log information</li>
                                    <li style={style.li}>Location information</li>
                                    <li style={style.li}>Unique application numbers</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div style={style.section}>
                        <h2 style={style.h2}>2. How We Use Information</h2>
                        <p style={style.p}>
                            We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect LuxyTeam and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
                        </p>
                    </div>

                    <div style={style.section}>
                        <h2 style={style.h2}>3. Information We Share</h2>
                        <p style={style.p}>
                            We do not share personal information with companies, organizations and individuals outside of LuxyTeam unless one of the following circumstances applies:
                        </p>
                        <ul style={style.ul}>
                            <li style={style.li}><strong>With your consent:</strong> We will share personal information with companies, organizations or individuals outside of LuxyTeam when we have your consent to do so.</li>
                            <li style={style.li}><strong>For external processing:</strong> We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.</li>
                            <li style={style.li}><strong>For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
                        </ul>
                    </div>

                    <div style={style.section}>
                        <h2 style={style.h2}>4. Data Deletion</h2>
                        <p style={style.p}>
                            Users may request the deletion of their personal data by contacting us at contact@luxyteam.com. We will process such requests in accordance with applicable laws.
                        </p>
                    </div>

                    <div style={style.section}>
                        <h2 style={style.h2}>5. Contact Us</h2>
                        <p style={style.p}>
                            If you have any questions about this Privacy Policy, please contact us at: imfelix409@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
