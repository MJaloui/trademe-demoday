# TradeMe Demo Day

A fullstack application for trading clothing items.

## Project Structure

This project contains:
- **HTML/CSS Design & Layout** - All views and styling (no functionality yet)
- **MongoDB Setup** - Database connection and Item model schema
- **Basic Server Setup** - Express server ready for logic implementation

## Features (Design Only - Logic to be added)

- View all items in a grid layout
- Filter items by category (Tops, Bottoms, Shoes, Accessories, Outerwear)
- Add new items with brand, size, category, image URL
- Edit/Delete your items
- "I'm Interested" button to show contact information
- Simple username input (no passwords)

## MongoDB Collections

- **items** - Contains clothing items with:
  - username (String)
  - brand (String)
  - size (String)
  - category (String)
  - imageURL (String)
  - contactInfo (String)
  - timestamps (createdAt, updatedAt)

## Installation

1. Navigate to the project folder:
   ```bash
   cd trademe-demoday
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `config/database.js` with your MongoDB connection string

4. Run the server:
   ```bash
   node server.js
   ```

5. Open browser to `http://localhost:8080`

## Next Steps

- Add logic to routes.js for CRUD operations
- Implement category filtering functionality
- Add username session management
- Connect forms to database operations

