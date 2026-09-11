# 🚀 DevStack
 
**DevStack** is a modern, technology-based web application built to help developers explore, organize, and interact with essential dev tools and resources — all through a clean, responsive, and user-friendly interface.
 
---
 
## 🛠️ Built With
 
- ⚛️ **React.js** — Component-based UI library for building fast, interactive interfaces
- 🔷 **TypeScript** — Type-safe JavaScript for more reliable and maintainable code
- 🎨 **Tailwind CSS** — Utility-first CSS framework for rapid, responsive styling
- 🌼 **DaisyUI** — Beautiful, pre-built Tailwind CSS components
- 🔔 **React Toastify** — Elegant, customizable toast notifications
- 🔣 **React Icons** — Popular icon packs available as easy-to-use React components
---

## 🧩 Features
 
### 🧭 Navbar
A sticky navigation bar that stays fixed at the top while scrolling.
- **Brand logo + "Dev Stack" name** → clicking it takes the user back to the Home page.
- **Nav links (Home, Technologies, Projects, About, Contact)** → each link scrolls or navigates to its matching section/page.
- **"Sign In" button** → opens the sign-in flow for existing users.
- **"Sign Up" button (filled pill)** → opens the registration flow for new users.
### 🍔 Mobile Navbar
On smaller screens, the navbar collapses into a compact layout.
- **Hamburger icon** → toggles open/close of the mobile menu, revealing the nav links.
- **Brand logo (center)** → same as desktop, links back to Home.
- **Sign In / Sign Up buttons** → same functionality as desktop, just repositioned for mobile.
### 🎯 Banner / Hero
The landing section that introduces the product.
- **"Explore Technologies" button (gradient)** → scrolls/navigates the user down to the Technology Cards section so they can start browsing.
- **"Learn More" button (outlined)** → takes the user to more detailed info about DevStack (e.g. About section).
- Heading, description, and banner image are purely visual/informational — no interaction.
### 🃏 Technology Cards
Each card represents one technology and shows its icon, badge, name, description, category, difficulty, and star rating.
- **"Add to Stack" button** → adds that specific technology into the user's personal "Your Stack" list.
  - If the technology is **already added**, clicking it again shows a **warning alert** (duplicates aren't allowed).
  - Once successfully added, the button becomes **disabled** and its text changes to **"✓ Added to Stack"**, so the user gets clear visual confirmation.
### 🧰 Your Stack (Sidebar)
A live-updating panel that shows everything the user has picked.
- **Selected count in the heading** (e.g. "2 Technology Selected") → automatically updates whenever an item is added or removed.
- **Empty state message** → shown by default when no technology has been added yet, guiding the user to start adding.
- **Remove (✕) button on each item** → removes only that specific technology from the stack.
- **"Remove All" button** → instantly clears every item from the stack in one click, resetting the panel back to its empty state.
### 🦶 Footer
- **Social links (GitHub, Twitter, LinkedIn)** → open the respective social profiles in a new tab.
- **Product / Company / Legal link groups** → each link navigates to its corresponding page (e.g. Pricing, About Us, Terms).
- **Privacy & Terms links (bottom bar)** → open the legal/policy pages.
---

## Answer React questions 
***1. What is JSX, and why is it used in React?***

- JSX is a syntax extension for JavaScript.JSX stands for JavaScript XML. It lets you write HTML-like code inside JavaScript. React uses it because it makes UI code easy to read and write.

***2. What is the difference between props and state?***

- Props come from the parent and cannot be changed. State lives inside the component and can be changed with useState.

***3. What does useState do, and where did you use it?***

- useState stores a value and re-renders the UI when it changes. I used it to store JSON items and a loading items in my project.

***4. What does useEffect do, and why needed for JSON?***

- useEffect runs side effects like fetching data after render. I used it to load JSON data and save it into state.

***5. Why does every .map() item need a unique key?***

- React uses the key to identify which item changed or removed. Without a unique key, React gets confused and the UI can break.

***6. What is conditional rendering? Give an example.***

- Conditional rendering shows different UI based on a condition. Example: if the list is empty, show "Stack is empty", else show the items.

***7. How do you pass data parent → child and child → parent?***

- Parent to child: pass data using props. Child to parent: parent passes a callback function, child calls it to send data back.
---

## 📦 Getting Started
 
### Prerequisites
Make sure you have **Node.js** and **npm** (or **yarn**) installed on your machine.
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/aminulislamdev/DevStack.git
 
# Navigate to the project directory
cd devstack
 
# Install dependencies
npm install
 
# Run the development server
npm run dev
```
 
The app will be running at `http://localhost:5173` (or the port shown in your terminal).
 
---
 
## 📁 Project Structure
 
```
devStack/
├── src/
│   ├── components/
│   ├── types/
│   ├── assets/
│   ├── main.tsx
│   ├── index.css
│   └── App.tsx
├── public/
├── package.json
└── README.md
```
 
---
 
## 🌐 Live Demo
 
🔗 [https://devstack-ph-s.vercel.app/](https://devstack-ph-s.vercel.app/)
 
---
 
## 🤝 Contributing
 
Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues) if you'd like to contribute.
 
---
 
## 📄 License
 
This project is licensed under the **MIT License**.
 
---
 
## 👨‍💻 Author
 
Made with ❤️ using React, TypeScript & Tailwind CSS.