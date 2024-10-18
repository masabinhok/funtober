# Funtober Thumbnail Creation Guide

Welcome to the **Funtober** project! This guide will help you create and integrate thumbnails for the various fun activities and games in the collection. Follow the steps below to ensure consistency and style across all thumbnails.

### Thumbnail Guidelines

1. **Generate the Thumbnail:**

   - You can use any image generator to create the thumbnails. We suggest using **Freepik AI**, as it offers great quality for free.
   - For inspiration, refer to the example thumbnail for "Spend Elon Money," which was made using Freepik AI and sets the standard for the look and feel we're aiming for.

2. **Thumbnail Design:**
   - **Text:** Make sure the game or activity name is clearly visible in **large, bold font** on the thumbnail. The name should be **fancy** and **attractive**, drawing attention to the game.
   - **Visuals:** The design should be engaging and fun, aligned with the spirit of Funtober. You can use a tool like **ChatGPT** to help you craft a beautiful prompt describing the game, and this will generate a thumbnail with a fitting theme.
3. **Saving the Thumbnail:**

   - After creating your thumbnail, save the file in the **`assets`** folder of the project.
   - Name the file using the game or activity name to keep things organized, for example, `spend-elon-money-thumbnail.png`.

4. **Integrating the Thumbnail:**

   - After saving the thumbnail in the **assets** folder, you need to import it into the **`index.ts`** file.
   - Follow the example of how it's done for "Spend Elon Money":
     ```typescript
     import spendElonMoney from './assets/spend-elon-money.jpeg';
     export { spendElonMoney };
     ```
   - Once imported and exported, this allows the thumbnail to be used in the game listing.

5. **Adding the Thumbnail to Funtober Array:**
   - Now that the thumbnail is integrated, you can link it to the respective game or activity inside the **`funtober.ts`** file (located in the **data** folder).
   - In the `funtober.ts` array, update the game object to include the new thumbnail. For example:
     ```typescript
     {
       name: 'Spend Elon Money',
       link: '/spend-elon-money',
       imageUrl: spendElonMoney,  // Thumbnail added here
       ...
     }
     ```

### Summary

- Use **Freepik AI** or another image generator to create an attractive thumbnail.
- Ensure the **game name** is prominent and visually engaging.
- Save the thumbnail in the **`assets`** folder.
- Import and export the thumbnail in **`index.ts`**.
- Add the thumbnail to the corresponding game in the **`funtober.ts`** array.

With these simple steps, you can maintain a consistent and attractive set of thumbnails for Funtober. Happy designing!
