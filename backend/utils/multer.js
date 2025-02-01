import multer from 'multer';
import path from 'path';

 
 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Rename file
    },
  });

  
  const upload = multer({ storage: storage });
  export default upload