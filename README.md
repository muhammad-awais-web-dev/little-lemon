# Little Lemon Restaurant - React App

## 📌 Project Description  
This project is the **Capstone Project** for the **Meta Front-End Developer Professional Certificate**.  
It focuses on building a fully functional **React.js web application** for a fictional restaurant called **Little Lemon**.  

The purpose of this project is to bring together everything learned throughout the specialization — including **React fundamentals, routing, form handling, testing, accessibility, and responsive design** — into a real-world, client-focused application.  

## 👨‍💻 Author  
**Muhammad Awais**  
- Front-End Developer | Web Designer | WordPress & React Enthusiast  
- Portfolio: [https://muhammad-awais-web-dev.github.io/](https://muhammad-awais-web-dev.github.io/)  
- GitHub: [https://github.com/muhammad-awais-web-dev](https://github.com/muhammad-awais-web-dev)  
- LinkedIn: [https://www.linkedin.com/in/muhammad-awais-web-dev](https://www.linkedin.com/in/muhammad-awais-web-dev)  

## 🎯 Project Goals / Needs  
- Develop a **multi-page React application** for Little Lemon.  
- Implement **React Router** for navigation.  
- Create a **table reservation form** with validation and confirmation.  
- Ensure **accessibility and semantic HTML** standards.  
- Apply **responsive design** for mobile, tablet, and desktop.  
- Use **React Testing Library** and **Jest** for testing components.  
- Follow **best practices** in project structure and code quality.  

---

## 🛠️ Tech Stack  
- **React.js** – Front-end library for building UI  
- **React Router** – Navigation and routing  
- **Jest & React Testing Library** – Component and unit testing  
- **CSS (Modules / Plain CSS)** – Styling and responsiveness  
- **Git & GitHub** – Version control and project hosting  

---

## ⚙️ Installation & Setup  

Follow these steps to run the project locally:  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/muhammad-awais-web-dev/little-lemon-capstone.git

2. **Navigate into the project folder**  
   ```bash
   cd little-lemon

3. **Install dependencies**  
   ```bash
   npm install

4. **Run the development server**  
   ```bash
   npm start
5. **Open your browser and go to:**  
    ```
    http://localhost:3000
    ```
---

## 🚀 Project Progress

### Step 1: Setup of the Project

**Overview**  
Before building the Little Lemon React app, the project needed to be set up properly. Instead of coding everything from scratch, a boilerplate React project was initialized and cleaned up for a smooth start.  

This step also included installing helpful VS Code extensions that improve development efficiency and readability.  

**Scenario**  
The goal was to prepare the foundation for the **Reserve a Table** feature of the Little Lemon website by creating and organizing the React project structure.  

---

**Instructions Followed**

1. **VS Code Extensions Installed**
   - **ES7+ React/Redux/GraphQL/React-Native** → Provides React and JavaScript snippets.  
   - **Auto Rename Tag** → Automatically renames paired HTML/JSX tags.  
   - **Trailing Spaces** → Highlights and removes accidental whitespace.  

2. **Created the React Project**  
   ```bash
   npx create-react-app little-lemon
   cd little-lemon
---

### Step 2: First Commit

**Overview**  
After setting up and cleaning the React project in Step 1, the next step was to make the **first commit** and push the changes to the GitHub repository. This ensures the project setup is properly tracked with version control, making it easier to manage progress and collaborate if needed.  

---

**Scenario**  
As development of the Little Lemon React app progresses, every change needs to be committed and pushed to GitHub. This helps in:  
- Keeping a history of project updates  
- Allowing others (or future me) to view and collaborate on the code  
- Providing a backup of the work in case of local issues  

---

**Instructions Followed**

1. **Saved All Updates**  
   - Ensured all modified files were saved in VS Code.  

2. **Staged and Committed Changes**  
   ```bash
   git add --all
   git commit -m "Simplify boilerplate app – removed logo and cleaned App.js"

3. **Pushed Changes to GitHub**  
   ```bash
   git push

4. **Verified on GitHub**
 - Navigated to the Little Lemon repo
 - Confirmed that the new commit appeared in the history with the proper message.

 ---

### Step 3: Created Wireframe

**Overview**  
Before jumping into coding the UI, the homepage and reserve-a-table flow of the Little Lemon website were **wireframed in Figma**. Wireframes act like digital blueprints, focusing on structure and user experience before adding colors, images, or branding.  

This step ensured that the navigation, layout, and core features of the app were mapped out clearly.  

---

**Scenario**  
The Little Lemon website was missing a clear **Reserve a Table** feature. To solve this, the homepage wireframe was created with a dedicated button and proper navigation to highlight this option. Other sections were also planned to ensure a professional and user-friendly structure.  

---

**Instructions Followed**

1. **Client’s Requirements Identified**  
   - About Little Lemon  
   - Highlights and specials  
   - Descriptions and photos of dishes  
   - Navigation bar  
   - Footer  
   - Testimonials  

2. **Created Frame and Grid in Figma**  
   - Frame size: **1440 × 2900 px**  
   - Added a **12-column layout grid**  
   - Created content block placeholders for each section  

3. **Designed Navigation Bar Block**  
   - Logo placeholder  
   - Links: *Home, About, Menu, Reservations, Order Online, Login*  

4. **Designed Hero Section Block**  
   - Title: “Little Lemon”  
   - Location & short description  
   - CTA button: **Book a Table Online**  

5. **Designed Highlights Section**  
   - Weekly specials (dish name, description, price, image)  
   - Horizontal scroll for more dishes  
   - “Order Online” button  

6. **Designed Testimonials Section**  
   - Review placeholders with ratings (out of 5)  
   - Separate background for distinction  

7. **Designed About Section**  
   - Text placeholder for description  
   - Image placeholders for restaurant visuals  

8. **Designed Footer Section**  
   - Logo  
   - Doormat navigation links  
   - Contact details  
   - Social media links  

---

![WireFrame Screenshot](./public/Wireframe.webp)

✅ At this stage, the **homepage wireframe** and layout for key pages are complete in Figma.  
This provides a strong foundation to start designing the actual UI and ensures that the **Reserve a Table** feature is properly integrated into the flow.  

## Step 4: Select Occasion Component (Figma)

### Overview  
In this step, I designed a **dropdown component** in Figma that allows users to select an occasion (such as **Birthday, Engagement, Anniversary**) when reserving a table. This enhances the user experience by enabling the restaurant to prepare for special events and improves personalization.  

### Process  
1. **Created Base Component**  
   - Rectangle (400w x 80h) with rounded corners and drop shadow.  
   - Added placeholder text (“Select Occasion”), an icon, and a chevron (arrow) to indicate dropdown functionality.  

2. **Created Dropdown Options**  
   - Designed variants for different states: default (idle), open list, and selected options (Birthday, Engagement, Anniversary).  
   - Applied styles: background `#EDEFEE`, selected state `#495E57` with white text.  

3. **Prototyping & Animation**  
   - Used **Smart Animate** for smooth transitions between idle, dropdown open, and selected states.  
   - Connected all variants for interactive flow:
     - Idle → Dropdown → Option Selected → Back to Idle.  

### Screenshots / Prototype  
![Figma Component](./public/Select%20Occation.webp)

---
## Step 5: Style Guidelines

### Overview  
To maintain consistency in branding and UI design, I created the **Little Lemon Style Guide**.  
This includes **logos, typography, color palettes, and photography rules** that ensure a professional and unified look across the application.

### Logos  
- **Primary Logos**: Green and yellow logos (icon + wordmark).  
- **Monochrome Logos**: White on green or green on white, used only when primary colors cannot be applied.  
- **Icons**: Lemon icons for simplified branding.  

### Typography  
- **Headlines** → `Markazi Text Medium`  
  - Used for titles and section headers.  
  - Sentence case, same point size as headlines.  

- **Paragraphs** → `Karla Regular`  
  - Used for body text.  
  - 65% of headline size.  

### Color Palette  
**Primary Colors**  
- Green → `#495E57`  
- Yellow → `#F4CE14`

**Secondary Colors**  
- Peach → `#EE9972`  
- Light Pink → `#FBDABB`

**Highlight Colors**  
- Light Gray → `#EDEFEE`  
- Dark Gray → `#333333`

### Photography Guidelines  
- **Assets**: Use casual, simple restaurant images.  
- **Product Shots**: Food photography should feel warm and inviting.  
- **Do’s**: Natural light, environment/dishes photography.  
- **Don’ts**: Avoid overly stylized studio shots.  

---

![Style Guide](./public/Ui%20kit.webp)

✅ With the style guide finalized, the Little Lemon React app now has a clear design language.  
This will guide the **UI development phase** to ensure that the branding and visuals match the restaurant’s identity.

## Step 6: Applying Style Guidelines to Wireframe

### Overview  
After creating the wireframe, the next step was to **apply the style guidelines** (colors, typography, and branding) to bring the design closer to the final look of the Little Lemon website.  

This ensured that the wireframe not only had a functional layout but also reflected the restaurant’s **brand identity**.  

---

### Finished Design Screenshot  
![Styled Page](./public/Wireframe-%20with%20Guidelines.webp)

✅ At this stage, the homepage design is now styled according to the official Little Lemon brand guidelines.

## Step 7: Wireframes & Styled Wireframes for Other Pages  

### Overview  
After finalizing the homepage, the next step was to design **wireframes and styled versions** for the remaining key pages: **About Us, Menu, and Reservation**.  
This ensured that each page followed the same **layout structure, style guidelines, and brand identity** established earlier.  

---

### Screenshots  
**Wireframes (Structure)**  
![Other Pages Wireframes](./public/Other%20Wireframes.webp)  

**Styled Wireframes (With Guidelines Applied)**  
![Other Pages Styled](./public/Other%20Styled%20Wireframes.webp)  

✅ Now, all main pages have both wireframes and styled wireframes ready for development.

---

## Step 8: Starting the Development Phase  

### Overview  
With all wireframes and style guidelines finalized, the project officially entered the **development phase**.  
The goal was to transform the **Figma designs** into a real, functional **React.js application**, while maintaining clean code, semantic HTML, and reusable component structures.  

---  

### Scenario  
The homepage and other pages were carefully broken down into **smaller components**, ensuring that the app could be easily maintained, updated, and scaled.  
This modular approach makes it easier to apply consistent styles and logic across the project.  

✅ Development officially kicked off with a focus on setting up **semantic structure** and **core reusable components**.  

---

## Step 9: Building Semantic Tag Structure  

### Overview  
To ensure **accessibility, SEO, and semantic clarity**, the project was structured using **semantic HTML5 tags** inside React components.  

---  

### Semantic Structure Applied  

- `<header>` → Contains logo and navigation links.  
- `<main>` → Core content for each page (hero, highlights, reservations, etc.).  
- `<section>` → Divided major parts (hero, testimonials, about, etc.).  
- `<article>` → Used for individual content blocks (special dishes, reviews).  
- `<footer>` → Contact information, navigation, and social media links.  

✅ This semantic foundation improves both **readability** and **usability** for assistive technologies.  

---

## Step 10: Creating Reusable Components  

### Overview  
To follow **best practices in React development**, the project components were designed to be **modular and reusable**.  
This not only reduces code duplication but also ensures consistency across different pages.  

---

### Components Created  

#### a) **Header**  
- **Static Component** → Includes logo and navigation links.  
- **Structure**: `<header>` with `<nav>` and `<ul>` for accessibility.  
- Always stays at the top across all pages.  

#### b) **Footer**  
- **Static Component** → Contains contact details, doormat navigation, and social links.  
- Placed inside `<footer>` for semantic structure.  

#### c) **AfterHeader**  
- **Dynamic Component** → Displays the section that comes **immediately after the header** (e.g., hero banner).  
- **Managed via props** → Title, description, CTA button text can be customized depending on the page.  

#### d) **BeforeFooter**  
- **Dynamic Component** → Section that appears **just before the footer** (e.g., testimonials, promotions).  
- **Managed via props** → Flexible design for adding content blocks depending on the page’s needs.  

✅ By splitting the UI this way, the **Header** and **Footer** remain **static**, while **AfterHeader** and **BeforeFooter** are **flexible components** that adapt to each page via props.  

---

(Screenshot)
![Preview of Header-AfterHeader-BeforeFooter-Footer](./public/Header-AfterHeader-BeforeFooter-Footer.webp)

---

👉 At this stage, the app now has:  
- A **clean semantic structure**  
- **Core reusable components** ready for expansion  
- A foundation for building out the **page-specific sections**  
