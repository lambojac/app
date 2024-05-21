// const express = require('express');
// const { createClient } = require('@supabase/supabase-js');

// const app = express();
// const port = 9000; // Choose any port you prefer
// app.use(express.json());
// // Initialize Supabase client
// const supabaseUrl = 'https://easyaiqtuqvuxjmjfyzd.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhc3lhaXF0dXF2dXhqbWpmeXpkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjIwNDcwMSwiZXhwIjoyMDMxNzgwNzAxfQ.q0uiWSo-JGNf_p00o6eL8WEKLYVP7TbHOLwSV5Jr_Sk';
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Define routes
// app.get('/', async (req, res) => {
//     // Example: Fetch data from Supabase
//     const { data, error } = await supabase
//         .from('kennie')
//         .select('*');

//     if (error) {
//         return res.status(500).json({ error: 'Error fetching data from Supabase' });
//     }

//     res.json(data);
// });

// app.post('/create', async (req, res) => {
//     const { name, age } = req.body; // Assuming you're sending JSON data with 'name' and 'age' fields

//     try {
//         // Example: Insert data into Supabase table
//         const { data, error } = await supabase
//             .from('kennie')
//             .insert([{ name, age }]);

//         if (error) {
//             return res.status(500).json({ error: 'Error inserting data into Supabase' });
//         }

//         res.status(201).json({ message: 'Data inserted successfully', data });
//     } catch (error) {
//         console.error('Error:', error.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const multer  = require('multer');
const app = express();
const port = 4000;
const cors=require("cors")
app.use(cors())

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});
app.get("/",(rea,res)=>{
    res.json({message:"hh"})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
