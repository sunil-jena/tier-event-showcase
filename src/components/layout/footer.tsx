import { CalendarDays, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Events', href: '/events' },
      { name: 'Support', href: '#support' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:contact@tierevents.com', icon: Mail },
  ];

  return (
    <footer className='border-t bg-black text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='h-8 w-8 rounded-lg gradient-primary flex items-center justify-center'>
                <CalendarDays className='h-5 w-5 text-white' />
              </div>
              <span className='font-bold text-xl'>TierEvents</span>
            </div>
            <p className='text-sm text-foreground'>
              Discover tier-based events tailored to your professional growth.
              Connect, learn, and advance your career with curated experiences.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className='text-foreground hover:text-primary transition-smooth'
                  aria-label={social.name}
                >
                  <social.icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Product</h3>
            <ul className='space-y-2'>
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-sm text-foreground hover:text-foreground transition-smooth'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-sm text-foreground hover:text-foreground transition-smooth'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-sm text-foreground hover:text-foreground transition-smooth'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
            <p className='text-sm text-foreground'>
              © {currentYear} TierEvents. All rights reserved.
            </p>
            <p className='text-sm text-foreground'>
              Built with ❤️ for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
