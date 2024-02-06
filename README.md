# WeatherApp

Welcome to the WeatherApp repository!

Here you will find an exciting project that allows you to visualize the weather of your current location and five other predetermined cities. We're thrilled to have you here and will provide you with the necessary instructions to install, configure, and run this project efficiently.

## Try the Project Here

[WeatherApp](https://weather-app-tischlercristian.vercel.app/)

## Project Description

This project consists of an application that provides detailed information about the weather. With a focus on usability and accuracy, the application allows you to access the weather forecast for your current location and five other predefined cities. By using advanced technologies and following the best development practices, this application ensures a smooth and reliable experience for its users.

## Requirements

Before getting started, make sure to have [Node.js](https://nodejs.org/en) and [Yarn](https://yarnpkg.com/) installed on your system.

## Installation

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/CristianTischler/WeatherApp.git
```

2. Navigate to the project folde:

```bash
cd WeatherApp
```

3. Install project dependencies using Yarn:

```bash
yarn
```

## Configuration

To ensure the project works correctly, you need to create an environment variables file called ".env.local" and add the following:

```bash
NEXT_PUBLIC_API_URL=https://api.openweathermap.org/data/3.0/onecall
NEXT_PUBLIC_API_KEY= { REPLACE WITH YOUR API KEY }
```

You can obtain your API KEY from [Open Weather](https://home.openweathermap.org/api_keys)

## Execution

Once you have installed the dependencies, you can run the application locally as follows:

```bash
yarn dev
```

This will start the application in your local environment, and you can access it through your browser at [http://localhost:3000](http://localhost:3000).

## Unit Testing

To run the project's unit tests, use the following command:

```bash
yarn test
```

This command will run all tests and provide you with information about their status..

## Contact

Email: [tischlercristian@gmail.com](mailto:tischlercristian@gmail.com)

Thank you for your interest in this project!
