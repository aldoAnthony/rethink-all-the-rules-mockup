const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Rethink ALL<br />
              <span className="text-accent">the Rules</span>
            </h3>
            <p className="text-primary-foreground/80">
              Transforming leaders and organizations through innovative coaching and revolutionary thinking.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Executive Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Career Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Team Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Books</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Podcasts</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Free Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Rethink ALL the Rules. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;