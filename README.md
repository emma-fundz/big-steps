
# BigSteps - Premium Footwear

A modern e-commerce website for BigSteps, featuring premium footwear products.

## Features

- Responsive design for all device sizes
- Product showcase
- About section
- Services information
- Location map
- Contact form

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Update the `vite.config.ts` file to set the correct base path for your repository:
   
   ```js
   base: "/your-repository-name/",
   ```

2. Build the project:
   
   ```bash
   npm run build
   ```

3. Deploy using the included script (make sure to update with your GitHub username and repository):
   
   ```bash
   # Make the script executable
   chmod +x deploy.sh
   
   # Run the script
   ./deploy.sh
   ```

### Option 2: GitHub Actions Automatic Deployment

1. Push your code to the main branch of your GitHub repository.
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"
3. GitHub Actions will automatically build and deploy your site when you push to the main branch.

## Custom Domain (Optional)

If you want to use a custom domain with your GitHub Pages site:

1. Add your domain to the CNAME file in the public directory
2. Configure your domain's DNS settings as per GitHub's instructions
3. Update the base path in `vite.config.ts` to '/'

## Alternative Hosting Options

If you need backend functionality in the future, consider using:

- **Vercel**: Excellent for React applications with serverless functions
- **Netlify**: Great for static sites with form handling and serverless functions
- **Firebase**: Provides authentication, database, and hosting in one platform

## License

[MIT](LICENSE)
