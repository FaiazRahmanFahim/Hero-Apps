# Hero-App 🚀

A modern, responsive web application showcasing a comprehensive app store interface built with React and Vite. Hero-App provides users with an intuitive platform to discover, explore, and learn about various mobile applications across different categories.

## 📱 About This Project

Hero-App is a sleek app showcase website that displays a curated collection of popular mobile applications. Users can browse through different apps, view detailed information including ratings, download counts, reviews, and comprehensive descriptions. The platform offers a user-friendly interface similar to modern app stores.

## ✨ Features

- **App Discovery**: Browse through a diverse collection of mobile applications
- **Detailed App Information**: View comprehensive details including:
  - App ratings and reviews
  - Download statistics
  - App size and details information
  - Detailed descriptions and features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth navigation
- **Search & Filter**: Easy app discovery with filtering capabilities
- **Installation Tracking**: Track and manage app installations
- **Error Handling**: Robust error pages and user feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14 with DaisyUI 5.1.27
- **Routing**: React Router 7.9.3
- **Icons**: Lucide React 0.545.0
- **Charts**: Recharts 3.2.1
- **Notifications**: React Toastify 11.0.5

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hero-apps
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production

## 📁 Project Structure

```
hero-apps/
├── public/                 # Static assets and data files
│   ├── AllAppsData.json   # App data for the showcase
│   └── HomePageData.json  # Homepage content data
├── src/
│   ├── components/        # Reusable React components
│   │   ├── AllApps/      # App listing components
│   │   ├── Banner/       # Homepage banner
│   │   ├── Footer/       # Site footer
│   │   ├── Header/       # Navigation header
│   │   └── ...
│   ├── Pages/            # Main page components
│   │   ├── Home/         # Homepage
│   │   ├── ErrorPage/    # Error handling
│   │   └── NotFound/     # 404 page
│   ├── Routes/           # Application routing
│   ├── assets/           # Images and static assets
│   └── utility/          # Helper functions
└── dist/                 # Production build output
```

