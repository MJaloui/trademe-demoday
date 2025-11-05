# TradeMe

<img width="1079" height="735" alt="image" src="https://github.com/user-attachments/assets/d2b46c99-8a84-4336-a62a-29da796c00ac" />

A fullstack application for trading clothing, shoes, sneakers, accessories, and handbags.

## Project Structure

This project contains:
- **EJS, JS, CSS**
- **MongoDB Setup** 
- **Basic Server Setup** 

## Features (CRUD)

- Filter items by category (Tops, Bottoms, Shoes, Accessories, Outerwear)
- Add new items with brand, size, category, image URL
- Edit/Delete your items
- "I'm Interested" button to show contact information
- Simple username input 

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



