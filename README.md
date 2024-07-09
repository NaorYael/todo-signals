# My Angular Todo App

This is a simple Todo application built with Angular. The app allows users to add, toggle, and delete todos, with state persistence using local storage. The app is styled with SCSS and deployed on Vercel.

## Demo

Check out the live demo: [Todo App Demo](https://todo-signals-rn8a0ufam-naoryaels-projects.vercel.app/)

## Features

- Add new todos
- Toggle todo completion
- Delete todos
- Persist todos using local storage
- Responsive and modern design using SCSS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org)
- Angular CLI (`npm install -g @angular/cli`)
- Vercel CLI (`npm install -g vercel`)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the App

1. Build the app:

    ```bash
    ng build --prod
    ```

2. Serve the app locally:

    ```bash
    ng serve
    ```

   Navigate to `http://localhost:4200/` to see the app in action.

### Deployment

1. Initialize Vercel in your project directory:

    ```bash
    vercel
    ```

   Follow the prompts to set up your project.

2. Deploy the app:

    ```bash
    vercel --prod
    ```

3. Your app should now be live at the URL provided by Vercel.

### Usage

- **Add Todo:** Enter a new todo title in the input field and click "Add".
- **Toggle Todo:** Click the checkbox next to a todo to mark it as completed or not.
- **Delete Todo:** Click the "Delete" button to remove a todo.

## Built With

- [Angular](https://angular.io/) - The web framework used
- [SCSS](https://sass-lang.com/) - CSS preprocessor for styling
- [Vercel](https://vercel.com/) - Hosting and deployment platform

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

