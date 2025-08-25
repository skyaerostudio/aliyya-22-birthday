# Aliyya's 22nd Birthday 🎉

A beautiful, interactive birthday website celebrating Aliyya's 22nd birthday with a purple cat theme. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Interactive Gate System**: Answer 3 questions to enter the celebration
- **Countdown Timer**: Real-time countdown to the birthday (August 30, 2025)
- **Love Letter**: Heartfelt message with expandable wishes
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **Birthday Messages**: Messages from friends and family
- **Paw Confetti**: Celebratory animation upon entering
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
   - Q3: "berapa streak tiktok kamu sama pacarmu?" → Answer: **300–500**

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

### Development Bypass

During development, you can bypass the gate by visiting:
```
http://localhost:3000?bypass=true
```

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

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a static Next.js site that can be deployed to:
- Netlify
- GitHub Pages  
- Firebase Hosting
- Any static hosting service

Just run `npm run build` and deploy the `out` folder.

## 🎯 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter, Poppins
- **Deployment**: Vercel

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
- **Glassmorphism**: Beautiful glass effect cards
- **Smooth Animations**: Framer Motion for delightful interactions
- **Responsive Layout**: Mobile-first design
- **Accessibility**: ARIA labels, focus management, reduced motion support

## 📝 License

Made with 💜 for Aliyya's 22nd Birthday

## 🎉 Birthday Details

- **Birthday**: August 30, 2025
- **Age**: 22
- **Theme**: Purple Cat
- **Timezone**: Jakarta Time (UTC+7)

---

Happy Birthday Aliyya! 🎂✨🐱💜
