# Aliyya's 22nd Birthday 🎉

A beautiful, interactive birthday website celebrating Aliyya's 22nd birthday with a purple cat theme. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

🌐 **Live Site**: [https://skyaerostudio.github.io/aliyya-22-birthday/](https://skyaerostudio.github.io/aliyya-22-birthday/)

## 🎂 Birthday Timeline

- **Before August 30, 2025**: Shows countdown timer only with "Something special is coming..."
- **August 30, 2025 00:00 Jakarta Time**: Full website unlocks with Indonesian gate system
- **After Gate**: Complete birthday experience with love letter, gallery, and messages

## ✨ Features

### 🔒 **Birthday Lock System**
- **Pre-Birthday**: Shows only countdown until August 30, 2025
- **Auto-Unlock**: Full site reveals automatically on birthday

### 🚪 **Interactive Indonesian Gate System**
- 3 multiple-choice questions in Indonesian
- Secure SHA-256 hash verification
- Personal questions about Aliyya

### 💜 **Full Birthday Experience** 
- **Personal Love Letter**: Heartfelt message from R
- **Real-time Countdown**: To August 30, 2025 (Jakarta timezone)
- **Photo Gallery**: Interactive gallery with custom lightbox
- **Birthday Messages**: System for friends and family messages
- **Paw Confetti**: Celebratory animation upon gate success
- **Purple Cat Theme**: Consistent branding throughout
- **Responsive Design**: Beautiful on all devices
- **Accessibility**: Focus management and reduced motion support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aliyya-22-birthday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure the gate system**
   
   The gate is pre-configured with Indonesian questions. Simply copy the environment file:
   ```bash
   cp env.example .env.local
   ```
   
   The gate questions are:
   - Q1: "siapa kucing ter gemes se dunia (warna krem)" → Answer: **Niko**
   - Q2: "babybooboo .....poopoo" → Answer: **cutie**  
   - Q3: "berapa streak tiktok kamu sama pacarmu?" → Answer: **300-500**
   
   **Note**: Gate only appears after August 30, 2025. Before that, only countdown is shown.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

### Development Bypass

During development, you can bypass both birthday lock and gate by visiting:
```
http://localhost:3000?bypass=true
```

This will show the full site regardless of date and skip the gate system.

## 🎨 Customization

### Adding Messages

Edit `content/messages.json` to add more birthday messages:

```json
{
  "id": 9,
  "from": "Friend Name",
  "message": "Your birthday message here...",
  "timestamp": "2025-08-30",
  "emoji": "🎂",
  "color": "from-blue-400 to-cyan-400"
}
```

### Adding Photos

Replace the placeholder images in the Gallery component with real photos. Update the `images` array in `app/components/Gallery.tsx`.

### Changing the Birthday Date

Update the target date in `app/components/Countdown.tsx`:

```typescript
let targetDate = new Date('2025-08-30T00:00:00+07:00').getTime()
```

### Gate Questions

The gate uses multiple choice questions in Indonesian. Modify the questions in `app/components/Gate.tsx`:

```typescript
const questions = [
  {
    question: "Your custom question?",
    options: ["Option 1", "Option 2", "Option 3"],
    correctAnswer: "Option 2"
  }
  // Add more questions...
]
```

## 📦 Building for Production

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Test the build locally**
   ```bash
   npm start
   ```

## 🚀 Deployment

### GitHub Pages (Current Deployment)

The site is automatically deployed to GitHub Pages using GitHub Actions:

🌐 **Live URL**: [https://skyaerostudio.github.io/aliyya-22-birthday/](https://skyaerostudio.github.io/aliyya-22-birthday/)

**Deployment Process:**
1. Push to `main` branch triggers automatic build
2. GitHub Actions builds and deploys to `gh-pages` branch
3. Site is live within minutes

**Required GitHub Secrets:**
- `NEXT_PUBLIC_GATE_SALT`
- `NEXT_PUBLIC_GATE_HASH_Q1`
- `NEXT_PUBLIC_GATE_HASH_Q2` 
- `NEXT_PUBLIC_GATE_HASH_Q3`

### Alternative Platforms

This static Next.js site can also be deployed to:
- Vercel
- Netlify
- Firebase Hosting
- Any static hosting service

## 🎯 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter, Poppins, Caveat
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🔒 Security

- Gate answers are hashed using SHA-256
- No sensitive data stored in client-side code
- Environment variables used for configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 🎨 Design Features

- **Purple Cat Theme**: Consistent purple gradient with cat emojis
- **Custom Color Palette**: `#B48CEC` (primary), `#9B71E8` (primary-600), `#F5EEFF` (surface), `#2A123C` (ink)
- **Glassmorphism**: Beautiful glass effect cards
- **Smooth Animations**: Framer Motion for delightful interactions
- **Typography**: Inter (body), Poppins (headings), Caveat (script)
- **Responsive Layout**: Mobile-first design
- **Accessibility**: ARIA labels, focus management, reduced motion support
- **Time-Based Reveal**: Birthday lock system for surprise factor

## 📝 License

Made with 💜 for Aliyya's 22nd Birthday

## 🎉 Birthday Details

- **Birthday**: August 30, 2025
- **Age**: 22
- **Theme**: Purple Cat
- **Timezone**: Jakarta Time (UTC+7)

## 🎊 Special Features

### 🔐 **Security & Privacy**
- Answers hashed using SHA-256 with salt
- No sensitive data in client-side code
- Environment variables for configuration

### 🌍 **Internationalization**
- Indonesian gate questions for authenticity
- Jakarta timezone for accurate countdown
- Personal cultural references

### ⏰ **Time-Based Experience**
- **Phase 1**: Countdown only (before birthday)
- **Phase 2**: Gate system (on birthday)
- **Phase 3**: Full experience (after gate)

---

🎉 **Made with 💜 for Aliyya's 22nd Birthday** 🎂✨🐱

**Live Site**: [https://skyaerostudio.github.io/aliyya-22-birthday/](https://skyaerostudio.github.io/aliyya-22-birthday/)
