const fs = require('fs');
    
export default async function handler (req, res) {
    console.log(req);
    // const abi = JSON.parse(fs.readFileSync(req.path)).abi;

    return res.status(200).json({ abi: "abi" });
}