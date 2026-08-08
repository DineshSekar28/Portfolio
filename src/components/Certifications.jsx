import React from 'react';

function Certifications({ data }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    const [year, month] = dateStr.split('-');
    const date = new Date(year, parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {data.map((cert) => (
            <div key={cert.id} className={`certification-card ${cert.status}`}>
              <div className="cert-logo-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/logos/${cert.logo}`}
                  alt={cert.issuer}
                  className="cert-logo"
                />
              </div>
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  {cert.status === 'planned' && (
                    <span className="cert-badge planned">Planned</span>
                  )}
                  {cert.status === 'expired' && (
                    <span className="cert-badge expired">
                      Expired {formatDate(cert.expiryDate)}
                    </span>
                  )}
                  {cert.status === 'active' && cert.date && (
                    <span className="cert-badge active">
                      Issued {formatDate(cert.date)}
                    </span>
                  )}
                </div>
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;