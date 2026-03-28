# 📱 Gadgetix

**Gadgetix** is a modern and responsive gadget marketplace experience where users can explore featured products, browse by category, view detailed specifications, and manage items through a cart and wishlist dashboard. With routed pages, dynamic product details, and a clean shopping-focused interface, it delivers a smooth and engaging tech browsing journey.

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge" alt="Responsive Design" />
</div>

## 🔗 Quick Links

- **Live Website:** [gadgetix-world23.surge.sh](https://gadgetix-world23.surge.sh/)

## 🏆 Features of Gadgetix

- **Category-Based Browsing:** Explore gadgets by category, including laptops, phones, watches, and earbuds through a sidebar-driven browsing experience.
- **Detailed Product Pages:** View complete product details such as price, description, specifications, availability, and rating before making a decision.
- **Cart and Wishlist Dashboard:** Manage saved items through a dedicated dashboard with separate cart and wishlist views.
- **Sorting and Purchase Flow:** Sort cart items by price and complete the purchase flow through a confirmation modal.
- **Multi-Page Experience:** Navigate through Home, Details, Dashboard, Statistics, and Articles pages using React Router.
- **Responsive Interface:** Enjoy a layout designed to work smoothly across mobile, tablet, and desktop devices.

## 🎯 Core Mechanics

- **Dynamic Product Loading:** Gadget data is loaded from `gadgets.json` and rendered dynamically across category and details pages.
- **Route-Based Filtering:** Category routes update the visible products without reloading the page.
- **Shared App State:** Cart count, wishlist count, selected items, and total cost are managed through React Context.
- **Interactive Product Actions:** Users can add items to cart, add products to wishlist, and review them inside the dashboard.
- **Real-Time UI Feedback:** Toast notifications and button states help users understand the result of key actions instantly.

## 🛠️ Technologies Used

| Technology | Version | Purpose |
| :--- | :---: | :--- |
| **React** | `^18.3.1` | Component-based UI development |
| **JavaScript** | `ES6+` | Application logic and interactivity |
| **Vite** | `^5.4.10` | Dev server and build tooling |
| **React Router DOM** | `^6.27.0` | Client-side routing |
| **Tailwind CSS** | `^3.4.14` | Utility-first styling |
| **DaisyUI** | `^4.12.14` | UI components |
| **React Helmet Async** | `^2.0.5` | Dynamic page titles |
| **React Icons** | `^5.3.0` | Icon support |

## ⚙️ How It Works

1. Users land on the home page and browse featured gadget cards
2. Products can be filtered by category through route-based navigation
3. Clicking `View Details` opens a dedicated product details page
4. Items can be added to the cart or wishlist from the details page
5. The dashboard lets users review cart and wishlist items, sort cart entries, and complete a purchase flow

## 📂 Project Structure

```bash
milestone-08/
├── README.md                # Project documentation
├── app-react/               # Main React application
│   ├── package.json         # App dependencies and scripts
│   ├── public/              # Public assets and data
│   │   ├── gadgets.json     # Gadget dataset
│   │   └── CNAME            # Surge deployment domain
│   └── src/                 # Application source code
│       ├── main.jsx         # React entry point
│       ├── Routes.jsx       # Application routes
│       ├── Layout.jsx       # Shared layout and context providers
│       ├── pages/           # Main routed pages
│       └── components/      # Reusable UI components
└── package.json             # Root-level dependency configuration
```

## 📋 Prerequisites

- **Node.js** and **npm** installed on your machine
- A modern browser for local development preview

## 🚀 Getting Started

```bash
cd app-react
npm install
npm run dev
```

Open the local development server shown in the terminal to view the project in your browser.

## 📜 Available Scripts

Run these commands from the `app-react` directory:

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## 🌟 Author

<div align="center">
  <a href="https://github.com/zahid-official">
    <img src="https://github.com/zahid-official.png" width="100" height="100" style="border-radius: 50%;" alt="Zahid Official" />
  </a>

  <h3>Zahid Official</h3>
  <p><b>Web Developer | Tech Enthusiast</b></p>

  <a href="https://github.com/zahid-official">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/zahid-web">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:zahid.official8@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>

  <p>Building polished digital experiences with passion and purposeful design</p>
</div>

## 🤝 Contributing

Contributions make the project better for everyone. If you would like to improve **Gadgetix**, your contributions are always welcome.

```bash
1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
```

<p align="center"><b>Gadgetix</b><i> - Where smart shopping meets a sleek digital experience.</i></p>
