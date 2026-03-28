const Footer = () => {
  return (
    <div className="pt-16">
      <div className="footerTitle container mx-auto pb-8 text-center space-y-3 border-b-2">
        <h2 className="text-4xl font-bold">Gadgetix</h2>
        <p className="">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <footer className="footer text-black md:justify-around p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product</a>
          <a className="link link-hover">Tracking</a>
          <a className="link link-hover">Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
