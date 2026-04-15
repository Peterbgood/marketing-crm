# Nexus CRM: Pipeline Manager

A modern, responsive Sales CRM interface designed for high-velocity deal tracking. This project focuses on a clean developer experience using **Tailwind CSS v4** and a modular **React component architecture**.

🚀 **[View Live Demo](https://peterbgood.github.io/marketing-crm/)**

## 🛠️ Tech Stack
* **React 18** (TypeScript)
* **Vite** (Next-gen frontend tooling)
* **Tailwind CSS v4** (Using the new @theme engine)
* **GitHub Actions** (Automated CI/CD Pipeline)

## ✨ Key Features
* **Kanban Pipeline:** Dynamic deal stages (Discovery, Qualification, etc.) with automated deal counting.
* **Type Safety:** Robust TypeScript interfaces for Deal data and Stage management.
* **Modular Architecture:** Separated concerns across `Sidebar`, `Header`, `KanbanBoard`, and `DealCard` components.
* **Automated Deployment:** Fully configured GitHub Actions workflow that builds and deploys to GitHub Pages on every push to `main`.

## 📂 Project Structure
```bash
src/
├── components/
│   ├── Sidebar.tsx      # Sidebar navigation with active states
│   ├── Header.tsx       # Search and action bar
│   ├── KanbanBoard.tsx  # Stage logic and column mapping
│   └── DealCard.tsx     # Reusable deal visualization
├── App.tsx              # Main layout shell
└── index.css            # Tailwind v4 configuration & theme variables
