const SparePart = require('../models/SparePart');


// ================= ADD SPARE PART (Admin with Image Upload) =================
exports.createSparePart = async (req, res) => {
  try {
    const { partName, description, price, quantity } = req.body;

    const imagePath = req.file
      ? `/uploads/${req.file.filename}`
      : '/uploads/no-image.png';

    const sparePart = await SparePart.create({
      partName,
      description,
      price,
      quantity,
      image: imagePath
    });

    res.status(201).json(sparePart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= GET ALL SPARE PARTS (Public) =================
exports.getAllSpareParts = async (req, res) => {
  try {
    const parts = await SparePart.find();
    res.status(200).json(parts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= GET SINGLE SPARE PART =================
exports.getSparePartById = async (req, res) => {
  try {
    const part = await SparePart.findById(req.params.id);

    if (!part) {
      return res.status(404).json({ message: "Spare part not found" });
    }

    res.status(200).json(part);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= UPDATE SPARE PART (Admin) =================
exports.updateSparePart = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // If new image uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedPart = await SparePart.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedPart) {
      return res.status(404).json({ message: "Spare part not found" });
    }

    res.status(200).json(updatedPart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= DELETE SPARE PART (Admin) =================
exports.deleteSparePart = async (req, res) => {
  try {
    const deletedPart = await SparePart.findByIdAndDelete(req.params.id);

    if (!deletedPart) {
      return res.status(404).json({ message: "Spare part not found" });
    }

    res.status(200).json({ message: "Spare part deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// const SparePart = require('../models/SparePart');
// const path = require('path');


// // 🔹 Add Spare Part (Admin) with Image Upload
// exports.createSparePart = async (req, res) => {
//   try {
//     const { partName, description, price, quantity } = req.body;

//     let imagePath = '';

//     if (req.file) {
//       imagePath = `/uploads/${req.file.filename}`; // store relative path
//     }

//     const sparePart = await SparePart.create({
//       partName,
//       description,
//       price,
//       quantity,
//       image: imagePath
//     });

//     res.status(201).json(sparePart);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Get All Spare Parts (Public)
// exports.getAllSpareParts = async (req, res) => {
//   try {
//     const parts = await SparePart.find();
//     res.json(parts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Get Single Spare Part
// exports.getSparePartById = async (req, res) => {
//   try {
//     const part = await SparePart.findById(req.params.id);

//     if (!part) {
//       return res.status(404).json({ message: "Spare part not found" });
//     }

//     res.json(part);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Update Spare Part (Admin)
// exports.updateSparePart = async (req, res) => {
//   try {
//     const updateData = { ...req.body };

//     // If new image uploaded
//     if (req.file) {
//       updateData.image = `/uploads/${req.file.filename}`;
//     }

//     const updatedPart = await SparePart.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     if (!updatedPart) {
//       return res.status(404).json({ message: "Spare part not found" });
//     }

//     res.json(updatedPart);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Delete Spare Part (Admin)
// exports.deleteSparePart = async (req, res) => {
//   try {
//     const deletedPart = await SparePart.findByIdAndDelete(req.params.id);

//     if (!deletedPart) {
//       return res.status(404).json({ message: "Spare part not found" });
//     }

//     res.json({ message: "Spare part deleted successfully" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };






// const SparePart = require('../models/SparePart');


// // 🔹 Add Spare Part (Admin)
// exports.createSparePart = async (req, res) => {
//   try {
//     const { partName, description, price, quantity, image } = req.body;

//     const sparePart = await SparePart.create({
//       partName,
//       description,
//       price,
//       quantity,
//       image
//     });

//     res.status(201).json(sparePart);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Get All Spare Parts (Public)
// exports.getAllSpareParts = async (req, res) => {
//   try {
//     const parts = await SparePart.find();
//     res.json(parts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Get Single Spare Part
// exports.getSparePartById = async (req, res) => {
//   try {
//     const part = await SparePart.findById(req.params.id);

//     if (!part) {
//       return res.status(404).json({ message: "Spare part not found" });
//     }

//     res.json(part);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Update Spare Part (Admin)
// exports.updateSparePart = async (req, res) => {
//   try {
//     const updatedPart = await SparePart.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!updatedPart) {
//       return res.status(404).json({ message: "Spare part not found" });
//     }

//     res.json(updatedPart);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // 🔹 Delete Spare Part (Admin)
// exports.deleteSparePart = async (req, res) => {
//   try {
//     const deletedPart = await SparePart.findByIdAndDelete(req.params.id);

//     if (!deletedPart) {
//       return res.status(404).json({ message: "Spare part not found" });
//     }

//     res.json({ message: "Spare part deleted successfully" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
