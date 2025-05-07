const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm ">
          &copy; {currentYear} Muktar Ahmed Mohamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
