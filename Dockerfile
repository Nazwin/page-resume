# Use the official Node.js image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install gulp globally
RUN npm install --global gulp-cli

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["gulp"]