# Bridget Hernandez - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing Bridget Hernandez's professional journey in accounting and audit.

## Features

- **Professional Biography**: Comprehensive introduction with career goals and values
- **Professional Persona Evolution**: Detailed analysis of communication style, core values, and professional development
- **Portfolio Section**: Academic projects, coursework, and technical skills showcase
- **Resume Page**: Complete professional resume with downloadable PDF option
- **Contact Form**: Interactive contact form with multiple connection options
- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bridget-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

To create an optimized production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
bridget-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with navigation and footer
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles and Tailwind utilities
│   │   ├── professional-persona/   # Professional Persona page
│   │   ├── portfolio/              # Portfolio page
│   │   ├── resume/                 # Resume page
│   │   └── contact/                # Contact page
│   └── components/
│       ├── Navigation.tsx          # Main navigation component
│       └── Footer.tsx              # Footer component
├── public/                         # Static assets (add images here)
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization Guide

### Adding Your Profile Image

1. Add your profile image to the `public` folder (e.g., `public/profile.jpg`)
2. Update the image section in `src/app/page.tsx`:

```tsx
<Image 
  src="/profile.jpg" 
  alt="Bridget Hernandez"
  fill
  className="object-cover"
/>
```

### Updating Contact Information

Update the following files with your actual contact information:
- `src/app/contact/page.tsx` - Email, phone, location
- `src/components/Footer.tsx` - Social media links
- `src/app/resume/page.tsx` - Resume contact details

### Updating LinkedIn URL

Replace `https://www.linkedin.com/in/bridget-hernandez` with your actual LinkedIn profile URL throughout the site.

### Adding Resume PDF

1. Add your resume PDF to the `public` folder (e.g., `public/resume.pdf`)
2. Update the download button in `src/app/resume/page.tsx`:

```tsx
<a href="/resume.pdf" download className="btn-primary">
  <FaDownload /> Download PDF
</a>
```

### Customizing Colors

Modify the color scheme in `tailwind.config.js` by updating the primary color values.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Pages Overview

### Home (`/`)
- Hero section with profile image
- Professional biography
- Core values and skills
- Professional goals
- Call-to-action sections

### Professional Persona (`/professional-persona`)
- Introduction to professional reputation importance
- Three developmental foundations:
  1. Communication Style
  2. Core Values
  3. Adaptability & Collaboration
- Each foundation includes identity, reputation, evidence, and alignment strategy
- Conclusion with key takeaways and next steps

### Portfolio (`/portfolio`)
- Technical skills overview
- Academic projects with detailed descriptions
- Relevant coursework
- Professional development activities

### Resume (`/resume`)
- Complete professional resume
- Downloadable PDF option
- Professional summary, education, experience, skills, and certifications

### Contact (`/contact`)
- Contact form with subject selection
- Contact information display
- LinkedIn connection option
- Response time expectations

## License

This project is created for Bridget Hernandez's professional portfolio.

## Support

For questions or issues, please contact bridget.hernandez@example.com
