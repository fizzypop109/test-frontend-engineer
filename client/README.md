This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Run The Project Locally

First, run the development server (make sure you are in the client directory first):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Visit The Deployed Project

The project is hosted on Vercel at: https://test-frontend-engineer-nu.vercel.app/

## Site Overview

While this is a much smaller example of an e-commerce site, I used other larger-scale sites as references for UX elements such as how products should be displayed, how the cart looks, and what sort of sorting options should be available.

This app essentially has three pages - the Home page, the Products page, and the Product page.

The data comes from https://fakestoreapi.in/. I chose this API because it had a bit more to work with.

The Home page shows the categories as clickable panels. Each panel has a corresponding image in the project that it picks up by name and displays. Each panel when clicked routes to the products page, adding a query parameter for the chosen category.

The Header is a component that lives on all pages and contains a search toggle and panel, the title of the store, and the cart popup toggle. Clicking the search toggle will open a panel containing an input for the user to search for a product. This functionality simply routes to the Products page, passing the search term as a query parameter.

The Products page simply takes this query parameter and fetches the relevant products. It decides based on whether each parameter is null or not. If the search term is passed, the Products page will fetch all Products where the title of the Product contains the search term, or the search term contains the category. If a category is passed, the page will fetch all products within that category. The user can sort the products alphabetically, and by price (low -> high and high -> low). The products are loaded 20 at a time, and will continue loading automatically as the user scrolls. Clicking on any product will take the user to the Product page, giving the product's id as a query parameter.

The Product page will then take the id and fetch the relevant product, displaying it to the user in a hopefully familiar way. The user can add the product to their cart by clicking the button, which then turns it into a quantity selector, allowing the user to easily add more or less of the product to the cart.

The Cart 'page' is a popup that can be toggled by clicking the icon in the top right of the header. This simply shows the user all the products they have in their cart, one entry per product, and allows them to adjust the quantity, or remove the product entirely. The user can also see the total cost of all items in the cart.

## Details on Approach

As mentioned above, I attempted to replicate other larger e-commerce sites where appropriate. I decided against a mega menu however as this would leave the Home page with no content, and since the site is small, navigation is simple and users can return to the Home page at any time with one click.

I try to design as much as possible with extensibility in mind. If the API were to add more categories, the site would allow for this easily, however the panels would be blank on the Home page as images would need to be manually added. Adding more products would be seamless.

I've used Context Providers for both the categories and the cart. The categories I want to only be fetched once per use of the site, so this felt appropriate, albeit a little bit OTT. The cart functionality makes sense to use as context.

Most of my pieces in this project are components. This is to keep to the 'single responsibility' principle, allow easy customisations, as well as keeping things overall DRY. The Quantity Selector, for example, is used in both the Product page and the Cart popup seamlessly. The Icon components, as another example, can be easily customised using the width, height, and colour props.

Using NextJS makes routing super simple. I have three pages in the site, one being the Home page, and the other two are simply /products and /product with query parameters to decide logic.

I have setup global variables for colours and padding, making custom background and text colouring with Tailwind easy.