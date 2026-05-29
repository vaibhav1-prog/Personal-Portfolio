<div align="center">

<img src="public/vb-logo.svg" width="80" height="80" alt="VB Logo" />

# Vaibhav Baishkhiyar — Personal Portfolio

**Full Stack Developer | MERN Stack | React.js | Node.js**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-20B2A6?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio-url.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vaibhav-baishkhiyar108/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vaibhav1-prog)

</div>

---

## 📸 Preview

> Add a screenshot of your portfolio here after deployment:
> `![Portfolio Preview](public/projects/preview.png)`

---

## ✨ Features

- 🎨 **Modern UI** — Dark theme with glass morphism, teal accents, and smooth animations
- ⌨️ **Typing Animation** — Dynamic role text cycling on the hero section
- 📱 **Fully Responsive** — Mobile-first design, works on all screen sizes
- 🔤 **Big Name Hero** — Large bold name display inspired by modern portfolio trends
- 💼 **Projects Section** — TeamSync, CineBook, HireIQ with live links and GitHub
- 🧠 **Skills Section** — Animated skill bars across Frontend, Backend, Database & Tools
- 🎓 **About + Education** — Stats grid (10+ projects, MERN, B.Tech, 2026) and GGSIPU card
- 🏆 **Achievements** — Academic, DSA, hackathons, and certifications carousel
- 📬 **Contact Form** — EmailJS powered with Name, Email, Subject, and Message fields
- 🪙 **VB Favicon** — Custom purple circle logo in the browser tab
- ⬇️ **CV Download** — Resume download button in the navbar

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React.js 19, Vite, Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Email** | EmailJS |
| **Deployment** | Vercel |
| **Package Manager** | npm |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/vaibhav1-prog/your-portfolio-repo.git
cd your-portfolio-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project:

```bash
cp .env.example .env
```

Then fill in your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these from [emailjs.com](https://www.emailjs.com/) → Free account → Email Services + Templates

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
vaibhav-portfolio/
├── public/
│   └── projects/
│       
├── src/
│   ├── components/
│   ├── layout/
│   ├── sections/
│   │   ├── Hero.jsx             # Big name + typing animation
│   │   ├── About.jsx            # Bio + education + stats grid
│   │   ├── Projects.jsx         # TeamSync, CineBook, HireIQ
│   │   ├── Skills.jsx           # Skill bars by category
│   │   ├── Testimonials.jsx     # Achievements carousel
│   │   └── Contact.jsx          # EmailJS form with subject field
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── index.html
├── package.json
└── vite.config.js
```

# Initialize git (if not done already)
git init

# Add all files
git add .

# First commit
git commit -m "🚀 Initial commit — Personal portfolio"

# Create repo on github.com, then:
git remote add origin https://github.com/vaibhav1-prog/your-repo-name.git

# Push to GitHub
git push -u origin main
```

> ⚠️ Make sure `.env` is in your `.gitignore` so your EmailJS keys aren't exposed publicly.

### Verify .gitignore includes:

```
.env
node_modules/
dist/
```

---

## 🔧 Customization Guide

| What to change | Where |
|---|---|
| Name, bio, description | `src/sections/Hero.jsx`, `src/sections/About.jsx` |
| Projects (title, links, tags) | `src/sections/Projects.jsx` |
| Skills & proficiency % | `src/sections/Skills.jsx` |
| Contact info (email, phone) | `src/sections/Contact.jsx` |
| Social links (GitHub, LinkedIn) | `src/sections/Hero.jsx`, `src/layout/Footer.jsx` |
| Profile photo | `public/profile-photo.jpg` |
| Resume PDF | `public/Vaibhav_Baishkhiyar_Resume.pdf` |
| Project screenshots | `public/projects/*.png` |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by **Vaibhav Baishkhiyar** 

⭐ Star this repo if you found it helpful!

</div>
