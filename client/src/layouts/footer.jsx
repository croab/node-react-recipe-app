import footerStyles from "./../assets/styles/footer.module.css";


function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerLinks}>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="footer-copyright">
        By Benjamin Croad

      </div>
    </div>
  )
}

export default Footer;