**NOTE**: If a vanilla js project has not been set up yet, start from start 1. Otherwise move on to ...

<table>
    <tr>
        <th>Steps:</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>1. </td>
        <td>Create a project with vite: <code>npm create vite@latest</code> (if it is desired to initiate the installation in the same working folder then this follow the command <code>npm create vite@latest .</code>)</td>
    </tr>
    <tr>
    <td>2.</td>
    <td>Select vanilla</td>
    </tr>
    <tr>
    <td>3.</td>
    <td>Select javascript or typescript (this is up to you)</td>
    </tr>
    <tr>
    <td>4.</td>
    <td>Run the <code>npm install</code> command (or with shortkey <code>npm i</code>), 
    <br><br>
    <strong>Important:</strong> make sure you are inside you working project, otherwise the npm install might not work. This can be done to run the command in terminal <code>cd <"name of you project"></code>, following with another command <code> code . </code>, the command <code>code .</code> should always be able to open visual studio code.
    </td> 
    </tr>
    <tr>
    <td>
    5.
    </td>
    <td>
    Create file named <code>vite.config.js</code>. 
    </td>
    </tr>
    <tr>
    <td>
    6.
    </td>
    <td>
    Copy this code and paste it into you the vite.config.js:
    <br>
    <code>

    import { defineConfig } from "vite";

    export default defineConfig({
        build: {
            outDir: 'dist'
        },
    // Define module aliases for easier imports
        resolve: {
            alias: {
            "@": "/src",
            },
        },

    // Server configuration for development
        server: {
            watch: {
                usePolling: true,
            },
        host: true,
        strictPort: true,
        port: 5050,
        },
    });

</code>
</td>
</tr>
<tr>
<td>
7. 
</td>
<td>
Create a Dockerfile in the root of the project
</td>
</tr>
<tr>
<td>8.</td>
<td>Copy this and paste it in the Dockerfile
<br>
<code> 
    
    FROM node:16 <------ this can be another baseimage as well
    
    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 5173 // The port is exposed to 5173

    CMD [ "npm", "run", "dev" ]

</code>
</td>
</tr> 
<tr>
<td>
9.
</td>
<td>
    Build the image by running this command in the terminal.
    <code>
    docker build -t <"the name of your created image image, this is up to you">
    </code>
</td>
</tr>
<tr>
<td>10.</td>
<td>Run the container by running this command: <br>
<code>docker run -p 5050:5050 <"the name of the image"></code><br><br> 
<strong>Note:</strong> Creating a container without setting up a name will be created by docker by default. This might be difficult to find, since the name are being randomized.<br><br>

If it is desired to set up a own name for the container run this command:

docker run -p 5050:5050 --name <"you created name of the container"> <"the name of the image">

<strong>Info</strong> -p flag is an annotation to the port. The best practice would be to set up the port the same as the one that is being created in the vite.config.js. But it is also possible to create a custom one. just run the command: <code> <br><br>
docker run -p <"The port which is desire by you">:5050  --name <"you created name of the container"> <"the name of the image">
</code>

<strong>Keep in mind that a port cannot listen to another port with the same value</strong>
</td>
</tr>
</table>

By following these step, the application should be able to run in the browser.

Feel free to provide feedback if this is not the case. 
