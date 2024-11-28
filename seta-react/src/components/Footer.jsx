import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Assuming you will create a CSS file for styling

function footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Nós contate</h3>
                    <p>Email: Seta@gmail.com</p>
                    <p>Phone: (19) 98766-7080</p>
                </div>
                <div className="social-media">
                    <h3>Nos siga</h3>
                    <a href="https://instagram.com/thiagougouvea" target="_blank" rel="noopener noreferrer" className='link'>
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    {/* Add more social media links as needed */}
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
                <div className="additional-links">
                    <a href="/privacy-policy" className='link'>Privacy Policy</a>
                    <a href="/terms-of-service" className='link'>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default footer;
