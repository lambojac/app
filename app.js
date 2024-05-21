const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 7000;
app.get("/",(req,res)=>{
    console.log("response")
})

app.listen(7000,()=>{
    console.log(`server running on ${port}`)
})

// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Upload files to the 'uploads' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Rename files with a timestamp and original extension
//   }
// });

// // Create Multer instance
// const upload = multer({ storage: storage });

// // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static('uploads'));

// // Handle file upload programmatically
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   res.send(`File uploaded successfully: ${req.file.filename}`);
// });

// // Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
