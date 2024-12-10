# 🛠️ Work in progress

Curently in beta test.

---

## 🖥️ eBrief Portfolio / Resume SPA Template

A sleek and lightweight single-page application template built with **TypeScript**, **Next.js**, **TailwindCSS**, and **shadcn**. Designed to help digital professionals save time by providing an elegant, ready-to-use portfolio or resume showcase that is **easy to customize** and **ready to deploy**.

---

## 🌟 **Features**

- **Latest Technology**: Powered by TypeScript, Next.js, TailwindCSS, and shadcn for clean, modern development practices.
- **Professional Design**: Elegant, light-colored styling suitable for professionals in any industry.
- **Lightweight Assets**: Optimized for fast loading with lightweight elements.
- **Responsive & Mobile-First**: Seamless experience across desktops, and mobile devices.
- **Clear & Upgradeable Code**: Modular and maintainable structure, designed with developers in mind.
- **Easy Customization**: All user content is defined in JSON files for simple edits without touching the codebase.
- **Vercel-Ready Deployment**: Quickly deploy with just a few clicks to Vercel.

---

## 🛠️ **Installation**

### **Prerequisites**

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or later)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (optional)

## 💡 **Usage**

- Update the JSON files in the `/src/information-on-page` folder to modify content like your bio, resume, or projects. The 01-main, 02-aboutMe, and 03-resume are required;
- change colors in `/src/app/globals.css` lines 5-15;
- images, icons, and other assets are stored in `/public/images/hero-image.jpg`, if you want to change them, you need to change the paths in the JSON files. Path to asset must look like this: `/images/hero-image.jpg`;
- Preview your changes locally with `npm run dev` before deploying updates.

---

### **Steps**

1.  **Clone or Download the Repository**:

    Open your terminal, navigate to your preferred directory and clone the repository from GitHub:

    ```bash
    git clone https://github.com/aykyiv/ebrief-elegant-portfolio-resume.git
    cd ebrief-elegant-portfolio-resume

    ```

    or download it as a [ZIP file](https://github.com/aykyiv/ebrief-elegant-portfolio-resume/archive/refs/heads/main.zip).
    Extract the contents to your desired directory and using your terminal, navigate to the project directory for the next steps.

2.  **Install Dependencies**:

    Using your terminal, navigate to the project directory and run:

    ```bash
    npm install

    ```

3.  **Edit Your Personal Data**:
    Update the following JSON files in the `/page-information` folder with your details: - `01-main.json` - `02-aboutMe.json` - `03-resume.json` - `04-portfolio.json` - `05-articles.json`
    Example for `01-main.json`:

        ```json
        {
          "name": "David Rivers",
          "title": "Game Developer & Pixel Artist",
          "subtitle": "Passionate about building intuitive and responsive web interfaces."
        }

        ```

4.  **Run the Application Locally**:

    ```bash
    npm run dev

    ```

    Access the local site at `http://localhost:3000` to preview your changes.

5.  **Build for Production**:

    ```bash
    npm run build

    ```

    Verify everything works as expected before deployment.

---

## 🚀 **Deployment to Vercel**

To deploy your template using [Vercel](https://vercel.com/):

1. **Login to Vercel**:
   - Create an account or log in at [vercel.com](https://vercel.com/).
2. **Import the Project**:
   - Click "New Project" and connect your GitHub account.
   - Select the repository containing your portfolio template.
3. **Deploy**:
   - Click “Deploy” and your portfolio will be live in moments!

---

## 🙏 **Acknowledgments**

This project was built with love for the developer community, using:

- [**Next.js**](https://nextjs.org/) for its robust React framework.
- [**TailwindCSS**](https://tailwindcss.com/) for utility-first CSS.
- [**shadcn**](https://shadcn.dev/) for design consistency.

We welcome contributions to enhance functionality or improve design.
