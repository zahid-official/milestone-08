<div align="center">

# 📱 Gadgetix

Gadgetix is a modern and responsive gadget marketplace experience where users can explore featured products, browse by category, view detailed specifications, and manage items through a cart and wishlist dashboard. With routed pages, dynamic product details, and a clean shopping-focused interface, it delivers a smooth and engaging tech browsing journey.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-9b59b6?style=for-the-badge)](https://gadgetix-world23.surge.sh/)
[![GitHub Repo](https://img.shields.io/badge/📂_Repository-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/zahid-official/milestone-08-gadgetix)

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge" alt="DaisyUI" />
<img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge" alt="Recharts" />

</div>

---

## ✨ Key Features

| Feature                     | Description                                                                                                         |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| **Category Browsing**    | Filter gadgets by category (laptops, phones, watches, earbuds) via a sidebar-driven, route-based navigation system. |
| **Product Details**      | Dedicated detail pages showing price, description, specifications, availability, and user rating.                   |
| **Cart & Wishlist**      | Add items to cart or wishlist, review them on a dedicated dashboard, and sort cart entries by price.                |
| **Purchase Flow**        | Complete purchases through a confirmation modal with real-time cost calculation.                                    |
| **Statistics Dashboard** | Visualize product data with interactive charts powered by **Recharts**.                                             |
| **Articles Page**        | Browse tech-related articles for additional content engagement.                                                     |
| **Toast Notifications**  | Instant UI feedback on user actions — adds, removes, and purchase confirmations.                                    |
| **Fully Responsive**     | Optimized layouts for mobile, tablet, and desktop devices.                                                          |
| **Dynamic Page Titles**  | SEO-friendly page titles managed with **React Helmet Async**.                                                       |

---

## 🧩 Core Concepts

### State Management
The app uses **React Context API** to manage global state across components. Five dedicated contexts handle:

| Context            | Purpose                             |
| :----------------- | :---------------------------------- |
| `TotalContext`     | Tracks the total cart cost           |
| `CartContext`      | Manages the cart item count          |
| `WishContext`      | Manages the wishlist item count      |
| `AddtoCartContext` | Stores the full cart items array     |
| `AddtoWishContext` | Stores the full wishlist items array |

### Data Persistence
Cart and wishlist data are saved to **localStorage**, so users don't lose their selections on page refresh. Utility functions in `localStorage.js` handle read/write operations.

### Data Loading Strategy
Product data is stored as a static JSON file (`public/gadgets.json`) and fetched at runtime using React Router's **loader** functions — keeping the app lightweight while enabling dynamic content rendering.

---

## ⚙️ How It Works

```
┌──────────────┐     ┌──────────────────┐     ┌───────────────────┐
│  Home Page   │────▶│  Category Filter  │────▶│  Product Details  │
│  (Featured)  │     │  (Route-Based)   │     │  (Full Specs)     │
└──────────────┘     └──────────────────┘     └───────┬───────────┘
                                                      │
                                          ┌───────────┴───────────┐
                                          ▼                       ▼
                                   ┌─────────────┐       ┌──────────────┐
                                   │  Add to Cart│       │ Add to       │
                                   │             │       │ Wishlist     │
                                   └──────┬──────┘       └──────┬───────┘
                                          │                     │
                                          ▼                     ▼
                                   ┌──────────────────────────────────┐
                                   │       Dashboard                  │
                                   │  (Cart / Wishlist / Sort / Buy)  │
                                   └──────────────────────────────────┘
```

1. **Browse** — Users land on the home page and explore featured gadget cards.
2. **Filter** — Products are filtered by category through route-based navigation (no page reload).
3. **Inspect** — Clicking _View Details_ opens a dedicated product page with full specifications.
4. **Collect** — Items can be added to the **cart** or **wishlist** from the details page.
5. **Manage** — The dashboard provides cart/wishlist review, price sorting, and a purchase flow.

---

## 🛠️ Tech Stack

| Technology                                                          |  Version   | Role                                |
| :------------------------------------------------------------------ | :--------: | :---------------------------------- |
| [React](https://react.dev/)                                         | `^18.3.1`  | Component-based UI library          |
| [Vite](https://vitejs.dev/)                                         | `^5.4.10`  | Lightning-fast dev server & bundler |
| [React Router DOM](https://reactrouter.com/)                        | `^6.27.0`  | Declarative client-side routing     |
| [Tailwind CSS](https://tailwindcss.com/)                            | `^3.4.14`  | Utility-first CSS framework         |
| [DaisyUI](https://daisyui.com/)                                     | `^4.12.14` | Tailwind CSS component library      |
| [Recharts](https://recharts.org/)                                   | `^2.13.3`  | Composable charting library         |
| [React Helmet Async](https://github.com/staylor/react-helmet-async) |  `^2.0.5`  | Dynamic document head management    |

---

## 📂 Project Structure

```
milestone-08/
│
├── public/                     # Public static assets
│   └── gadgets.json            # Product dataset (fetched at runtime)
│
└── src/
    ├── main.jsx                # Application entry point
    ├── Routes.jsx              # Route definitions (React Router)
    ├── Layout.jsx              # Root layout with context providers
    │
    ├── pages/                  # Routed page components
    │   ├── Home.jsx
    │   ├── Dashboard.jsx
    │   ├── Statistics.jsx
    │   └── Articles.jsx
    │
    ├── components/             # Reusable UI components
    │   ├── Navbar/
    │   ├── Footer/
    │   └── Outlet/
    │       ├── Banner/
    │       ├── Gadgets/
    │       └── DashCard/
    │
    └── assets/                 # Static assets (images, icons)
```

---

## 🗺️ Pages & Routes

| Route               | Page             | Description                                  |
| :------------------ | :--------------- | :------------------------------------------- |
| `/`                 | Home             | Landing page with featured products grid     |
| `/gadgets/:category`| Home (filtered)  | Products filtered by selected category       |
| `/details/:id`      | Product Details  | Full specifications for a single product     |
| `/dashboard`        | Dashboard        | Cart and wishlist management interface       |
| `/statistics`       | Statistics       | Interactive charts & data visualization      |
| `/article`          | Articles         | Tech-related articles and blog content       |
| `*`                 | Error Page       | Custom 404 page for unmatched routes         |

---

## 🚀 Getting Started

### Prerequisites

| Requirement                    | Minimum Version |
| :----------------------------- | :-------------- |
| [Node.js](https://nodejs.org/) | `v16+`          |
| [npm](https://www.npmjs.com/)  | `v8+`           |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/zahid-official/milestone-08-gadgetix.git

# 2. Navigate to the project directory
cd milestone-08-gadgetix

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> The terminal will display a local URL (e.g., `http://localhost:5173`). Open it in your browser to view the app.

---

## 📜 Available Scripts

| Command           | Description                                     |
| :---------------- | :---------------------------------------------- |
| `npm run dev`     | Start the Vite development server with HMR      |
| `npm run build`   | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally for testing  |
| `npm run lint`    | Run ESLint to check for code quality issues     |

---

## 🌐 Deployment

This project is deployed on **[Surge](https://surge.sh/)** for fast static hosting.

```bash
# Build the production bundle
npm run build

# Deploy to Surge (requires surge CLI)
npx surge ./dist gadgetix-world23.surge.sh
```

> The custom domain is configured via the `CNAME` file in the `public/` directory.

---

## 👤 Author

<div align="center">
  <a href="https://github.com/zahid-official">
    <img src="https://github.com/zahid-official.png" width="100" height="100" style="border-radius: 50%;" alt="Zahid Official" />
  </a>

  <h3>Zahid Official</h3>
  <p><b>Web Developer | Tech Enthusiast</b></p>

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/zahid-web)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zahid.official8@gmail.com)

<br/><br/>

<i>Building polished digital experiences with passion and purposeful design.</i>

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

---

## 📄 License

This project is open source and available for learning and personal use.

---

<p align="center"><b>Gadgetix</b><i> - Where smart shopping meets a sleek digital experience.</i></p>