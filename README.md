# School Website

A modern, responsive school homepage built with HTML5, CSS3, and JavaScript. This website showcases school information, news, events, and provides a contact form for inquiries.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Pages**: Home, About, News & Events, and Contact pages
- **Navigation Menu**: Sticky navbar with active page highlighting
- **Contact Form**: Functional contact form with validation
- **Modern Styling**: Clean, professional design with smooth transitions
- **Event Calendar**: Display of upcoming school events
- **Staff Directory**: Information about school administration
- **News Section**: Latest school announcements and updates

## Project Structure

```
School-Website101/
├── index.html           # Home page
├── about.html           # About school page
├── news.html            # News and events page
├── contact.html         # Contact form page
├── css/
│   └── styles.css       # Stylesheet for all pages
├── js/
│   └── script.js        # JavaScript for interactivity
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML/CSS/JavaScript

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/School-Website101.git
cd School-Website101
```

2. Open the website in your browser:
   - Simply double-click `index.html`, or
   - Use a local server (recommended for development):
     ```bash
     python -m http.server 8000
     ```
   - Then visit `http://localhost:8000` in your browser

## Usage

### Customization

1. **Update School Information**:
   - Replace "School Name" with your actual school name
   - Update contact information in `contact.html`
   - Modify addresses, phone numbers, and emails

2. **Add Content**:
   - Edit the announcement section in `index.html`
   - Add events to `news.html`
   - Update staff information in `about.html`

3. **Customize Styling**:
   - Modify colors in `css/styles.css`:
     ```css
     :root {
         --primary-color: #2c3e50;
         --secondary-color: #e74c3c;
         --accent-color: #3498db;
     }
     ```

4. **Add Functionality**:
   - Enhance scripts in `js/script.js`
   - Form submissions currently log to console
   - Integrate with a backend service for email functionality

## Pages Overview

### Home Page (index.html)
- Welcome hero section
- Featured programs overview
- Latest announcements

### About Page (about.html)
- School mission and history
- Core values
- Administration staff directory

### News & Events (news.html)
- Upcoming events with dates
- Latest news articles
- Event details and information

### Contact Page (contact.html)
- Contact form with validation
- School contact information
- Department contact details
- Office hours

## Features Breakdown

### Navigation
- Sticky navigation bar that remains at the top while scrolling
- Active page highlighting
- Responsive mobile menu (ready for enhancement)

### Forms
- Contact form with client-side validation
- Email validation
- Required field checking
- Success/error message display

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Grid and flexbox layouts
- Touch-friendly buttons

## JavaScript Features

- **Form Validation**: Checks all required fields and email format
- **Navigation Highlighting**: Automatically highlights current page in menu
- **Navigation Links**: Smooth handling of internal navigation
- **Console Logging**: Useful for debugging

## Future Enhancements

- Add image assets and photo galleries
- Implement email backend for contact form
- Add student/staff login portal
- Create blog system for news
- Add calendar integration for events
- Implement search functionality
- Add accessibility features (ARIA labels, keyboard navigation)
- Create CMS integration for easy content management

## Browser Support

- Chrome/Chromium: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions

## Deployment

### Option 1: GitHub Pages
1. Push repository to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be available at `https://username.github.io/School-Website101`

### Option 2: Traditional Hosting
- Upload files to your web server via FTP
- Ensure all file paths are correct
- Test all links and forms

## Customization Guide

### Adding Images
Create an `assets/images/` folder and reference images in HTML:
```html
<img src="assets/images/school-photo.jpg" alt="School building">
```

### Adding Icons
Consider using Font Awesome or similar icon library:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

### Email Form Integration
Replace the console.log in `js/script.js` with a backend call (e.g., using Formspree, SendGrid, or your own backend).

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue on GitHub or contact the development team.

## Contributors

- School Website Development Team

---

**Last Updated**: August 2026
