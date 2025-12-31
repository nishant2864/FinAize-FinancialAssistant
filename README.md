
<div align="center">

  <!-- Typewriter Effect Title -->
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=33E6FF&center=true&vCenter=true&width=500&lines=FinAIze+-+AI+Financial+Assistant;Your+Personal+Finance+Companion;Powered+by+Next.js+%26+OpenAI" alt="Typing SVG" />
  </a>

  <p align="center">
    A futuristic, AI-powered personal financial assistant built with <b>Next.js</b>, <b>PostgreSQL</b>, and <b>OpenAI</b>.
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://github.com/nishant2864/FinAize-FinancialAssistant/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/nishant2864/FinAize-FinancialAssistant?style=for-the-badge&color=blue" alt="Contributors" />
    </a>
    <a href="https://github.com/nishant2864/FinAize-FinancialAssistant/network/members">
      <img src="https://img.shields.io/github/forks/nishant2864/FinAize-FinancialAssistant?style=for-the-badge&color=orange" alt="Forks" />
    </a>
    <a href="https://github.com/nishant2864/FinAize-FinancialAssistant/stargazers">
      <img src="https://img.shields.io/github/stars/nishant2864/FinAize-FinancialAssistant?style=for-the-badge&color=yellow" alt="Stars" />
    </a>
    <a href="https://github.com/nishant2864/FinAize-FinancialAssistant/issues">
      <img src="https://img.shields.io/github/issues/nishant2864/FinAize-FinancialAssistant?style=for-the-badge&color=red" alt="Issues" />
    </a>
    <a href="https://github.com/nishant2864/FinAize-FinancialAssistant/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/nishant2864/FinAize-FinancialAssistant?style=for-the-badge&color=green" alt="License" />
    </a>
  </p>
</div>

---

## 🚀 Features

- 📊 **Dashboard**: Track expenses, budgets, and savings goals with interactive charts.
- 🤖 **AI Chatbot**: Get personalized financial advice and insights powered by OpenAI.
- 🔐 **Secure Auth**: Custom JWT authentication with secure cookies and session management.
- 🎨 **Premium UI**: Dark mode, neon accents, and smooth animations using Tailwind CSS & ShadCN.

---

## 🛠️ Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</div>

---

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=nishant2864&show_icons=true&theme=tokyonight&hide_border=true" alt="Nishant's GitHub Stats" />
  <br/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nishant2864&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
</div>

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose

### Installation

1.  **Clone & Install Dependencies**
    ```bash
    npm install
    ```

2.  **Setup Database**
    ```bash
    docker compose up -d
    npx prisma db push
    ```

3.  **Environment Variables**
    Create a `.env` file:
    ```env
    DATABASE_URL="postgresql://postgres:password@localhost:5432/finaize?schema=public"
    NEXTAUTH_SECRET="your-secret"
    OPENAI_API_KEY="sk-..."
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure
- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components.
- `src/lib`: Utilities (DB, Auth, AI helpers).
- `prisma`: Database schema.

## 📄 License
[MIT](LICENSE)
