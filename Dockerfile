# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:10.1.0 as node

# Create a directory where our app will be placed. This might not be necessary
COPY . /mmdb/

# Change directory so that our commands run inside this new directory
WORKDIR /mmdb

# Install dependencies using npm
RUN yarn install

#Build the app
RUN npm run build
