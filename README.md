# Modern Web Application with React, Tailwind CSS, Firebase, and TensorFlow.js

</br>
<div align="center">
<img src="https://github.com/A-Morabet/react-tensorflow-website/blob/main/01-screenshot.png" width="600"/>
</div>
</br>

## Summary

React website built using Vite, React, Firebase, Tensorflow.js and Tailwind CSS.
It features the following:

* Fully functioning authentication system with sign-in, login and password reset options.
* Modern and responsive design for all devices.
* Browser-integrated Image Classifier AI model.

Website layout is inspired from current start-up trends, such as the bento box layout, which includes is showcased in two different variants:
* Classic bento box layout, which consists of a grid-based structure with sections of same size, which can be seen in the "Services" section.
* Asymmetrical bento box layout, which in this case, an offset has been applied to one of the columns, which creates a different flow to the content. This is seen in the "Roadmap" section.

Once the user creates an account through the sign-in option, he'll be able to access the ML 
Model and test it uploading images through URLs or from his local device.
The Image Classifier model was trained using [Microsoft's Azure Custom Vision](https://azure.microsoft.com/en-au/products/ai-services/ai-custom-vision),
the model was then exported into tensorflow.js format and then integrated in the website's logic 
to make predictions.

The model can predict the following dog species: </br>
- Afghan - African Wild Dog - Airedale - American Hairless - American Spaniel </br>
- Basenji - Basset - Beagle - Bearded Collie -Bermaise - Bichon Frise - Bienheim </br>
- Bloodhound - Bluetick - Border Collie - Borzoi - Boston Terrier - Boxer - Bull Mastiff </br>
- Bull Terrier.

### Prerequisites

1. Launching npm install command.
   ```sh
   npm install
   ```

### Installation

1. Clone the repo.
   ```sh
   git clone https://github.com/A-Morabet/react-tensorflow-website
   ```
2. Open project and run "npm install" on source code editor.
   ```sh
   npm install
   ```
3. Wait for all modules to install, and then run "npm run dev" command.
   ```sh
   npm run dev
   ```
5. There is a known issue in some devices where the build doesn't compile due to the following error: </br>
   Could not resolve "sharp"
   ```
   node_modules/base64-to-tensor/dist/convert-async.js:97:102:
      97 │ ...    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("sharp")); })];
   ```
   The solution is to ctrl+click the first line to enter the file containing the error,
   and then replace "(require(" <ins> sharp </ins> "))" with "(require("<u>./</u>"))".


## Contact

Amine Morabet - hey@aminemorabet.com

Project Link: [https://A-Morabet.github.io/react-tensorflow-website](https://A-Morabet.github.io/react-tensorflow-website)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Project link: https://a-morabet.github.io/react-tensorflow-website/
