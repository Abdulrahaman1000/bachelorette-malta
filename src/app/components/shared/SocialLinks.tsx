export default function SocialLinks() {
    const socialLinks = [
      { icon: 'facebook-f', url: 'https://facebook.com/' },
      { icon: 'instagram', url: 'https://instagram.com/' },
      { icon: 'twitter', url: 'https://twitter.com/' },
      { icon: 'tiktok', url: 'https://tiktok.com/' },
    ];
  
    return (
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.icon}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition duration-300"
            aria-label={`Follow us on ${social.icon}`}
          >
            <i className={`fab fa-${social.icon}`}></i>
          </a>
        ))}
      </div>
    );
  }