const ProjectCard = ({ title, description, tags, delay }) => (
  <div
    className="glass-card"
    style={{
      padding: '2rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      animation: `fadeInUp 0.8s ease-out forwards ${delay}s`,
      opacity: 0,
      transform: 'translateY(20px)'
    }}
  >
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} className="text-gradient">
      {title}
    </h3>
    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
      {description}
    </p>
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {tags.map((tag, i) => (
        <span key={i} style={{
          fontSize: '0.8rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.1)',
          color: 'var(--color-text-main)'
        }}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "LuxyBOT",
      description: "A powerful, modular WhatsApp bot designed for seamless automation and community engagement.",
      tags: ["Node.js", "WhatsApp API", "Automation"]
    },
    {
      title: "LuxyAPI",
      description: "High-performance API infrastructure serving media processing and utility endpoints.",
      tags: ["TypeScript", "Rest API", "Backend"]
    },
    {
      title: "Geopiedritas",
      description: "Interactive educational platform for exploring geological formations and rock types.",
      tags: ["School Project", "Education", "Interactive"]
    },
    {
      title: "Geocomposicion",
      description: "Visual composition tool demonstrating geological structures and layers.",
      tags: ["School Project", "Geology", "Visualization"]
    },
    {
      title: "Metamorphicrocks",
      description: "Detailed guide to metamorphic rocks, their formation, and classification.",
      tags: ["School Project", "Science", "Research"]
    },
    {
      title: "More Coming Soon",
      description: "Constantly building and innovating. Stay tuned for future releases.",
      tags: ["Future", "Innovation"]
    }
  ];

  return (
    <section style={{ padding: '4rem 2rem', minHeight: '80vh' }} className="container">
      <h2 style={{
        fontSize: '2.5rem',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        Featured <span className="text-gradient">Projects</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} delay={idx * 0.2} />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
        opacity: 1;
        transform: translateY(0);
    }
}
`}</style>
    </section>
  );
};

export default Projects;
