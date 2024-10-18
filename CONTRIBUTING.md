# Contributing to Funtober

Thank you for your interest in contributing to **Funtober**, a collection of fun games and activities! We appreciate all contributions, whether you're adding new games, fixing bugs, improving features, or enhancing documentation.

Follow the guidelines below to ensure a smooth and successful contribution process.

## How to Contribute

### 1. Fork the Repository

- **Fork** the repository to your GitHub account.
- Clone your forked repository:
  ```bash
  git clone https://github.com/your-username/funtober.git
  cd funtober
  ```

### 2. Install Dependencies

- This project is built using **Vite**, **React**, and **TypeScript**, so you'll need to install the necessary dependencies:
  ```bash
  npm install
  ```

### 3. Create a New Branch

- Always create a new branch for your changes, named descriptively after the feature or issue you're working on:
  ```bash
  git checkout -b add-new-game-feature
  ```

### 4. Make Your Changes

- Add new games, features, or enhancements as needed.
  
#### **Creating a Thumbnail**
If you're adding a new game or activity, you will need to create a thumbnail. To ensure consistency and style, follow our [Thumbnail Guide](THUMBNAIL_GUIDE.md). Here’s an overview:
  
- Use an image generator like **Freepik AI** to create the thumbnail.
- Ensure the game name is prominent in **large, bold font**.
- Save the thumbnail in the **`assets`** folder.
- Import and export it in the **`index.ts`** file.
- Update the game object in **`funtober.ts`** to include the new thumbnail.

For more details, refer to the full [Thumbnail Guide](THUMBNAIL_GUIDE.md).

### 5. Test Your Changes

- Make sure your changes work as expected. You can run the development server locally:
  ```bash
  npm run dev
  ```

- Ensure the new game or feature works smoothly without breaking the existing functionality.

### 6. Commit Your Changes

- Use clear and descriptive commit messages. For example:
  ```bash
  git commit -m "feat: add new game 'Spend Elon Money'"
  ```

### 7. Push Your Branch

- Push your branch to your forked repository:
  ```bash
  git push origin add-new-game-feature
  ```

### 8. Open a Pull Request

- Open a **Pull Request** (PR) to the main repository:
  - Provide a clear title and description.
  - Link any issues you're addressing.
  - Add any relevant reviewers.

### 9. Code Review

- Be ready to receive feedback or requested changes.
- Address any requested changes and update your PR as needed.
- Once your PR is approved, your contribution will be merged into **Funtober**.

## Code of Conduct

By participating in this project, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Reporting Bugs or Issues

If you encounter bugs or have any issues, please create a new issue in the **Issues** tab, providing as much detail as possible.

## Getting Help

If you need help during the contribution process, feel free to open an issue or reach out to the maintainers.

Thank you for contributing to **Funtober**!

